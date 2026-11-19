import type { ResumeVersion } from '../data/resume';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function parseVersion(search: URLSearchParams): ResumeVersion {
	return search.get('v') === 'engineer' ? 'engineer' : 'designer';
}

function setVersion(root: HTMLElement, version: ResumeVersion, animate: boolean) {
	root.dataset.version = version;
	const toggle = root.querySelector<HTMLElement>('[data-resume-toggle]');
	toggle?.setAttribute('data-active', version);
	toggle?.querySelectorAll<HTMLButtonElement>('[data-version-option]').forEach((btn) => {
		btn.setAttribute('aria-selected', String(btn.dataset.versionOption === version));
	});

	const pdf = root.querySelector<HTMLAnchorElement>('[data-resume-pdf]');
	if (pdf) {
		pdf.href =
			version === 'engineer'
				? '/resume/faruq-so-resume-design-engineer.pdf'
				: '/resume/faruq-so-resume-product-designer.pdf';
	}

	root.querySelectorAll<HTMLElement>('[data-version-panel]').forEach((panel) => {
		const panelVersion = panel.dataset.versionPanel as ResumeVersion;
		panel.hidden = panelVersion !== version;
	});

	if (animate && !reducedMotion()) {
		root.dataset.switching = 'true';
		root.querySelectorAll<HTMLElement>('[data-version-swap]').forEach((el) => {
			el.classList.remove('is-out', 'is-in');
			void el.offsetWidth;
			el.classList.add('is-in');
		});
		window.setTimeout(() => {
			delete root.dataset.switching;
		}, 220);
	}

	const url = new URL(window.location.href);
	if (version === 'engineer') url.searchParams.set('v', 'engineer');
	else url.searchParams.delete('v');
	window.history.replaceState({}, '', url);
}

function initEntrance(intro: HTMLElement) {
	if (reducedMotion()) {
		intro.classList.add('is-visible');
		return;
	}
	requestAnimationFrame(() => intro.classList.add('is-visible'));
}

function initStats(root: HTMLElement) {
	const band = root.querySelector<HTMLElement>('[data-resume-stats]');
	if (!band) return;

	const animateValue = (el: HTMLElement, target: number, prefix = '', suffix = '', decimals = 0) => {
		const start = performance.now();
		const duration = 800;
		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - (1 - t) ** 3;
			const value = target * eased;
			el.textContent = `${prefix}${decimals ? value.toFixed(decimals) : Math.round(value)}${suffix}`;
			if (t < 1) requestAnimationFrame(tick);
			else el.textContent = el.dataset.display ?? el.textContent;
		};
		requestAnimationFrame(tick);
	};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				observer.disconnect();
				if (reducedMotion()) return;

				band.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
					const target = Number(el.dataset.count);
					const prefix = el.dataset.prefix ?? '';
					const suffix = el.dataset.suffix ?? '';
					const decimals = Number(el.dataset.decimals ?? 0);
					animateValue(el, target, prefix, suffix, decimals);
				});
			}
		},
		{ threshold: 0.35 },
	);

	observer.observe(band);
}

function initReveals(root: HTMLElement) {
	const sections = root.querySelectorAll<HTMLElement>('[data-reveal]');
	if (reducedMotion()) {
		sections.forEach((s) => s.classList.add('is-revealed'));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-revealed');
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
	);

	sections.forEach((s) => observer.observe(s));
}

function initAccordion(root: HTMLElement) {
	const roles = root.querySelectorAll<HTMLElement>('.resume-role');

	const setOpen = (role: HTMLElement, open: boolean) => {
		role.classList.toggle('is-open', open);
		const btn = role.querySelector<HTMLButtonElement>('.resume-role__header');
		btn?.setAttribute('aria-expanded', String(open));
	};

	root.querySelectorAll<HTMLElement>('[data-version-panel]').forEach((panel) => {
		if (panel.hidden) return;
		const open = panel.querySelector<HTMLElement>('.resume-role.is-open');
		if (!open) {
			const first = panel.querySelector<HTMLElement>('.resume-role[data-default-open]');
			if (first) setOpen(first, true);
		}
	});

	roles.forEach((role) => {
		const btn = role.querySelector<HTMLButtonElement>('.resume-role__header');
		if (!btn) return;

		btn.addEventListener('click', () => {
			const panel = role.closest<HTMLElement>('[data-version-panel]');
			const isOpen = role.classList.contains('is-open');
			panel?.querySelectorAll<HTMLElement>('.resume-role').forEach((r) => setOpen(r, false));
			if (!isOpen) setOpen(role, true);
		});
	});
}

function initCopyEmail(root: HTMLElement, email: string) {
	const btn = root.querySelector<HTMLButtonElement>('[data-copy-email]');
	const label = btn?.querySelector<HTMLElement>('[data-copy-label]');
	if (!btn || !label) return;

	let revertTimer: number | undefined;

	btn.addEventListener('click', async () => {
		try {
			await navigator.clipboard.writeText(email);
		} catch {
			return;
		}
		btn.classList.add('is-copied');
		label.textContent = 'Copied';
		window.clearTimeout(revertTimer);
		revertTimer = window.setTimeout(() => {
			btn.classList.remove('is-copied');
			label.textContent = 'Copy email';
		}, 2000);
	});
}

export function initResumePage(root: HTMLElement, email: string) {
	const version = parseVersion(new URLSearchParams(window.location.search));
	setVersion(root, version, false);

	const toggle = root.querySelector<HTMLElement>('[data-resume-toggle]');
	toggle?.querySelectorAll<HTMLButtonElement>('[data-version-option]').forEach((btn) => {
		btn.addEventListener('click', () => {
			const next = btn.dataset.versionOption as ResumeVersion;
			if (next === root.dataset.version) return;
			setVersion(root, next, true);
			initAccordion(root);
		});
	});

	const intro = root.querySelector<HTMLElement>('.resume-intro');
	if (intro) initEntrance(intro);

	initStats(root);
	initReveals(root);
	initAccordion(root);
	initCopyEmail(root, email);
}
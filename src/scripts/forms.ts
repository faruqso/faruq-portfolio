/**
 * Sends any `[data-enquiry-form]` through Web3Forms without leaving the page.
 * Used by the contact form and the audit request form.
 * Without an access key, the form opens the visitor's email app instead.
 */
export function wireForms() {
	document.querySelectorAll<HTMLFormElement>('[data-enquiry-form]').forEach((form) => {
		const status = form.querySelector<HTMLElement>('[data-enquiry-status]');
		const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
		const accessKey = form.querySelector<HTMLInputElement>('[name="access_key"]')?.value ?? '';

		const say = (text: string, state?: 'ok' | 'error') => {
			if (!status) return;
			status.textContent = text;
			status.dataset.state = state ?? '';
		};

		const openMailClient = () => {
			const data = new FormData(form);
			const lines: string[] = [];
			data.forEach((value, key) => {
				if (key === 'botcheck' || typeof value !== 'string' || !value.trim()) return;
				lines.push(`${key}: ${value.trim()}`);
			});
			const subject = form.dataset.mailSubject ?? 'Message from your website';
			window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(
				subject,
			)}&body=${encodeURIComponent(lines.join('\n'))}`;
			say(`Opening your email app… If nothing happens, write to ${form.dataset.email}.`);
		};

		form.addEventListener('submit', async (event) => {
			event.preventDefault();

			if (!accessKey) return openMailClient();

			if (submit) submit.disabled = true;
			say(form.dataset.sending ?? 'Sending…');

			try {
				const response = await fetch(form.action, {
					method: 'POST',
					headers: { Accept: 'application/json' },
					body: new FormData(form),
				});
				const result = await response.json().catch(() => ({}));

				if (response.ok && result.success) {
					form.reset();
					say(form.dataset.success ?? 'Thanks — your message is on its way.', 'ok');
				} else {
					say(form.dataset.error ?? 'That didn’t send.', 'error');
				}
			} catch {
				say(form.dataset.error ?? 'That didn’t send.', 'error');
			} finally {
				if (submit) submit.disabled = false;
			}
		});
	});
}

export type ResumeVersion = 'designer' | 'engineer';

export type ResumeStat = {
	display: string;
	label: string;
	/** Numeric value for count-up; omit for non-numeric stats like "$60K+" */
	countUp?: { target: number; prefix?: string; suffix?: string; decimals?: number };
};

export type ResumeRole = {
	id: string;
	client: string;
	dates: string;
	descriptor: string;
	bullets: string[];
	caseStudy?: { label: string; href: string };
	quote?: { text: string; attribution: string };
	defaultOpen?: boolean;
};

export type SkillGroup = {
	title: string;
	chips: string[];
};

export type ResumeVersionContent = {
	roleLine: string;
	summary: string;
	umbrella: { title: string; meta: string };
	roles: ResumeRole[];
	spotlight: {
		eyebrow: string;
		title: string;
		meta: string;
		body: string;
		image: string;
		imageAlt: string;
		caseStudy?: { label: string; href: string };
	};
	skills: SkillGroup[];
};

export const resumeMeta = {
	eyebrow: 'RESUME / UPDATED NOV 2026',
	name: 'Faruq Soremekun',
	location: 'Nigeria, remote (UTC+1)',
	github: 'https://github.com/faruqso',
} as const;

export const resumeStats: ResumeStat[] = [
	{ display: '$60K+', label: 'earned on Upwork' },
	{ display: '42', label: 'contracts since Sept 2023', countUp: { target: 42 } },
	{ display: '100%', label: 'Job Success Score', countUp: { target: 100, suffix: '%' } },
	{ display: '31', label: '5-star reviews', countUp: { target: 31 } },
	{ display: '5+ years', label: '40+ businesses served' },
];

export const resumePdfs: Record<ResumeVersion, string> = {
	designer: '/resume/faruq-so-resume-product-designer.pdf',
	engineer: '/resume/faruq-so-resume-design-engineer.pdf',
};

const mightyOctoRole: ResumeRole = {
	id: 'mightyocto',
	client: 'MightyOcto',
	dates: 'Feb 2025 – Present',
	descriptor: 'AI documentation SaaS, Amsterdam',
	defaultOpen: true,
	bullets: [
		'Rebuilt the brand from scratch: an 80+ page guideline covering logo, type, colour and mascot options.',
		"Designed the SaaS web app UI for the client's dev team, then designed and built the marketing site in Framer.",
		'Asked back to plan the v1.5 redesign of the web app and landing page.',
	],
	caseStudy: { label: 'View case study', href: '/#work' },
	quote: {
		text: 'His combination of design excellence and development capability is rare and valuable.',
		attribution: 'Founder, MightyOcto · Upwork review',
	},
};

const designerRoles: ResumeRole[] = [
	mightyOctoRole,
	{
		id: 'insurance',
		client: 'Global insurance provider (via IPMG Global)',
		dates: 'Sept 2023 – Dec 2025',
		descriptor: 'Enterprise underwriting platform rebuild · rehired four times',
		bullets: [
			'Redesigned core underwriting workflows for a global insurance platform used by internal teams.',
			'Shipped four sequential contracts: discovery, wireframes, high-fidelity UI and design QA with dev.',
			'Returned for additional scope after each delivery based on stakeholder feedback.',
		],
	},
	{
		id: 'stealth',
		client: 'Stealth infrastructure startup',
		dates: 'Jan 2024 – Jul 2026',
		descriptor: 'Seven contracts: SaaS redesign, marketplace MVP, Framer site',
		bullets: [
			'Led UI/UX for a B2B SaaS redesign and a marketplace MVP from wireframes to dev-ready Figma.',
			'Designed and built the marketing site in Framer with a cohesive product narrative.',
			'Iterated quickly across seven short contracts with founder-led feedback loops.',
		],
	},
	{
		id: 'dottut',
		client: 'DotTut',
		dates: 'Oct 2025',
		descriptor: 'Security SaaS dashboard, designed and built in HTML, CSS, JS',
		bullets: [
			'Designed a security-focused SaaS dashboard and translated it into responsive HTML, CSS and JavaScript.',
			'Structured layouts for dense data tables, settings and onboarding without a component library.',
		],
	},
	{
		id: 'other',
		client: 'Other work',
		dates: '2024 – 2026',
		descriptor: 'Arkadium games site, loyalty iOS app, admin panels, padel club site',
		bullets: [
			'Website and product UI for games, loyalty, sports and admin tools across varied industries.',
			'Mix of design-only handoffs and design-plus-build engagements on Framer or in code.',
		],
	},
];

const engineerRoles: ResumeRole[] = [
	{
		id: 'ai-frontend',
		client: 'AI product front end',
		dates: '2024 – Present',
		descriptor: 'React / Next.js interfaces for AI and SaaS products',
		defaultOpen: true,
		bullets: [
			'Ship production UI from Figma: component structure, responsive layouts and interaction polish.',
			'Work with founders and eng teams on dashboards, onboarding and settings for AI-backed tools.',
		],
	},
	{ ...mightyOctoRole, defaultOpen: false },
	designerRoles[3], // DotTut
	designerRoles[1], // insurance
	{
		id: 'framer-webflow',
		client: 'Framer and Webflow builds',
		dates: '2023 – Present',
		descriptor: 'Marketing sites shipped without a separate dev team',
		bullets: [
			'Design and launch startup marketing sites in Framer and Webflow with CMS and forms wired up.',
			'Own performance, responsive behaviour and handoff docs for client teams.',
		],
	},
	designerRoles[2], // stealth
	{
		id: 'ishasplace',
		client: 'Ishasplace',
		dates: '2021 – Present',
		descriptor: 'Ecommerce, booking and admin dashboards in code',
		bullets: [
			'Branded and built ecommerce, appointment booking and admin dashboards end to end.',
			'Long-running engagement: brand refresh through live shop and operational tooling.',
		],
		caseStudy: { label: 'View project', href: '/#work' },
	},
];

export const resumeVersions: Record<ResumeVersion, ResumeVersionContent> = {
	designer: {
		roleLine:
			'Product designer for AI and SaaS products. I design in Figma and ship in Framer and code.',
		summary:
			'Product designer with 5+ years of experience and 40+ businesses served across AI, SaaS, insurance and fintech. I take products from brand and user flows to finished interfaces, and I build the marketing site myself in Framer or Next.js. Clients keep hiring me again.',
		umbrella: {
			title: 'Independent Product Designer · Upwork',
			meta: 'Sept 2023 – Present · 42 contracts · 31 5-star reviews',
		},
		roles: designerRoles,
		spotlight: {
			eyebrow: '03 / SELF-INITIATED',
			title: 'Quillo',
			meta: '2026 · Mobile app for editing any headless CMS from a phone',
			body: 'Designed the brand, 24 app screens, the landing page and the launch videos. Worked out the Sanity connection flow: a Studio plugin with a QR code, with a pasted token as the fallback.',
			image: '/images/work/quillo.webp',
			imageAlt: 'Quillo mobile app screens',
			caseStudy: { label: 'View case study', href: '/work/quillo' },
		},
		skills: [
			{
				title: 'Product design',
				chips: [
					'User flows',
					'Wireframes',
					'Prototyping',
					'SaaS dashboards',
					'Complex workflows',
					'Mobile UI',
					'UX audits',
				],
			},
			{ title: 'Brand', chips: ['Identity systems', 'Brand guidelines'] },
			{
				title: 'Tools',
				chips: ['Figma', 'Framer', 'Webflow', 'Figma AI', 'Claude', 'Claude Code', 'Codex', 'Cursor'],
			},
			{ title: 'Build', chips: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'] },
		],
	},
	engineer: {
		roleLine: 'Design engineer. Figma to production React/Next.js, Framer and Webflow.',
		summary:
			'Design engineer with 5+ years shipping interfaces for startups. I own the path from Figma to production: React and Next.js when you need custom product UI, Framer or Webflow when you need a site live fast. Strong Upwork track record and repeat clients.',
		umbrella: {
			title: 'Independent Design Engineer · Upwork',
			meta: 'Sept 2023 – Present · 42 contracts · 31 5-star reviews',
		},
		roles: engineerRoles,
		spotlight: {
			eyebrow: '03 / PROJECTS',
			title: 'This portfolio, Quillo and AI explorations',
			meta: 'Self-initiated · 2025 – 2026',
			body: 'Built this Astro site in code with interactive resume and case studies. Quillo is a full product concept with 24 screens and a live prototype page. Ongoing AI and vibe-coding experiments inform how I design and ship.',
			image: '/images/work/quillo.webp',
			imageAlt: 'Quillo project preview',
			caseStudy: { label: 'View Quillo', href: '/work/quillo' },
		},
		skills: [
			{ title: 'Build', chips: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro'] },
			{ title: 'Ship', chips: ['Framer', 'Webflow', 'GitHub', 'Vercel', 'Responsive UI', 'Design systems'] },
			{ title: 'AI', chips: ['Claude', 'Claude Code', 'Cursor', 'Figma AI', 'Codex', 'Prompt-led UI'] },
			{
				title: 'Design',
				chips: ['Figma', 'Prototyping', 'SaaS dashboards', 'User flows', 'Brand', 'UX audits'],
			},
		],
	},
};

export const resumeEducation = {
	eyebrow: '05 / EDUCATION',
	title: 'BEng Computer Engineering',
	detail: 'Federal University Oye-Ekiti · 2017 – 2022',
} as const;

export const resumeRecognition = {
	eyebrow: '06 / RECOGNITION',
	title: 'Paid research interview',
	detail:
		'Selected by an S&P 500 web company to talk about AI design and vibe-coding workflows (Jan 2026). Rated 5.0.',
} as const;

export const resumeLanguages = {
	eyebrow: '07 / LANGUAGES',
	title: 'English, Yoruba, Hausa',
	detail: 'Native. Arabic (basic).',
} as const;
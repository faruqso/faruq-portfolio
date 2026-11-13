import type {
	ClientLogo,
	NavItem,
	ProcessStep,
	Project,
	Service,
	SocialLink,
	Testimonial,
} from '../lib/types';

export const site = {
	name: 'Faruq So',
	wordmark: 'faruq so',
	title: 'Websites that help startups look credible and convert',
	description:
		'UI/UX product designer with 5+ years of experience. I design and build your website, from the first idea to launch.',
	url: 'https://example.com',
	tagline: 'Clear ideas. Considered design.',
	availability: 'Open for work',
} as const;

export const navItems: NavItem[] = [
	{ label: 'Work', href: '#work' },
	{ label: 'Services', href: '#services' },
	{ label: 'Process', href: '#process' },
	{ label: 'About', href: '#about' },
];

export const primaryCta = { label: 'Start a project', href: '#contact' } as const;

export const email = 'faruq.soremekun@gmail.com';

/**
 * Web3Forms access key — sends enquiries straight to `email`, no server needed.
 * Get one free at https://web3forms.com: enter the address above, and the key
 * arrives by email. Paste it here. It is meant to be public (it only allows
 * sending to the address it was issued for), so committing it is fine.
 * While this is empty the form falls back to opening the visitor's email app.
 */
export const formAccessKey = 'f879fc0f-af20-4ac0-ae30-2a8a21d0faba';

export const socialLinks: SocialLink[] = [
	{ label: 'Email', href: `mailto:${email}` },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/faruq-so' },
	{ label: 'X', href: 'https://x.com/faruq_so' },
	{ label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01b79af6022dec159d' },
	{ label: 'Contra', href: 'https://contra.com/faruq_so_qqpt2w2u/reviews' },
];

export const hero = {
	eyebrow: 'Independent designer · Startup partner',
	headline: 'I design and launch websites that help startups ',
	headlineAccent: 'look credible and convert.',
	description:
		'UI/UX product designer with 5+ years of experience. I design and build your website, from the first idea to launch.',
	secondaryCta: { label: 'See my work', href: '#work' },
} as const;

export const clientLogos: ClientLogo[] = [
	{ name: 'MightyOcto', src: '/images/logos/mightyocto.svg', width: 17.391, height: 17.391 },
	{ name: 'Ishasplace', src: '/images/logos/ishasplace.svg', width: 22.261, height: 16.348 },
	{ name: 'Mentra', src: '/images/logos/mentra.svg', width: 15.35, height: 15.304 },
	{ name: 'Client logo', src: '/images/logos/logo-4.png', width: 14.957, height: 15.134 },
	{ name: 'Client logo', src: '/images/logos/logo-5.svg', width: 13.602, height: 15.306 },
	{ name: 'Client logo', src: '/images/logos/logo-6.svg', width: 15.304, height: 15.304 },
];

export const proof = [
	{ value: '5+', label: 'years of experience' },
	{ value: '40+', label: 'businesses worked with' },
	{ value: '100%', label: 'Job Success Score on Upwork' },
] as const;

export const work = {
	eyebrow: 'Selected work',
	title: 'Recent work',
	description: 'A few projects where the design had a clear job to do.',
} as const;

export const projects: Project[] = [
	{
		category: 'AI-powered document management for teams',
		slug: 'mightyocto',
		title: 'MightyOcto',
		outcome: 'From brand identity to a complete product interface and a Framer website.',
		scope:
			'Branding, the full SaaS dashboard UI in Figma, and the website, designed in Figma and built in Framer.',
		image: '/images/work/mightyocto.png',
		imageMobile: '/images/work/mightyocto-mobile.png',
	},
	{
		category: 'Spa & beauty',
		slug: 'ishasplace',
		title: 'Ishasplace',
		outcome: 'A brand, an online shop, appointment booking and the dashboards behind them.',
		scope:
			'Branding (2021), then the full ecommerce and appointment-booking website and admin dashboards, designed and built in Code.',
		image: '/images/work/ishasplace.png',
		imageMobile: '/images/work/ishasplace-mobile.png',
	},
	{
		category: 'Padel club business in Belgium',
		slug: 'padel-peer',
		title: 'Padel Peer',
		outcome: 'A redesigned website and product interface, with implementation by the client’s team.',
		scope: 'Website redesign and product design. The client’s team built it.',
		image: '/images/work/padel-peer.png',
		imageMobile: '/images/work/padel-peer-mobile.png',
	},
	{
		category: 'Digital payments',
		slug: 'reedo',
		title: 'Reedo',
		outcome: 'A redesigned website and product interface, with implementation by the client’s team.',
		scope: 'Website redesign and product design. The client’s team built it.',
		image: '/images/work/reedo.png',
		imageMobile: '/images/work/reedo-mobile.png',
	},
];

export const services = {
	eyebrow: 'Ways to work together',
	title: 'What I can do for you',
	featured: {
		eyebrow: 'From first idea to live website',
		title: 'Design + Build',
		description:
			'A complete startup website, designed in Figma and built and launched by me in Framer, or in Next.js when you need custom features.',
		price: 'From $2000 · 2 weeks',
	},
	items: [
		{
			title: 'Design only',
			description:
				'A fully designed website or product interface in Figma, ready for your own developers to build.',
			note: 'Scoped per project',
			href: '#contact',
		},
		{
			title: 'UI/UX product design',
			description:
				'Clear, usable screens and flows for your app or product, designed around how your users actually behave.',
			note: 'Scoped per project',
			href: '#contact',
		},
		{
			title: 'Brand and logo',
			description: 'A logo and visual identity that makes your site and product look like one company.',
			note: 'Scoped per project',
			href: '#contact',
		},
	] satisfies Service[],
} as const;

export const process = {
	eyebrow: 'A clear path to launch',
	title: 'How we work together',
	steps: [
		{ number: '01', title: 'Discovery', description: 'We talk through your product, your customers and your goals.' },
		{ number: '02', title: 'Design', description: 'I design the key pages, you give feedback, and we refine.' },
		{ number: '03', title: 'Build', description: 'I turn the approved design into a live, fast website.' },
		{
			number: '04',
			title: 'Launch and handoff',
			description: 'We go live, and I make sure you can update the site yourself.',
		},
	] satisfies ProcessStep[],
	aiNote: {
		label: 'AI + I',
		text: 'AI helps me with first drafts, variations and code groundwork so I can spend my time on structure, messaging and polish.',
	},
} as const;

export const testimonials = {
	eyebrow: 'Client perspectives',
	title: 'What clients say',
	items: [
		{
			source: 'Upwork enterprise client · Paid research interview · Jan 2026',
			quote:
				'Faruq is extremely knowledgeable and very professional, super easy to communicate and collaborate with him. Would definitely work with him again.',
		},
		{
			source: 'Upwork client · Landing page project · 2025',
			quote:
				'Faruq is an exceptional designer who goes above and beyond to support the team. … He’s equally skilled at building landing pages himself, making him a truly flexible one-stop solution. His combination of design excellence and development capability is rare and valuable.',
		},
		{
			source: 'Founder · Admin panel and workspace design · Upwork, Jan 2025',
			quote:
				'Maintaining creativity and accuracy at the speed at which he works is commendable. Especially impactful for cases where confused founders like me don’t always know what they want. Faruq will guide you not just to the design, but occasionally to assets that your Brand can own for a long time.',
		},
	] satisfies Testimonial[],
} as const;

export const about = {
	eyebrow: 'The person behind the pixels',
	greeting: 'Hi, I’m ',
	name: 'Faruq So',
	photo: '/images/faruq.jpg',
	body: 'I’m a UI/UX product designer who designs and launches websites for startups. Over 5+ years I’ve worked with 40+ businesses, and I’ve kept a 100% Job Success Score on Upwork. I care about clear messaging, good-looking design and fast delivery.',
	note: 'I’m also open to select full-time and collaboration opportunities.',
} as const;

export const contact = {
	eyebrow: 'Let’s make it happen',
	title: 'Have a launch coming up?',
	description: 'Tell me about your project and I’ll reply within 24–48 hours.',
	budgetOptions: ['Not sure yet', 'Under $2,000', '$2,000 – $5,000', '$5,000 – $10,000', '$10,000+'],
	timelineOptions: ['Let’s discuss', 'ASAP', 'Within a month', '1–3 months', 'Flexible'],
	formSending: 'Sending…',
	formSuccess: 'Thanks — your message is on its way. I’ll reply within 24–48 hours.',
	formError: 'That didn’t send. Please email me directly at faruq.soremekun@gmail.com.',
	footerNote: 'Also open to select full-time and collaboration opportunities.',
} as const;

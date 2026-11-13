/**
 * Case-study content shown in the bottom sheet.
 * Layout follows Figma "MightyOcto — Case study" (node 4042:186014).
 * Only MightyOcto has a written case study in Figma. The others use their homepage copy;
 * any field left `pending` renders the "Content pending" box from the template.
 */

export type Block = {
	text: string;
	/** Shown in a "Content pending" box under the text until real content is supplied. */
	pending?: string;
};

export type GalleryImage = {
	src: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
	wide?: boolean;
};

export type CaseStudy = {
	slug: string;
	title: string;
	label: string;
	summary: string;
	role: string;
	tools?: { primary: string; note?: string };
	problem: Block;
	decision: Block;
	deliverables: { title: string; description: string }[];
	/** Real project visuals shown under the deliverables. `wide` spans the full row. */
	gallery?: GalleryImage[];
	result: Block & { note?: string };
	/** Optional meta shown in the intro (client, timeline …). */
	facts?: { label: string; value: string }[];
	/** One-line descriptor used in the "Next project" band of the previous case study. */
	nextLine: string;
};

const decisionPlaceholder: Block = {
	text: 'The client-specific reasoning behind the work belongs here, alongside the final design.',
	pending: '[Add the key design decision]',
};

const resultNote = 'Performance results and client-specific evidence are still to be supplied.';

export const caseStudies: CaseStudy[] = [
	{
		slug: 'mightyocto',
		title: 'MightyOcto',
		label: 'AI-powered document management for teams',
		summary: 'One designer, three layers: brand, product and website for an AI documentation startup.',
		role: 'Branding, the full SaaS dashboard UI in Figma, and the website, designed in Figma and built in Framer.',
		tools: {
			primary: 'Figma · Framer · Canva',
			note: 'Website designed and built by Faruq. Web app UI designed in Figma and built by MightyOcto’s developers.',
		},
		facts: [
			{ label: 'Client', value: 'MightyOcto, bootstrapped SaaS' },
			{ label: 'Timeline', value: 'Feb – Aug 2025' },
			{ label: 'Engagement', value: 'Upwork, ongoing' },
		],
		problem: {
			text: 'MightyOcto uses AI agents to write and maintain software documentation. The founder came to me while the team was still validating the market: there were early designs, but no brand he believed in. Logo, fonts and colours were all open. He needed one designer to give the product a face, an interface and a launch page, while working alongside the developers already in Slack.',
		},
		decision: {
			text: 'I started with the brand, because every screen after it depended on it. The guideline maps the user journey (Discover, Activate, Elevate) onto the system: Outfit for marketing headlines, Inter for the product, Roboto Slab for story moments, all rooted in one seed colour, Mighty Aqua. In the app, AI is a co-pilot, not a takeover. The dashboard offers “Start from scratch” right next to “Start with Octo AI”, and the assistant lives in a side panel instead of in the editor.',
		},
		deliverables: [
			{
				title: 'Brand guideline',
				description: 'Logo system, colour, type, voice, photography and an Octo mascot. 80+ slides from strategy to mockups.',
			},
			{
				title: 'Web app UI',
				description: 'Dashboard, projects and sub-projects, a rich-text document editor, approval workflows, team invites and sharing.',
			},
			{
				title: 'Website design + build',
				description: 'Home, about, blog, contact and a “first 100 pioneers” waitlist, designed in Figma and built in Framer.',
			},
			{
				title: 'Social templates',
				description: 'Canva templates for LinkedIn, Facebook, Instagram and Google Business, in light and dark.',
			},
		],
		gallery: [
			{
				src: '/images/case/mightyocto/app-dashboard.webp',
				alt: 'MightyOcto dashboard with “Start from scratch” and “Start with Octo AI” actions, project stats and the Octo AI chat panel',
				caption: 'Web app · Dashboard with the Octo AI side panel',
				width: 1441,
				height: 1024,
			},
			{
				src: '/images/case/mightyocto/app-editor.webp',
				alt: 'MightyOcto document editor with a formatting toolbar and work suggestions',
				caption: 'Web app · Document editor with work suggestions',
				width: 1440,
				height: 1024,
			},
			{
				src: '/images/case/mightyocto/brand-logo.webp',
				alt: 'MightyOcto logo on light, neutral and dark backgrounds',
				caption: 'Brand · Logo system',
				width: 1600,
				height: 900,
			},
			{
				src: '/images/case/mightyocto/brand-mockups.webp',
				alt: 'MightyOcto logo on a laptop, t-shirt and swing tag',
				caption: 'Brand · Applications',
				width: 1600,
				height: 900,
			},
			{
				src: '/images/case/mightyocto/brand-mascots.webp',
				alt: 'Five Octo mascot options: Sentinel, Spark, Guide, Phantom and Analyst',
				caption: 'Brand · Octo mascot explorations',
				width: 1920,
				height: 1080,
				wide: true,
			},
		],
		result: {
			text: 'MightyOcto’s developers shipped the MVP on these designs, and the founder came back for more: social templates in August 2025, then the design work for version 1.5. I don’t have usage numbers yet, so I won’t invent any.',
			note: 'Development was handled by MightyOcto’s own team. Version 1.5 is in planning.',
		},
		nextLine: 'AI-powered document management · Brand, product and website',
	},
	{
		slug: 'ishasplace',
		title: 'Ishasplace',
		label: 'Spa & beauty',
		summary: 'A brand, an online shop, appointment booking and the dashboards behind them.',
		role: 'Branding (2021), then the full ecommerce and appointment-booking website and admin dashboards, designed and built in Code.',
		problem: {
			text: 'Ishasplace is a spa and beauty business. The project covered the brand, the ecommerce and appointment-booking website, and the admin dashboards.',
			pending: '[Add the original challenge]',
		},
		decision: decisionPlaceholder,
		deliverables: [
			{ title: 'Branding', description: 'Brand design for Ishasplace (2021).' },
			{ title: 'Ecommerce + booking website', description: 'An online shop with appointment booking, designed and built.' },
			{ title: 'Admin dashboards', description: 'The dashboards behind the shop and bookings.' },
		],
		result: {
			text: 'The delivered scope spans branding, an ecommerce and appointment-booking website, and its admin dashboards. No quantified performance outcome has been supplied.',
			pending: '[Add a verified outcome]',
			note: resultNote,
		},
		nextLine: 'Spa & beauty · Brand, ecommerce and appointment booking',
	},
	{
		slug: 'padel-peer',
		title: 'Padel Peer',
		label: 'Padel club business in Belgium',
		summary: 'A redesigned website and product interface, with implementation by the client’s team.',
		role: 'Website redesign and product design. The client’s team built it.',
		problem: {
			text: 'Padel Peer is a padel club business in Belgium. The project covered a website redesign and product design.',
			pending: '[Add the original challenge]',
		},
		decision: decisionPlaceholder,
		deliverables: [
			{ title: 'Website redesign', description: 'A redesigned website, implemented by the client’s team.' },
			{ title: 'Product design', description: 'The product interface, implemented by the client’s team.' },
		],
		result: {
			text: 'The delivered scope spans a website redesign and product design, built by the client’s team. No quantified performance outcome has been supplied.',
			pending: '[Add a verified outcome]',
			note: resultNote,
		},
		nextLine: 'Padel club business in Belgium · Website and product design',
	},
	{
		slug: 'reedo',
		title: 'Reedo',
		label: 'Digital payments',
		summary: 'A redesigned website and product interface, with implementation by the client’s team.',
		role: 'Website redesign and product design. The client’s team built it.',
		problem: {
			text: 'Reedo is a digital payments product. The project covered a website redesign and product design.',
			pending: '[Add the original challenge]',
		},
		decision: decisionPlaceholder,
		deliverables: [
			{ title: 'Website redesign', description: 'A redesigned website, implemented by the client’s team.' },
			{ title: 'Product design', description: 'The product interface, implemented by the client’s team.' },
		],
		result: {
			text: 'The delivered scope spans a website redesign and product design, built by the client’s team. No quantified performance outcome has been supplied.',
			pending: '[Add a verified outcome]',
			note: resultNote,
		},
		nextLine: 'Digital payments · Website and product design',
	},
];

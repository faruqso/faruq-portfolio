/** Copy for the Quillo landing artboards, taken from Figma frames 11:187 (desktop) and 32:1062 (mobile). */

export type Tone = 'live' | 'next' | 'planned';
export const statusLabel: Record<Tone, string> = { live: 'Live in beta', next: 'Next up', planned: 'Planned' };

export const cms: { id: string; l: string; name: string; kind: string; has: string; tone: Tone; color: string; cat: string }[] = [
	{ id: 'sanity', l: 'S', name: 'Sanity', kind: 'Headless · Portable Text', has: 'Posts · Pages · Media', tone: 'live', color: '#f03e2f', cat: 'headless' },
	{ id: 'contentful', l: 'C', name: 'Contentful', kind: 'Headless · Rich text', has: 'Entries · Assets · Locales', tone: 'next', color: '#2478cc', cat: 'headless' },
	{ id: 'strapi', l: 'S', name: 'Strapi', kind: 'Headless · Open source', has: 'Collections · Media · Drafts', tone: 'next', color: '#4945ff', cat: 'headless' },
	{ id: 'storyblok', l: 'S', name: 'Storyblok', kind: 'Headless · Visual editor', has: 'Stories · Blocks · Assets', tone: 'planned', color: '#09b3af', cat: 'headless' },
	{ id: 'payload', l: 'P', name: 'Payload', kind: 'Headless · Open source', has: 'Collections · Globals', tone: 'planned', color: '#111111', cat: 'headless' },
	{ id: 'prismic', l: 'P', name: 'Prismic', kind: 'Headless · Slices', has: 'Documents · Slices', tone: 'planned', color: '#5163ba', cat: 'headless' },
	{ id: 'hygraph', l: 'H', name: 'Hygraph', kind: 'Headless · GraphQL', has: 'Models · Assets', tone: 'planned', color: '#0b1020', cat: 'headless' },
	{ id: 'wordpress', l: 'W', name: 'WordPress', kind: 'Traditional · Headless', has: 'Posts · Pages · Media', tone: 'planned', color: '#21759b', cat: 'builder' },
];

export const cmsDetail: Record<Tone, string> = {
	live: 'is live in beta. Add the Studio plugin once, then scan a QR code.',
	next: 'is next up. Join the waitlist to get it first.',
	planned: 'is planned. Vote for it to move it up.',
};

export const faqs: [string, string][] = [
	['Does Quillo change anything in my CMS?', 'No. Quillo uses Sanity’s official APIs with an editor token you control and can revoke anytime. Your schema, content and hosting stay where they are.'],
	['Which CMSs are supported?', 'Sanity is live in beta. Contentful and Strapi are next, then Storyblok, Payload, Prismic, Hygraph and WordPress.'],
	['What about custom fields and plugins?', 'Standard fields get native phone editors. Custom Studio plugin fields show as a clean read-only preview.'],
	['Can I limit what clients can edit?', 'Yes. Your CMS roles and permissions still apply, and the Agency plan adds client-safe roles so clients edit only what they should.'],
];
export const faqsMobile = ['Does Quillo change anything in my CMS?', 'Which CMSs are supported?', 'What about custom fields?', 'Can I limit what clients edit?'];

export const plans = [
	{
		id: 'solo',
		name: 'Solo',
		price: '$0',
		unit: 'forever',
		desc: 'For one site and one editor getting started.',
		cta: 'Join the waitlist',
		items: ['1 site · 1 editor', 'Edit text, images & rich text', 'Camera uploads', 'Sanity today, more CMSs as they launch'],
	},
	{
		id: 'pro',
		name: 'Pro',
		price: '$12',
		unit: 'per site / month',
		desc: 'For small teams who publish every week.',
		cta: 'Join the waitlist',
		items: ['Unlimited editors', 'Approvals & push notifications', 'AI polish & alt text', 'Offline drafts', 'Scheduled publishing'],
	},
	{
		id: 'agency',
		name: 'Agency',
		price: '$8',
		unit: 'per client site / month',
		desc: 'For studios managing 5 or more client sites.',
		cta: 'Book an agency demo',
		items: ['Everything in Pro', 'White-label app & icon', 'Client dashboard for all sites', 'Client-safe roles', 'Priority support'],
	},
];

/** x = no, p = partial, y = yes. */
export const compare: { row: string; short: string; v: [string, string, string] }[] = [
	{ row: 'Edit content from your phone', short: 'Edit from your phone', v: ['x', 'p', 'y'] },
	{ row: 'Native camera & photo uploads', short: 'Camera uploads', v: ['x', 'x', 'y'] },
	{ row: 'Push notifications for reviews', short: 'Review notifications', v: ['x', 'x', 'y'] },
	{ row: 'Drafts that work offline', short: 'Offline drafts', v: ['x', 'x', 'y'] },
	{ row: 'Every CMS in one app', short: 'Every CMS, one app', v: ['x', 'x', 'y'] },
	{ row: 'Deep config & custom plugins', short: 'Custom plugins', v: ['y', 'p', 'p'] },
];

export const uses = [
	{ img: 'baker-full.webp', pill: 'Menu updated', tone: 'ok', t: 'Bakeries & restaurants', d: 'Update the menu between batches, not after closing.' },
	{ img: 'photographer.webp', pill: '3 photos uploaded', tone: 'ok', t: 'Real estate & field teams', d: 'Snap the listing and publish it before you leave the driveway.' },
	{ img: 'agency.webp', pill: 'Client approved', tone: 'blue', t: 'Agencies & freelancers', d: 'Give clients an app they’ll actually use, and stop getting “quick change” emails.' },
];

export const steps = [
	['Connect your CMS', 'Your developer adds the Quillo plugin to Sanity Studio once. Then you scan a QR code and you’re in.', 'Your developer adds the Quillo plugin to Sanity Studio once. Then you scan a QR code and you’re in.'],
	['Quillo maps your content', 'Your schema becomes native screens: lists, forms, image pickers and rich text, all automatically.', 'Your schema becomes native phone screens.'],
	['Edit & publish anywhere', 'Fix it, snap it, approve it. Changes go straight to your CMS and your live site.', 'Changes go straight to your live site.'],
];

export const clients = [
	{ l: '🥐', c: '#f5a524', n: 'Crumb & Co.' },
	{ l: 'N', c: '#2f5bff', n: 'Northwind' },
	{ l: 'L', c: '#0b1020', n: 'Lumen' },
	{ l: 'V', c: '#1fb86a', n: 'Verde' },
];

export const chapters = [
	['0:00', 'Connect'],
	['0:12', 'Map your content'],
	['0:24', 'Edit & snap'],
	['0:42', 'Approve & publish'],
];

/** The schema snippet on the "Reads your content model" tile, as highlighted HTML. */
export const schemaCode = [
	'<span class="c-mute">// schemas/menuItem.ts</span>',
	'defineType({',
	"  <span class=\"c-lime\">name: 'menuItem',</span>",
	'  fields: [',
	"    <span class=\"c-sky\">{ name: 'title', type: 'string' },</span>",
	"    <span class=\"c-sky\">{ name: 'cover', type: 'image' },</span>",
	"    <span class=\"c-sky\">{ name: 'price', type: 'number' },</span>",
	"    <span class=\"c-sky\">{ name: 'featured', type: 'boolean' },</span>",
	'  ],',
	'})',
].join(String.fromCharCode(10));

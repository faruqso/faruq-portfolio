/**
 * Copy for the Quillo case study page (/work/quillo).
 * Source of truth: Figma "My Portfolio" → "Quillo — Case study" (node 4135:176980).
 * Rules: no invented stats, users or testimonials. CMS status wording stays consistent.
 */

export const quillo = {
	title: 'Quillo',
	eyebrow: 'Self-initiated / Startup concept · Mobile app for headless CMS',
	summary: 'Edit your website from your phone. My own startup, designed from zero.',
	role: 'Founder and designer. Product strategy, brand, 24 iOS app screens, the landing page for desktop and mobile, and the Sanity Studio connect flow.',
	tools: 'Figma',
	toolsNote: 'Concept stage, not built yet. The MVP is scoped for React Native/Expo with a small backend.',

	problem: {
		label: '01 / The problem',
		title: 'The context',
		text: 'Headless CMSs like Sanity and Contentful made websites faster to build, but editing one still means opening a laptop. The café owner changing today’s menu, the agent with fresh listing photos, the marketer approving a post between meetings: all of them wait until they are back at a desk.',
	},
	decision: {
		label: '02 / The decision',
		title: 'A companion, not a copy',
		text: 'Squeezing a whole CMS studio onto a phone would make every task worse. Quillo does the small, urgent jobs well: quick text edits, camera uploads, approvals, scheduling and offline drafts. Schema changes and big restructures stay in the studio, where they belong.',
	},

	connect: {
		label: '03 / The constraint',
		title: 'Designing around a missing login',
		text: 'Sanity has no public “Sign in with Sanity” for third-party apps, so a normal OAuth onboarding was off the table. I designed a Studio plugin instead: the developer installs it once, it shows a QR code, and the editor scans it with Quillo. Pasting an API token is the fallback. The developer runs npx sanity schema deploy so the app can read the content model, and custom Studio fields appear as read-only previews.',
	},

	flow: {
		label: '04 / The core flow',
		title: 'From pocket to published',
		text: 'The everyday loop had to work one-handed, in under a minute. Open the site, change a field, add a photo straight from the camera, then publish now or schedule it. Every step keeps the live site one tap away.',
		screens: [
			{ src: 'home', num: '01', title: 'Home', sub: 'Your site at a glance.' },
			{ src: 'editor', num: '02', title: 'Editor', sub: 'Edit a field in place.' },
			{ src: 'camera', num: '03', title: 'Camera', sub: 'Shoot and upload.' },
			{ src: 'publish', num: '04', title: 'Publish', sub: 'Now, or on a schedule.' },
			{ src: 'published', num: '05', title: 'Published', sub: 'It’s live.' },
		],
		tryTitle: 'Try the flow',
		tryText: 'A working prototype of the same five screens. Tap through it.',
	},

	states: {
		label: '05 / Real conditions',
		title: 'Built for the moments in between',
		text: 'Phones lose signal, teams need sign-off, and urgent changes happen at odd hours. These states got the same care as the happy path.',
		screens: [
			{ src: 'review', num: '02', title: 'Review changes', sub: 'Approve or send back a teammate’s edit.' },
			{ src: 'notifications', num: '03', title: 'Notifications', sub: 'Choose what is worth a ping.' },
			{ src: 'lock', num: '04', title: 'Lock screen', sub: 'Approvals arrive where you already look.' },
		],
	},

	business: {
		label: '06 / The business',
		title: 'White-label for agencies',
		text: 'The strongest business case isn’t one editor at a time, it’s agencies. The same app, re-skinned per client, so an agency can hand every client their own branded way to edit their site. The example here is Northwind Realty.',
		pricing: [
			{ plan: 'Solo', price: '$0' },
			{ plan: 'Pro', price: '$12 per site' },
			{ plan: 'Agency', price: '$8 per client site', highlight: true },
		],
	},

	brand: {
		label: '07 / Brand system',
		title: 'Sky, glass and a lime spark',
		text: 'Quillo should feel light, like something you reach for, not a tool you dread. Soft sky gradients, glass cards and 3D clay stickers set the mood. Plus Jakarta Sans does the work, and one Instrument Serif italic word per headline adds warmth.',
	},

	landing: {
		label: '08 / Landing page',
		title: 'One page to sell it',
		text: 'The page leads with the job, not the tech. A CMS picker answers “will it work with my site?” first, then a 60-second demo, features, setup, use cases, pricing and FAQ. The main call to action is Join the waitlist; Book a demo is only for agencies.',
	},

	result: {
		label: '09 / Where it stands',
		title: 'Designed, not shipped. Yet.',
		text: 'The design is complete: 24 app screens, the app icon, a landing page for desktop and mobile, and the Studio plugin flow. Next comes a 60-second demo video, then the MVP: React Native/Expo plus a small backend for webhooks and push notifications, roughly two to three months for one developer.',
		roadmap: [
			{ cms: 'Sanity', status: 'First integration', first: true },
			{ cms: 'Contentful · Strapi', status: 'Next up' },
			{ cms: 'Storyblok · Payload · Prismic · Hygraph · WordPress', status: 'Planned' },
		],
		note: 'Self-initiated concept. There are no users, stats or testimonials yet, so none are shown here.',
	},

	next: { slug: 'ishasplace', name: 'Ishasplace', line: 'Spa & beauty · Brand, ecommerce and appointment booking' },
} as const;

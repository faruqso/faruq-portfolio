/**
 * Copy for the LinkedIn lead pages: /checklist, /audit and /sprint.
 * Edit wording here; the pages only lay it out.
 */

/**
 * Zeeg "Book a call" link for the Sprint discovery call (e.g. https://zeeg.me/faruq/sprint-call).
 * While empty, the Sprint page's call button goes to the contact form instead.
 */
export const bookingUrl = '';

export const checklist = {
	eyebrow: 'Free checklist',
	title: 'Before you launch your AI startup homepage',
	lead: 'The checks I run on every startup homepage before it goes live. Work through it in about 15 minutes. No email needed, and your ticks are saved in this browser.',
	sections: [
		{
			title: 'The first 5 seconds',
			items: [
				{
					check: 'Your headline says what the product does, not that it uses AI.',
					why: 'Test: could a stranger repeat it back in one sentence after a 5-second look?',
				},
				{
					check: 'It names who it’s for.',
					why: '“For finance teams at 50–500 person companies” beats “for everyone”. Visitors need to see themselves.',
				},
				{
					check: 'The subheadline describes the outcome in plain words.',
					why: 'Cut “leverage”, “unlock”, “supercharge” and “seamless”. Say what changes for the customer.',
				},
				{
					check: 'There is one main button, and its label says what happens next.',
					why: '“Book a demo” or “Start free trial” beats “Get started” when the button actually opens a calendar.',
				},
				{
					check: 'The hero shows the real product.',
					why: 'A screenshot or a short loop of the actual UI, not gradient blobs, robots or a glowing brain.',
				},
			],
		},
		{
			title: 'Explaining the AI',
			items: [
				{
					check: 'You show one concrete example: what goes in, and what comes out.',
					why: 'People trust an example more than a description of what the model can do.',
				},
				{
					check: 'You say what the AI does and what the person stays in control of.',
					why: 'Buyers worry about losing control. Show where they review, edit or approve.',
				},
				{
					check: 'You answer the data question before they ask it.',
					why: 'Where does their data go, and is it used for training? A short line plus a link to a security page is enough.',
				},
				{
					check: 'The model name is not the headline.',
					why: 'Founders care which model you use. Most buyers care what it does for them.',
				},
			],
		},
		{
			title: 'Proof',
			items: [
				{
					check: 'There is at least one proof point near the top.',
					why: 'A customer, a result, a quote or a backer. Real ones only; a made-up number costs more trust than it earns.',
				},
				{
					check: 'Testimonials have a name, role and company, or say they are anonymised.',
					why: 'An unattributed quote reads like you wrote it yourself.',
				},
				{
					check: 'If you are pre-launch, your proof is honest about it.',
					why: 'Waitlist size, design partners, or the team’s background all work. Fake logos don’t.',
				},
			],
		},
		{
			title: 'Getting to the next step',
			items: [
				{
					check: 'Pricing is one click away, or you explain why it isn’t.',
					why: '“Pricing depends on seats and usage, here’s a typical range” keeps people from leaving to guess.',
				},
				{
					check: 'The main button repeats after each major section, with the same wording.',
					why: 'Someone convinced halfway down shouldn’t have to scroll back up to act.',
				},
				{
					check: 'Your signup or demo form only asks what you will actually use.',
					why: 'Every extra field costs signups. Ask for the rest later.',
				},
				{
					check: 'There is a path for people who aren’t ready yet.',
					why: 'A demo video, docs, a changelog or a newsletter, so a “not now” doesn’t become a “never”.',
				},
			],
		},
		{
			title: 'The basics that quietly cost you trust',
			items: [
				{
					check: 'It works on a phone.',
					why: 'Check the hero, the menu and the form at 375px wide. A lot of LinkedIn traffic is on mobile.',
				},
				{
					check: 'It loads fast.',
					why: 'Run it through PageSpeed Insights and fix anything red on mobile, usually oversized images and videos.',
				},
				{
					check: 'The page title and link preview image are set.',
					why: 'Paste your URL into a LinkedIn post draft. If the preview is blank or wrong, fix it before you share it.',
				},
				{
					check: 'No template leftovers.',
					why: 'Lorem ipsum, “© 2023”, dead links, placeholder logos and default favicons all say “unfinished”.',
				},
				{
					check: 'Analytics is installed, and you know which click counts as a conversion.',
					why: 'Otherwise you can’t tell whether the next change helped.',
				},
			],
		},
	],
	cta: {
		title: 'Want a second pair of eyes?',
		description:
			'Send me your homepage and I’ll record a free 5-minute video audit: what a first-time visitor understands, where they’d leave, and the one change I’d make first.',
		label: 'Get a free audit',
		href: '/audit',
	},
} as const;

export const audit = {
	eyebrow: 'Free homepage audit · For AI and SaaS founders',
	title: 'A 5-minute video audit of your startup homepage',
	lead: 'For founders of early-stage AI and SaaS startups who don’t have a designer yet. Send me your homepage, and within 48 hours I’ll record a short Loom walking through it like a first-time visitor, then tell you the one change I’d make first.',
	about: {
		photoAlt: 'Faruq So',
		name: 'Hi, I’m Faruq.',
		text: 'I help AI startups turn confusing products into clear, high-converting experiences. If you found me on LinkedIn, it’s probably through my concept redesigns of startup homepages. This audit is the same eye, pointed at yours, privately.',
		proof: ['UI/UX designer and Framer builder', '40+ businesses', '100% Job Success on Upwork'],
	},
	steps: [
		{ title: 'The 5-second test', description: 'What a stranger understands about your product before they scroll.' },
		{ title: 'Where they’d leave', description: 'The moment a visitor gets confused or loses interest, and why.' },
		{ title: 'The one change first', description: 'The single fix I’d make before anything else, so you know where to start.' },
		{ title: 'Your questions', description: 'Reply to the video if anything is unclear. I’ll answer.' },
	],
	terms: 'I do 3 audits a week, first come first served. If this week is full, I’ll tell you when yours is coming. No call, and no sales pitch.',
	form: {
		title: 'Request your audit',
		buyerLabel: 'Who is your buyer? (one sentence)',
		buyerPlaceholder: 'e.g. Ops managers at 50–200 person logistics companies',
		submit: 'Request my audit',
		sending: 'Sending…',
		success: 'Got it. I’ll email you within 48 hours, either with your video or with when it’s coming.',
		error: 'That didn’t send. Please email me your homepage link at faruq.soremekun@gmail.com.',
	},
	checklistCard: {
		eyebrow: 'Not ready to send it yet?',
		title: 'Check your homepage yourself first',
		description: 'The 21 checks I run before any startup homepage goes live, from the first 5 seconds to pricing and proof. About 15 minutes, free, no email needed.',
		label: 'Open the checklist',
	},
	sheet: {
		title: 'The launch checklist',
		lead: 'Your ticks are saved in this browser.',
		close: 'Close checklist',
		ctaTitle: 'Want me to look at it?',
		ctaLabel: 'Request my audit',
	},
} as const;

export const sprint = {
	eyebrow: 'Launch Website Sprint',
	title: 'Your startup website, designed and live in about 2 weeks',
	lead: 'For early-stage AI and SaaS founders without an in-house designer. I shape the message with you, design it in Figma, build it in Framer, and hand it over so your team can edit it.',
	price: 'From $2,000 · about 2 weeks',
	callLabel: 'Book a discovery call',
	auditLabel: 'Start with a free audit',
	included: {
		title: 'What you get',
		items: [
			{
				title: 'Message and structure',
				description: 'We agree the headline, the sections and the one action the page asks for, before any visuals.',
			},
			{
				title: 'Design in Figma',
				description: 'The homepage and the key launch pages, desktop and mobile, with feedback rounds built into the timeline.',
			},
			{
				title: 'Built in Framer',
				description: 'Responsive, fast, with page titles, link previews and analytics set up.',
			},
			{
				title: 'Handoff',
				description: 'A short video showing your team how to edit text, swap images and add pages without me.',
			},
		],
	},
	timeline: {
		title: 'How the two weeks go',
		steps: [
			{ number: 'Days 1–2', title: 'Discovery and message', description: 'A call about your product and buyer, then a written page outline for you to approve.' },
			{ number: 'Days 3–7', title: 'Design', description: 'I design the pages in Figma. You review, we refine.' },
			{ number: 'Days 8–12', title: 'Build', description: 'I build the approved design in Framer and test it on real devices.' },
			{ number: 'Days 13–14', title: 'Launch and handoff', description: 'We go live on your domain and I walk you through editing it.' },
		],
	},
	fit: {
		good: {
			title: 'A good fit if',
			items: [
				'You have a product, or a clear version of one coming soon.',
				'Your current site doesn’t explain it, or you don’t have one yet.',
				'You want one person handling design and build, start to finish.',
			],
		},
		bad: {
			title: 'Not the right fit if',
			items: [
				'You need your product interface redesigned. That’s scoped separately.',
				'You need custom features or a heavy content setup. I scope those in Next.js.',
				'You need it live in a few days. Rushing the message is what makes sites unclear.',
			],
		},
	},
	example: {
		label: 'Recent example',
		text: 'MightyOcto, an AI document management startup: brand, dashboard UI, and a Framer website I designed and built.',
		href: '/#work',
		linkLabel: 'See the work',
	},
	faqs: [
		{
			q: 'Why Framer?',
			a: 'It’s fast, it looks exactly like the design, and your team can edit it without a developer.',
		},
		{
			q: 'What do I need to bring?',
			a: 'A clear idea of who your buyer is, your logo if you have one, and product screenshots or access to the product.',
		},
		{
			q: 'What happens on the discovery call?',
			a: 'A short conversation about your product, your buyer and your launch date. If the Sprint isn’t the right fit, I’ll tell you.',
		},
	],
	closing: {
		title: 'Have a launch coming up?',
		description: 'Book a short call and we’ll see if the Sprint fits. Not ready yet? Start with the free audit.',
	},
} as const;

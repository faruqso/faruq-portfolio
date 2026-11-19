// Resume content for both PDF versions. Source: the "Faruq – Resume" claude.ai doc
// (tabs Version A and Version B), minus the private "use this version…" notes.
// Edit here, then run: node scripts/resume/build-resume-pdfs.mjs

const name = 'Faruq Soremekun';
const email = { label: 'faruq.soremekun@gmail.com', href: 'mailto:faruq.soremekun@gmail.com' };
const site = { label: 'faruqso.com', href: 'https://faruqso.com' };
const linkedin = { label: 'linkedin.com/in/faruq-so', href: 'https://www.linkedin.com/in/faruq-so' };
const github = { label: 'github.com/faruqso', href: 'https://github.com/faruqso' };
const place = { label: 'Nigeria, remote (UTC+1)' };

const research = 'Selected for a paid research interview on AI design and vibe-coding workflows by an S&P 500 web company (Jan 2026). Rated 5.0.';
const education = {
	heading: 'Education',
	entries: [
		{ title: '**BEng Computer Engineering** · Federal University Oye-Ekiti', dates: '2017 – 2022' },
		{ title: 'Languages: English, Yoruba and Hausa (native), Arabic (basic)' },
	],
};

export const versions = [
	{
		file: 'faruq-so-resume-product-designer',
		label: 'Product Designer',
		compact: true, // keep to one A4 page
		name,
		role: 'Product Designer for AI and SaaS products · designs in Figma, ships in Framer and code',
		contact: [email, site, linkedin, place],
		sections: [
			{
				heading: 'Summary',
				text: 'Product designer with 5+ years of experience and 40+ businesses served across AI, SaaS, insurance and fintech. I take products from brand and user flows to finished interfaces, and I build the marketing site myself in Framer or Next.js. $60K+ earned across 42 Upwork contracts, with a 100% Job Success Score and clients who keep hiring me again.',
			},
			{
				heading: 'Experience',
				entries: [
					{
						title: '**Independent Product Designer** · Upwork',
						dates: 'Sept 2023 – Present',
						text: '42 contracts, 31 client reviews, 100% Job Success Score. Selected clients:',
					},
					{
						title: '**MightyOcto** (AI documentation SaaS, Amsterdam)',
						dates: 'Feb 2025 – Present',
						bullets: [
							'Rebuilt the brand from scratch: an 80+ page guideline covering logo, type, colour and mascot options.',
							"Designed the SaaS web app UI for the client's dev team, then designed and built the marketing site in Framer.",
							'Asked back to plan the v1.5 redesign of the web app and landing page.',
						],
					},
					{
						title: '**Global insurance provider** (via IPMG Global)',
						dates: 'Sept 2023 – Dec 2025',
						bullets: [
							"Core UX/UI designer on a ground-up rebuild of an enterprise underwriting platform. I turned complex underwriting rules into dashboards and workflows that met senior stakeholders' standards.",
							'Started on a short dashboard contract. Rehired four times, which grew into a two-year part-time role.',
						],
					},
					{
						title: '**Stealth infrastructure startup**',
						dates: 'Jan 2024 – Jul 2026',
						bullets: [
							'Seven contracts with the same founder: a full SaaS platform redesign, a marketplace MVP, an enterprise-grade SaaS interface and a Framer web experience.',
						],
					},
					{
						title: '**Security SaaS platform** (DotTut)',
						dates: 'Oct 2025',
						bullets: [
							'Designed a dark-theme dashboard and its workflows in Figma, then built the designs in semantic HTML, CSS and JavaScript.',
						],
					},
					{
						title: '**Other work:** UI/UX for a newspaper games site (Arkadium), a loyalty rewards iOS app, admin, workspace and super-admin panels, a mobile-first padel club website in Belgium, and Webflow and Framer builds.',
					},
				],
				quote: {
					text: '"His combination of design excellence and development capability is rare and valuable."',
					by: 'Founder, MightyOcto (Upwork review)',
				},
			},
			{
				heading: 'Self-initiated',
				entries: [
					{
						title: '**Quillo** (mobile app for editing any headless CMS from a phone)',
						dates: '2026',
						bullets: [
							'Designed the brand, 24 app screens, the landing page and the launch videos. Worked out the Sanity connection flow (a Studio plugin with a QR code, with a pasted token as the fallback).',
						],
					},
				],
			},
			{
				heading: 'Skills',
				list: [
					'**Product design:** user flows, wireframes, prototyping, SaaS dashboards and complex workflows, mobile UI, UX audits',
					'**Brand:** identity systems and brand guidelines',
					'**Tools:** Figma, Framer, Webflow, Figma AI, Claude, Claude Code, Codex, Cursor',
					'**Build:** HTML, CSS, JavaScript, React and Next.js',
				],
			},
			{ heading: 'Also', list: [research] },
			education,
		],
	},
	{
		file: 'faruq-so-resume-design-engineer',
		label: 'Design Engineer',
		name,
		role: 'Design Engineer · Figma to production React/Next.js, Framer and Webflow',
		contact: [email, site, linkedin, github, place],
		sections: [
			{
				heading: 'Summary',
				text: 'Designer with a Computer Engineering degree who builds what I design. I take products from Figma to working front ends in React and Next.js, semantic HTML, CSS and JavaScript, Framer and Webflow, using AI tools like Claude Code, Codex and Cursor to move fast. 5+ years, 40+ businesses, $60K+ across 42 Upwork contracts and a 100% Job Success Score.',
			},
			{
				heading: 'Experience',
				entries: [
					{
						title: '**Independent Product Designer and Design Engineer** · Upwork',
						dates: 'Sept 2023 – Present',
						text: '42 contracts, 31 client reviews, 100% Job Success Score. Selected work:',
					},
					{
						title: '**AI product front end** (startup founder)',
						dates: 'Mar – Jul 2026',
						bullets: [
							'Designed and built the front end of an AI-powered product in React, Next.js and shadcn/ui.',
							'Repeat client: earlier designed their admin, workspace and super-admin panels (Jan 2025) and advised on their website (Jan – Mar 2026).',
						],
					},
					{
						title: '**MightyOcto** (AI documentation SaaS, Amsterdam)',
						dates: 'Feb 2025 – Present',
						bullets: [
							'Created the brand and the web app UI, then designed and built the marketing site in Framer on a separate build contract (Jun – Nov 2025).',
						],
					},
					{
						title: '**Security SaaS platform** (DotTut)',
						dates: 'Oct 2025',
						bullets: [
							'Designed a dark-theme dashboard and its workflows in Figma, then turned the designs into semantic HTML, CSS and JavaScript.',
						],
					},
					{
						title: '**SWME Global**',
						dates: 'Oct 2024 – Present',
						bullets: [
							'Built responsive websites from Figma in Framer (mobile, tablet and desktop). Now on a 16-hours-a-month design retainer.',
						],
					},
					{
						title: '**Framer and Webflow builds**',
						dates: '2025 – 2026',
						bullets: [
							'Webflow design, CMS setup and a custom code embed (Empirior), responsive and image fixes on a live Framer site (PHIMES), and mobile-first UI for a padel club website in Belgium.',
						],
					},
					{
						title: '**Enterprise product design**',
						dates: 'Sept 2023 – Jul 2026',
						bullets: [
							'Core UX/UI designer on the rebuild of an enterprise underwriting platform for a global insurance provider (two years, via IPMG Global), and seven contracts for a stealth infrastructure startup, including a full SaaS platform redesign.',
						],
					},
					{
						title: '**Ishasplace** (spa and beauty business, direct client)',
						bullets: [
							'Created the brand, then designed and built the ecommerce and appointment-booking website and two admin dashboards in Next.js and Node. Live at ishasplace.ng.',
						],
					},
				],
				quote: {
					text: '"He\'s equally skilled at building landing pages himself, making him a truly flexible one-stop solution."',
					by: 'Founder, MightyOcto (Upwork review)',
				},
			},
			{
				heading: 'Projects',
				list: [
					'**Portfolio site:** designed and built in Astro, deployed on Cloudflare with auto-deploy on every push from GitHub: faruqso.com',
					'**Quillo** (self-initiated, 2026): a mobile app for editing any headless CMS. Designed 24 app screens and the landing page, and worked out the Sanity connection flow (a Studio plugin with a QR code, with a pasted token as the fallback).',
					'**AI explorations on Vercel:** Luxora Hotel (interactive 3D hotel tour), Photora (photographer portfolio) and img2threejs (demo gallery).',
				],
			},
			{
				heading: 'Skills',
				list: [
					'**Build:** React, Next.js, Node, HTML, CSS, JavaScript, shadcn/ui, Astro, Framer, Webflow, TypeScript',
					'**Ship:** Cloudflare, Vercel, Git and GitHub, Wrangler',
					'**AI:** Claude, Claude Code, Codex, Cursor and Figma AI for designing, building and shipping front ends',
					'**Design:** Figma, prototyping, SaaS dashboards and complex workflows, brand identity',
				],
			},
			{
				heading: 'Proof of build',
				list: ['Live: ishasplace.ng, mightyocto.ai, faruqso.com', 'Code: github.com/faruqso'],
			},
			{ heading: 'Also', list: [research] },
			education,
		],
	},
];

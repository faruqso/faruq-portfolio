import { seo as seoConfig, site, socialLinks } from '../data/site';

export type SeoProps = {
	title: string;
	description: string;
	pathname?: string;
	image?: string;
	type?: 'website' | 'article';
	robots?: string;
	noindex?: boolean;
	jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function absoluteUrl(path: string, base = site.url): string {
	return new URL(path, base).href;
}

export function pageTitle(title: string, pathname: string): string {
	const isHome = pathname === '/' || pathname === '';
	if (isHome && title === site.title) {
		return `${site.name} - ${site.title}`;
	}
	return `${title} - ${site.name}`;
}

export function resolveOgImage(image?: string): string {
	const path = image ?? seoConfig.defaultOgImage;
	return absoluteUrl(path);
}

export function defaultRobots(noindex?: boolean): string {
	if (noindex) return 'noindex, nofollow';
	return 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
}

const sameAs = socialLinks
	.filter((l) => l.href.startsWith('http'))
	.map((l) => l.href);

export function homeJsonLd(): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': absoluteUrl('/#website'),
				url: site.url,
				name: site.name,
				description: site.description,
				inLanguage: seoConfig.locale,
				publisher: { '@id': absoluteUrl('/#person') },
			},
			{
				'@type': 'Person',
				'@id': absoluteUrl('/#person'),
				name: site.name,
				url: site.url,
				image: absoluteUrl(seoConfig.profileImage),
				jobTitle: seoConfig.jobTitle,
				description: site.description,
				sameAs,
			},
			{
				'@type': 'ProfessionalService',
				'@id': absoluteUrl('/#service'),
				name: site.name,
				url: site.url,
				description: site.description,
				image: absoluteUrl(seoConfig.defaultOgImage),
				areaServed: 'Worldwide',
				serviceType: ['UI/UX design', 'Web design', 'Website development'],
				provider: { '@id': absoluteUrl('/#person') },
			},
		],
	};
}

export function articleJsonLd(input: {
	title: string;
	description: string;
	url: string;
	image: string;
	datePublished?: string;
}): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: input.title,
		description: input.description,
		url: input.url,
		image: [input.image],
		author: { '@type': 'Person', name: site.name, url: site.url },
		publisher: {
			'@type': 'Person',
			name: site.name,
			url: site.url,
		},
		mainEntityOfPage: input.url,
		...(input.datePublished ? { datePublished: input.datePublished } : {}),
	};
}

export function webPageJsonLd(input: {
	title: string;
	description: string;
	url: string;
}): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: input.title,
		description: input.description,
		url: input.url,
		isPartOf: { '@id': absoluteUrl('/#website') },
	};
}

export { seoConfig };
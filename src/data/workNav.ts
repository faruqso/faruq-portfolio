import { caseStudies } from './caseStudies';
import { projects } from './site';

/** Homepage work section order — used for “Next project” on case-study pages. */
export const workSlugs = projects.map((p) => p.slug);

export type WorkNeighbor = {
	slug: string;
	href: string;
	title: string;
	line: string;
};

export function getNextInWork(slug: string): WorkNeighbor {
	const index = workSlugs.indexOf(slug);
	const nextSlug = workSlugs[(index + 1) % workSlugs.length];
	const project = projects.find((p) => p.slug === nextSlug)!;
	const study = caseStudies.find((s) => s.slug === nextSlug);
	return {
		slug: nextSlug,
		href: project.href ?? `/work/${nextSlug}`,
		title: project.title,
		line: study?.nextLine ?? `${project.category} · ${project.outcome}`,
	};
}
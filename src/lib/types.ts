export type NavItem = {
	label: string;
	href: string;
};

export type SocialLink = {
	label: string;
	href: string;
};

export type ClientLogo = {
	name: string;
	src: string;
	width: number;
	height: number;
};

export type Project = {
	slug: string;
	category: string;
	title: string;
	outcome: string;
	scope: string;
	image: string;
	imageMobile: string;
	/** Standalone case-study page. When set, the card links here instead of opening the sheet. */
	href?: string;
};

export type Service = {
	title: string;
	description: string;
	note: string;
	href: string;
};

export type ProcessStep = {
	number: string;
	title: string;
	description: string;
};

export type Testimonial = {
	source: string;
	quote: string;
};

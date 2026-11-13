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

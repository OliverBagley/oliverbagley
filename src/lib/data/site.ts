import { z } from 'zod';
import { LinkSchema } from './schemas';
import rawData from '../../../content/site.json';

const NavSchema = z.object({
	links: z.array(LinkSchema),
	cta: LinkSchema
});

const FooterSchema = z.object({
	copyright: z.string(),
	shopifyPartnerLogo: z.string(),
	socialLinks: z.array(LinkSchema),
	legalLinks: z.array(LinkSchema)
});

export const siteNav = NavSchema.parse(rawData.nav);

export const serviceNavLinks = rawData.serviceNavLinks as ReadonlyArray<{
	readonly label: string;
	readonly href: string;
}>;

export const siteFooter = FooterSchema.parse(rawData.footer);

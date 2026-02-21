import { z } from 'zod';
import { ProjectSchema } from './schemas';

export type { Project } from './schemas';

export const projects = z.array(ProjectSchema).parse([
	{
		slug: 'dll-digital-catalog',
		title: 'DLL Group Digital Catalog',
		description:
			'Minimal digital catalog for healthcare vehicles, optimized for iPad exhibition displays with responsive photography.',
		image: '/media/images/images/work_thumbs/dll_digital_catalog_thumb.jpg',
		tags: ['Design', 'Development', 'Photography']
	},
	{
		slug: 'fordpass',
		title: 'FordPass Transformation',
		description:
			'Complete reimagining of car sales and aftercare through market research and customer journey optimization.',
		image: '/media/images/images/work_thumbs/ford_thumb_1.jpg',
		tags: ['Research', 'UX/UI', 'Strategy']
	},
	{
		slug: 'fox-finance',
		title: 'Fox Smart Finance',
		description:
			'End-to-end product development: brand identity, UX design, and full-stack development of finance tracking webapp.',
		image: '/media/images/images/work_thumbs/fox_thumb.jpg',
		tags: ['Brand', 'Product', 'Full-Stack']
	},
	{
		slug: 'ankura-services',
		title: 'Ankura Services',
		description:
			'Complete brand development and digital presence for marketing startup, from identity to implementation.',
		image: '/media/images/images/work_thumbs/ankura_thumb.jpg',
		tags: ['Brand', 'Marketing', 'Web']
	},
	{
		slug: 'calgary-brewing',
		title: 'Calgary Brewing Co.',
		description:
			'Packaging and advertising design for a craft brewing company, creating distinctive visual identity across bottles, cans, and marketing materials.',
		image: '/media/images/images/work_thumbs/calgary_thumb.jpg',
		tags: ['Product', 'Brand', 'Advertising']
	}
]);

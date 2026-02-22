import { z } from 'zod';
import { ProjectSchema } from './schemas';
import rawData from '../../../content/projects.json';

export type { Project } from './schemas';

export const projects = z.array(ProjectSchema).parse(rawData.projects);

import type { SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { projectType } from './projectType'
import { testimonialType } from './testimonialType'

export const schema = {
  types: [projectType, postType, categoryType, authorType, blockContentType, testimonialType],
}

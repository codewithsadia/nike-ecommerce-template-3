import { type SchemaTypeDefinition } from 'sanity'
import product from "./products"
import banner from './banner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner],
}
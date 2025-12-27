/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import { tool } from '@langchain/core/tools'
import { and, eq, ilike, or } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '@/db'
import { menu } from '@/db/schema'

export const getMenuTool = tool(
  async ({ query, category }) => {
    const conditions = [eq(menu.active, true)]

    if (query) {
      conditions.push(
        or(
          ilike(menu.name, `%${query}%`),
          ilike(menu.description, `%${query}%`)
        )!
      )
    }

    if (category) {
       conditions.push(ilike(menu.category, category))
    }

    const items = await db
      .select({
        name: menu.name,
        category: menu.category,
        description: menu.description,
        hasVariation: menu.hasVariation,
        priceBase: menu.priceBase,
        variations: menu.variations,
      })
      .from(menu)
      .where(and(...conditions))
      .orderBy(menu.category, menu.name)

    return { items }
  },
  {
    name: 'get_menu',
    description:
      'Consulta o cardápio oficial. Use para buscar pratos, adicionais, variações, preços e disponibilidade.',
    schema: z.object({
      query: z.string().nullable(),
      category: z
        .enum(['prato', 'adicional', 'petisco', 'bebida'])
        .nullable()
    }),
  },
)

import { db } from './index'
import { menu } from './schema'

async function generateMenu() {
  await db.insert(menu).values({
    name: 'Feijoada Tradicional',
    category: 'prato',
    description: 'Feijoada tradicional da casa',
    hasVariation: true,
    variations: {
      PP: { priceBase: 25, description: 'individual (pouca fome)' },
      P: { priceBase: 35, description: 'individual (come bem)' },
      M: { priceBase: 50, description: 'serve duas pessoas' },
      G: { priceBase: 60, description: 'a partir de 3 pessoas' },
    },
    active: true,
  })
  await db.insert(menu).values({
    name: 'Torresmo',
    category: 'adicional',
    hasVariation: true,
    variations: {
      PP: { priceBase: 10, description: 'individual (pouca fome)' },
      P: { priceBase: 15, description: 'individual (come bem)' },
      M: { priceBase: 20, description: 'serve duas pessoas' },
      G: { priceBase: 30, description: 'a partir de 3 pessoas' },
    },
    active: true,
  })
}

export async function seed() {
  console.log('🌱 Seeding database...')
  await db.delete(menu)
  await generateMenu()
  console.log('✅ Seed finalizado')
}

import { z } from 'zod'

export const contextSchema = z.object({
  // Controle do fluxo
  stage: z.enum([
    'idle',
    'viewing_menu',
    'viewing_item',
    'order_intent',
    'collecting_order',
    'confirming_order',
    'closed',
  ]),

  // Última busca feita no cardápio
  lastMenuQuery: z.string().nullable(),

  // Categoria atual em foco
  selectedCategory: z
    .enum(['prato', 'petisco', 'bebida', 'adicional'])
    .nullable(),

  // Item específico escolhido
  selectedItem: z.string().nullable(),

  // Informações do pedido
  quantity: z.number().nullable(),
  size: z.enum(['PP', 'P', 'M', 'G']).nullable(),

  // Dados do cliente (somente se pedido via WhatsApp)
  customer: z
    .object({
      name: z.string().nullable(),
      phone: z.string().nullable(),
      address: z.string().nullable(),
      paymentMethod: z.string().nullable(),
    })
    .nullable(),

  // Flags de controle
  menuLinkSent: z.boolean(),
  outsideBusinessHours: z.boolean(),
})

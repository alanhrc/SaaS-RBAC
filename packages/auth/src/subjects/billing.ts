import { z } from 'zod'

export const billingSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('export')]),
  z.literal('Billing'),
]) // tuple => array 2 positions

export type BillingSubject = z.infer<typeof billingSubject>

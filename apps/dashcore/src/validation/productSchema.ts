import { z } from 'zod';

export const productSchema = z.object({
  basicInfo: z.object({
    title: z
      .string()
      .min(1, 'Product title is required')
      .max(100, 'Title must be 100 characters or less'),
    description: z
      .string()
      .min(250, 'Description is required')
      .max(100000, 'Description must be 100000 characters or less'),
    productType: z.enum(['physical', 'digital', 'service', 'bundle']),
    productCode: z.string().optional(),
    brand: z.string().optional(),
    color: z.string().optional(),
    size: z.string().optional(),
    weight: z.coerce.number().optional(),
  }),

  inventory: z.object({
    sku: z.string().min(1, 'SKU is required').max(50, 'SKU too long'),
    barcode: z.string().max(50).optional(),
    batchNumber: z.string().optional(),
    warehouseLocation: z.string().optional(),
  }),

  pricing: z.object({
    basePrice: z.coerce.number().min(0.01, 'Base price is required'),
    salePrice: z.coerce.number().min(0).optional(),
    priceCurrency: z.string().optional(),
    taxInclusive: z.enum(['include', 'exclude']).optional(),
    discountType: z.enum(['fixed', 'percentage']).optional(),
    discountValue: z.coerce.number().optional(),
    discountStartDate: z.date().optional(),
    discountEndDate: z.date().optional(),
  }),

  categories: z.object({
    mainCategory: z.string().min(1, 'Main category is required'),
    subCategory: z.string().min(1, 'Subcategory is required'),
    tertiaryCategory: z.string().optional(),
    productTags: z.array(z.string()).optional(),
  }),

  variants: z
    .array(
      z.object({
        sku: z.string().min(1, 'Variant SKU is required'),
        price: z.coerce.number().min(0.01, 'Variant price is required'),
        stockQuantity: z.coerce.number(),
        color: z.string().optional(),
        size: z.string().optional(),
        salePrice: z.coerce.number().min(0).optional(),
        barcode: z.string().optional(),
        weight: z.coerce.number().optional(),
        isActive: z.boolean(),
      }),
    )
    .optional(),

  seo: z
    .object({
      metaTitle: z.string().max(60).optional(),
      metaDescription: z.string().max(160).optional(),
      canonicalUrl: z.string().url().optional(),
      keywords: z.array(z.string()).optional(),
    })
    .optional(),

  status: z.enum(['draft', 'active', 'archived']),
  isFreeShipping: z.boolean(),
  isAdult: z.boolean(),
});

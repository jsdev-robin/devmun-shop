export interface IVariant {
  sku: string;
  price: number;
  stockQuantity: number;
  color?: string;
  size?: string;
  salePrice?: number;
  barcode?: string;
  weight?: number;
  isActive: boolean;
}

export interface IProduct {
  basicInfo: {
    title: string;
    description: string;
    productType: string;
    productCode?: string;
    brand?: string;
    color?: string;
    size?: string;
    weight?: number;
  };
  inventory: {
    sku: string;
    barcode?: string;
    batchNumber?: string;
    warehouseLocation?: string;
  };
  pricing: {
    basePrice: number;
    salePrice?: number;
    priceCurrency?: string;
    taxInclusive?: string;
    discountType?: string;
    discountValue?: number;
    discountStartDate?: Date;
    discountEndDate?: Date;
  };
  categories: {
    mainCategory: string;
    subCategory: string;
    tertiaryCategory?: string;
    productTags?: string[];
  };
  variants?: IVariant[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    keywords?: string[];
    slug?: string;
  };
  status: string;
  isFreeShipping: boolean;
  isAdult: boolean;

  guides: {
    familyName: string;
    givenName: string;
    email: string;
    avatar: {
      url: string;
    };
  };
}

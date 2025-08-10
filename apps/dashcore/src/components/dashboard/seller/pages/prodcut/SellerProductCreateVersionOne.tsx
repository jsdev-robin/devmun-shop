'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import QuillEditor from '@repo/ui/components/quill-editor';
import { Button } from '@repo/ui/components/button';
import Combobox from '@repo/ui/components/combobox';
import TagInput from '@repo/ui/components/tag-input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui/components/table';
import { Camera, Delete, Trash, Loader } from 'lucide-react';
import { Checkbox } from '@repo/ui/components/checkbox';
import { Textarea } from '@repo/ui/components/textarea';
import { Radio } from '@repo/ui/components/radio';
import { productSchema } from '../../../../../validation/productSchema';
import DatePicker from '@repo/ui/components/date-picker';
import { cn } from '@repo/ui/libs/utils';
import { useMuntahaDrop } from 'react-muntaha-uploader';
import Image from 'next/image';
import Typography from '@repo/ui/components/typography';
import { useCreateProductMutation } from '../../../../../lib/features/services/dashboard/seller/sellerProductApi';
import { toast } from 'sonner';

const SellerProductCreateVersionOne = () => {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    mode: 'onChange',
    defaultValues: {
      imgs: [],
      basicInfo: {
        title: 'Sample Product',
        description: `
        <h2>About This Product</h2>
        <p>This is a <strong>sample product description</strong> created with React Quill. 
        It includes <em>formatted text</em>, bullet points, and headings to show how rich text content will appear.</p>
        <ul>
          <li>High quality material</li>
          <li>Available in multiple colors</li>
          <li>Perfect for all seasons</li>
        </ul>
        <p>Order now to enjoy <strong>free shipping</strong> and a <span style="color:red;">20% discount</span>.</p>
      `,
        productType: 'physical',
        productCode: 'PROD-001',
        brand: 'Sample Brand',
        color: 'Red',
        size: 'M',
        weight: 1.2,
      },
      inventory: {
        sku: 'SKU-001',
        barcode: '123456789012',
        batchNumber: 'BATCH-001',
        warehouseLocation: 'A1',
      },
      pricing: {
        basePrice: 100,
        salePrice: 80,
        priceCurrency: 'USD',
        taxInclusive: 'include',
        discountType: 'percentage',
        discountValue: 20,
        discountStartDate: undefined,
        discountEndDate: undefined,
      },
      categories: {
        mainCategory: 'Clothing',
        subCategory: 'Shirts',
        tertiaryCategory: 'Casual',
        productTags: ['summer', 'casual', 'cotton'],
      },
      variants: [
        {
          sku: 'VAR-001',
          price: 80,
          stockQuantity: 50,
          color: 'Red',
          size: 'M',
          salePrice: 70,
          barcode: '123456789013',
          weight: 1.1,
          isActive: true,
        },
        {
          sku: 'VAR-002',
          price: 82,
          stockQuantity: 40,
          color: 'Blue',
          size: 'L',
          salePrice: 72,
          barcode: '123456789014',
          weight: 1.15,
          isActive: true,
        },
        {
          sku: 'VAR-003',
          price: 78,
          stockQuantity: 60,
          color: 'Green',
          size: 'S',
          salePrice: 68,
          barcode: '123456789015',
          weight: 1.05,
          isActive: true,
        },
        {
          sku: 'VAR-004',
          price: 85,
          stockQuantity: 30,
          color: 'Black',
          size: 'XL',
          salePrice: 75,
          barcode: '123456789016',
          weight: 1.2,
          isActive: true,
        },
      ],
      seo: {
        metaTitle: 'Sample Product Meta Title',
        metaDescription: 'This is a meta description for the sample product.',
        canonicalUrl: 'https://example.com/sample-product',
        keywords: ['sample', 'product', 'ecommerce'],
      },
      status: 'active',
      isFreeShipping: true,
      isAdult: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'variants',
  });

  const addNewVariant = () => {
    append({
      sku: '',
      color: '',
      size: '',
      price: 0,
      salePrice: 0,
      stockQuantity: 0,
      barcode: '',
      weight: 0,
      isActive: true,
    });
  };

  const { getRootProps, getInputProps, isDragActive, onDelete, error } =
    useMuntahaDrop({
      accept: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'image/gif',
        'image/svg+xml',
        'image/avif',
        'image/heic',
      ],
      maxSize: 2 * 1024 * 1024,
      maxFiles: 10,
      multiple: true,
      onDrop: (file: File[] | null) => {
        if (file) {
          form.setValue('imgs', file);
        }
      },
    });

  const imgFile = form.watch('imgs');

  const [createProduct, { isLoading }] = useCreateProductMutation();

  async function onSubmit(data: z.infer<typeof productSchema>) {
    const formData = new FormData();

    data.imgs?.forEach((file) => {
      formData.append('imgs', file);
    });

    formData.append('data', JSON.stringify(data));

    await toast.promise(createProduct(formData).unwrap(), {
      loading: 'Creating product...',
      success: (res) => res?.message || 'Product created successfully.',
      error: (err) =>
        err?.data?.message || 'Something went wrong while creating product!',
    });
  }

  return (
    <section>
      <div className="container">
        <div className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Media Assets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="imgs"
                      render={() => (
                        <FormItem>
                          <FormControl>
                            <div className="grid gap-4 grid-cols-5">
                              {imgFile &&
                                imgFile.map((item, i) => (
                                  <div
                                    className="aspect-square relative group"
                                    key={i}
                                  >
                                    <Image
                                      src={URL.createObjectURL(item)}
                                      alt="Profile image"
                                      width={600}
                                      height={600}
                                      className="size-full object-cover rounded-md"
                                      priority
                                    />
                                    <Button
                                      variant="destructive"
                                      size="icon"
                                      className="absolute top-2 right-2"
                                      onClick={() => onDelete(i)}
                                      type="button"
                                    >
                                      <Delete />
                                    </Button>
                                  </div>
                                ))}
                              {imgFile.length < 10 && (
                                <Card
                                  className={cn(
                                    'aspect-square p-0 gap-0',
                                    isDragActive &&
                                      'border-blue-500 border-dashed',
                                  )}
                                  {...getRootProps()}
                                >
                                  <input {...getInputProps()} />
                                  <div className="flex flex-col items-center justify-center h-full gap-2">
                                    <Camera className="size-10" />
                                  </div>
                                </Card>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                          {error && (
                            <Typography variant="sm" textColor="destructive">
                              {error}
                            </Typography>
                          )}
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Inforamtion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="basicInfo.title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                              Descriptive titles work best. Try to describe your
                              item the way a buyer would search for it.
                            </FormDescription>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="basicInfo.description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <QuillEditor {...field} />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                              Try to answer the questions buyers will have. Tell
                              the item&apos;s story and explain why it&apos;s
                              special.
                            </FormDescription>
                          </FormItem>
                        )}
                      />
                      <div className="grid gap-6 grid-cols-1 md:grid-cols-6">
                        <FormField
                          control={form.control}
                          name="basicInfo.productType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Product Type</FormLabel>
                              <FormControl>
                                <Combobox
                                  defaultValue={field.value}
                                  options={[
                                    {
                                      value: 'physical',
                                      label: 'Physical',
                                    },
                                    {
                                      value: 'digital',
                                      label: 'Digital',
                                    },
                                    {
                                      value: 'service',
                                      label: 'Service',
                                    },
                                    {
                                      value: 'bundle',
                                      label: 'Bundle',
                                    },
                                  ]}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="basicInfo.productCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Product Code</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="basicInfo.brand"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Brand
                                <span className="text-xs font-semibold text-muted-foreground">
                                  (Optional)
                                </span>
                              </FormLabel>
                              <FormControl>
                                <Combobox
                                  options={[
                                    { label: 'Nike', value: 'nike' },
                                    { label: 'Adidas', value: 'adidas' },
                                  ]}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="basicInfo.color"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Color{' '}
                                <span className="text-xs font-semibold text-muted-foreground">
                                  (Optional)
                                </span>
                              </FormLabel>
                              <FormControl>
                                <Input type="color" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="basicInfo.size"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Size{' '}
                                <span className="text-xs font-semibold text-muted-foreground">
                                  (Optional)
                                </span>
                              </FormLabel>
                              <FormControl>
                                <Combobox
                                  options={[
                                    { value: 'xxs', label: 'XXS' },
                                    { value: 'xs', label: 'XS' },
                                  ]}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="basicInfo.weight"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Weight
                                <span className="text-xs font-semibold text-muted-foreground">
                                  (Optional)
                                </span>
                              </FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Invendory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                      <FormField
                        control={form.control}
                        name="inventory.sku"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>SKU</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="inventory.barcode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Bardcode{' '}
                              <span className="text-xs font-semibold text-muted-foreground">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="inventory.batchNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Batch Number{' '}
                              <span className="text-xs font-semibold text-muted-foreground">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="inventory.warehouseLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Warehouse Location{' '}
                              <span className="text-xs font-semibold text-muted-foreground">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      <FormField
                        control={form.control}
                        name="pricing.basePrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Base price</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pricing.salePrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sale price</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pricing.priceCurrency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Currency</FormLabel>
                            <FormControl>
                              <Combobox
                                defaultValue={field.value}
                                options={[
                                  {
                                    value: 'USD',
                                    label: '$ United States Dollar (USD)',
                                  },
                                  {
                                    value: 'CAD',
                                    label: '$ Canadian Dollar (CAD)',
                                  },
                                ]}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pricing.taxInclusive"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Tax calculation{' '}
                              <span className="text-xs font-semibold text-muted-foreground">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Combobox
                                defaultValue={field.value}
                                options={[
                                  {
                                    value: 'include',
                                    label: 'Include',
                                  },
                                  {
                                    value: 'exclude',
                                    label: 'Exclude',
                                  },
                                ]}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pricing.discountType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Discount type{' '}
                              <span className="text-xs font-semibold text-muted-foreground">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Combobox
                                defaultValue={field.value}
                                options={[
                                  {
                                    value: 'fixed',
                                    label: 'Fixed',
                                  },
                                  {
                                    value: 'percentage',
                                    label: 'Percentage',
                                  },
                                ]}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pricing.discountValue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Discount value{' '}
                              <span className="text-xs font-semibold text-muted-foreground">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pricing.discountStartDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Discount Start{' '}
                              <span className="text-xs font-semibold text-muted-foreground">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <DatePicker
                                onChange={field.onChange}
                                value={field.value}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pricing.discountEndDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Discount End{' '}
                              <span className="text-xs font-semibold text-muted-foreground">
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <DatePicker
                                onChange={field.onChange}
                                value={field.value}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      <FormField
                        control={form.control}
                        name="categories.mainCategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Combobox
                                defaultValue={field.value}
                                options={[
                                  {
                                    label: 'Electronics',
                                    value: 'electronics',
                                  },
                                  {
                                    label: 'Fashion & Apparel',
                                    value: 'fashion',
                                  },
                                ]}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="categories.subCategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sub Category</FormLabel>
                            <FormControl>
                              <Combobox
                                defaultValue={field.value}
                                options={[
                                  {
                                    label: 'Electronics',
                                    value: 'electronics',
                                  },
                                  {
                                    label: 'Fashion & Apparel',
                                    value: 'fashion',
                                  },
                                ]}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="categories.tertiaryCategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tertiary Category (Optinal)</FormLabel>
                            <FormControl>
                              <Combobox
                                defaultValue={field.value}
                                options={[
                                  {
                                    label: 'Electronics',
                                    value: 'electronics',
                                  },
                                  {
                                    label: 'Fashion & Apparel',
                                    value: 'fashion',
                                  },
                                ]}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="categories.productTags"
                        render={({ field }) => (
                          <FormItem className="md:col-span-full">
                            <FormLabel>Tags (Optinal)</FormLabel>
                            <FormControl>
                              <TagInput
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Variants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>SKU</TableHead>
                            <TableHead>Color</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Sale Price</TableHead>
                            <TableHead>Stock Qty</TableHead>
                            <TableHead>Barcode</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fields.map((field, index) => (
                            <TableRow key={field.id}>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.sku`}
                                  render={({ field }) => (
                                    <FormControl>
                                      <Input
                                        {...field}
                                        className="w-full min-w-16"
                                      />
                                    </FormControl>
                                  )}
                                />
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.color`}
                                  render={({ field }) => (
                                    <FormControl>
                                      <Input
                                        type="color"
                                        {...field}
                                        className="w-full min-w-16"
                                      />
                                    </FormControl>
                                  )}
                                />
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.size`}
                                  render={({ field }) => (
                                    <FormControl>
                                      <Combobox
                                        options={[
                                          { value: 'xxs', label: 'XXS' },
                                          { value: 'xs', label: 'XS' },
                                        ]}
                                        {...field}
                                        className="w-40"
                                      />
                                    </FormControl>
                                  )}
                                />
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.price`}
                                  render={({ field }) => (
                                    <FormControl>
                                      <Input
                                        type="number"
                                        {...field}
                                        className="w-full min-w-16"
                                      />
                                    </FormControl>
                                  )}
                                />
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.salePrice`}
                                  render={({ field }) => (
                                    <FormControl>
                                      <Input
                                        type="number"
                                        {...field}
                                        className="w-full min-w-16"
                                      />
                                    </FormControl>
                                  )}
                                />
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.stockQuantity`}
                                  render={({ field }) => (
                                    <FormControl>
                                      <Input
                                        type="number"
                                        {...field}
                                        className="w-full min-w-16"
                                      />
                                    </FormControl>
                                  )}
                                />
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.barcode`}
                                  render={({ field }) => (
                                    <FormControl>
                                      <Input
                                        {...field}
                                        className="w-full min-w-16"
                                      />
                                    </FormControl>
                                  )}
                                />
                              </TableCell>
                              <TableCell align="right">
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  onClick={() => remove(index)}
                                  type="button"
                                >
                                  <Trash />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="ml-auto"
                        onClick={addNewVariant}
                        type="button"
                      >
                        Add Variant
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Search Engine Optimization (SEO)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
                        <FormField
                          control={form.control}
                          name="seo.metaTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Meta Title</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="seo.canonicalUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Canonical Url</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="seo.keywords"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>keywords</FormLabel>
                              <FormControl>
                                <TagInput
                                  value={field.value}
                                  onChange={field.onChange}
                                  placeholder="Add keywords"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="seo.metaDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Meta Description</FormLabel>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Product Status & Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Status</FormLabel>
                            <div className="flex items-center gap-3">
                              {[
                                { value: 'draft', label: 'Draft' },
                                { value: 'active', label: 'Active' },
                                { value: 'archived', label: 'Archived' },
                              ].map((item) => (
                                <div
                                  key={item.value}
                                  className="flex items-center gap-2"
                                >
                                  <Radio
                                    id={`status-${item.value}`}
                                    checked={field.value === item.value}
                                    onChange={() => field.onChange(item.value)}
                                  />
                                  <FormLabel htmlFor={`status-${item.value}`}>
                                    {item.label}
                                  </FormLabel>
                                </div>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="isAdult"
                        render={({ field }) => (
                          <FormItem className="flex items-center gap-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                id="isAdult"
                                checked={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel
                              htmlFor="isAdult"
                              className={cn(field.value && 'text-destructive')}
                            >
                              This product contains adult content
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader />}
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SellerProductCreateVersionOne;

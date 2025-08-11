import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@repo/ui/components/sheet';
import { Button } from '@repo/ui/components/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SlidersHorizontal } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@repo/ui/components/form';
import Typography from '@repo/ui/components/typography';
import Slider from 'rc-slider';
import { Input } from '@repo/ui/components/input';
import { useSearchQuery } from '../contexts/SearchContext';
import { Separator } from '@repo/ui/components/separator';
import { Radio } from '@repo/ui/components/radio';
import { Checkbox } from '@repo/ui/components/checkbox';
import { cn } from '@repo/ui/libs/utils';

const querySchema = z.object({
  category: z.string().optional(),
  price: z.tuple([z.number(), z.number()]).optional(),
  format: z.enum(['all', 'physical', 'digital']).optional(),
  specialOffers: z.array(z.string()).optional(),
});

const specialOffers = [
  {
    id: 'freeDelivery',
    label: 'Free Delivery',
  },
  {
    id: 'onSale',
    label: 'On Sale',
  },
  {
    id: 'discounted',
    label: 'Discounted Items',
  },
] as const;

const categories = [
  'All categories',
  'Craft Supplies & Tools',
  'Paper & Party Supplies',
  'Home & Living',
  'Art & Collectibles',
  'Bath & Beauty',
  'Toys & Games',
  'Books, Films & Music',
  'Electronics & Accessories',
  'Accessories',
  'Jewellery',
  'Weddings',
  'Clothing',
  'Pet Supplies',
];

const SearchQueryForm = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 6);
  const query = useSearchQuery();
  const [price] = useState(query.query.price);

  const form = useForm<z.infer<typeof querySchema>>({
    resolver: zodResolver(querySchema),
    mode: 'onChange',
    defaultValues: {
      category: '',
      price: JSON.parse(price ?? '[0, 500]'),
      format: 'all',
      specialOffers: ['freeDelivery'],
    },
  });

  async function onSubmit(data: z.infer<typeof querySchema>) {
    alert(JSON.stringify(data));
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <SlidersHorizontal /> Filters
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="gap-0 sm:max-w-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-full"
          >
            <VisuallyHidden>
              <SheetTitle>Filters</SheetTitle>
              <SheetHeader>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </VisuallyHidden>
            <div className="min-h-[calc(100svh-150px)] overflow-y-auto">
              <div className="p-4 lg:p-10">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <Typography variant="sm" weight="bold">
                          Categories
                        </Typography>
                        <FormControl>
                          <div className="space-y-3">
                            {visibleCategories.map((item, i) => (
                              <FormLabel
                                key={i}
                                className={cn(
                                  'font-normal cursor-pointer',
                                  field.value === item &&
                                    'text-blue-700 font-medium',
                                )}
                                onClick={() => field.onChange(item)}
                              >
                                {item}
                              </FormLabel>
                            ))}

                            <FormLabel
                              onClick={() => setShowAll((prev) => !prev)}
                              className="font-normal cursor-pointer underline"
                            >
                              {showAll ? 'Show Less' : 'Show More'}
                            </FormLabel>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <Typography variant="sm" weight="bold">
                          Price
                        </Typography>
                        <FormControl>
                          <Slider range min={0} max={500} step={1} {...field} />
                        </FormControl>
                        <div className="flex items-center gap-2">
                          <Input
                            value={`$ ${(field.value || [0, 500])[0]}`}
                            readOnly
                          />
                          <Input
                            value={`$ ${(field.value || [0, 500])[1]}`}
                            readOnly
                          />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="format"
                    render={({ field }) => (
                      <FormItem>
                        <Typography variant="sm" weight="bold">
                          Item format
                        </Typography>
                        <FormControl>
                          <div className="space-y-3">
                            <FormItem className="flex items-center gap-3">
                              <Radio
                                id="format-all"
                                value="all"
                                checked={field.value === 'all'}
                                onChange={() => field.onChange('all')}
                              />
                              <FormLabel
                                htmlFor="format-all"
                                className="font-normal cursor-pointer"
                              >
                                All
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-3">
                              <Radio
                                id="format-physical"
                                value="physical"
                                checked={field.value === 'physical'}
                                onChange={() => field.onChange('physical')}
                              />
                              <FormLabel
                                htmlFor="format-physical"
                                className="font-normal cursor-pointer"
                              >
                                Physical items
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-3">
                              <Radio
                                id="format-digital"
                                value="digital"
                                checked={field.value === 'digital'}
                                onChange={() => field.onChange('digital')}
                              />
                              <FormLabel
                                htmlFor="format-digital"
                                className="font-normal cursor-pointer"
                              >
                                Digital downloads
                              </FormLabel>
                            </FormItem>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="specialOffers"
                    render={() => (
                      <FormItem>
                        <Typography variant="sm" weight="bold">
                          Special offers
                        </Typography>
                        {specialOffers.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="specialOffers"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex items-center gap-3"
                                >
                                  <FormControl>
                                    <Checkbox
                                      id={item.label}
                                      checked={field.value?.includes(item.id)}
                                      onChange={(e) => {
                                        const checked = e.target.checked;
                                        const currentValues = field.value || [];
                                        if (checked) {
                                          field.onChange([
                                            ...currentValues,
                                            item.id,
                                          ]);
                                        } else {
                                          field.onChange(
                                            currentValues.filter(
                                              (value) => value !== item.id,
                                            ),
                                          );
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel
                                    htmlFor={item.label}
                                    className="text-sm font-normal"
                                  >
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <Separator className="mb-4" />
            <div className="px-4 pb-4 w-full">
              <Button size="lg" className="w-full rounded-full" type="submit">
                Filter
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default SearchQueryForm;

'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Input } from '@repo/ui/components/input';
import { Button } from '@repo/ui/components/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import Combobox from '@repo/ui/components/combobox';

const subCategorySchema = z.object({
  newSubSubCategory: z.string().min(1, 'New Sub Category is required'),
  newSubCategory: z.string().min(1, 'New Sub Category is required'),
  category: z.string().min(1, 'Main Category is required'),
  priority: z.string().optional(),
});

const AdminCreateSubSubCategory = () => {
  const form = useForm<z.infer<typeof subCategorySchema>>({
    resolver: zodResolver(subCategorySchema),
    mode: 'onChange',
    defaultValues: {
      newSubSubCategory: '',
      newSubCategory: '',
      category: '',
      priority: '',
    },
  });

  function onSubmit(data: z.infer<typeof subCategorySchema>) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Sub sub category name</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
              <FormField
                control={form.control}
                name="newSubSubCategory"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Sub Sub Category Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newSubCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sub Category Name</FormLabel>
                    <FormControl>
                      <Combobox
                        defaultValue={field.value}
                        options={[
                          { label: 'Toys & Games', value: 'toys-games' },
                          { label: 'Home & Living', value: 'home-living' },
                          {
                            label: 'Books & Stationery',
                            value: 'books-stationery',
                          },
                          {
                            label: 'Fashion & Accessories',
                            value: 'fashion-accessories',
                          },
                          { label: 'Electronics', value: 'electronics' },
                          {
                            label: 'Personalized Gifts',
                            value: 'personalized-gifts',
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Category</FormLabel>
                    <FormControl>
                      <Combobox
                        defaultValue={field.value}
                        options={[
                          { label: 'Toys & Games', value: 'toys-games' },
                          { label: 'Home & Living', value: 'home-living' },
                          {
                            label: 'Books & Stationery',
                            value: 'books-stationery',
                          },
                          {
                            label: 'Fashion & Accessories',
                            value: 'fashion-accessories',
                          },
                          { label: 'Electronics', value: 'electronics' },
                          {
                            label: 'Personalized Gifts',
                            value: 'personalized-gifts',
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
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <FormControl>
                      <Combobox
                        options={Array.from({ length: 11 }, (_, i) => ({
                          label: i.toString(),
                          value: i.toString(),
                        }))}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="gap-6 justify-end">
            <Button type="button" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default AdminCreateSubSubCategory;

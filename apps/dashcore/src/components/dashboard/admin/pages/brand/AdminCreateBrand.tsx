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
import { useMuntahaDrop } from 'react-muntaha-uploader';
import { Input } from '@repo/ui/components/input';
import Image from 'next/image';
import { Button } from '@repo/ui/components/button';
import Typography from '@repo/ui/components/typography';
import { ImageUp } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { cn } from '@repo/ui/libs/utils';

const brandSchema = z.object({
  brand: z.string().min(1, 'New brand is required'),
  alt: z.string().optional(),
  img: z
    .custom<File>()
    .refine((file) => file instanceof File, 'Image is required')
    .refine(
      (file) => file.type.startsWith('image/'),
      'Only image files are allowed (jpg, png, etc.)',
    )
    .optional(),
});

const AdminCreateBrand = () => {
  const form = useForm<z.infer<typeof brandSchema>>({
    resolver: zodResolver(brandSchema),
    mode: 'onChange',
    defaultValues: {
      img: undefined,
      brand: '',
      alt: '',
    },
  });

  function onSubmit(data: z.infer<typeof brandSchema>) {
    console.log(data);
  }

  const { getRootProps, getInputProps, error, isDragActive } = useMuntahaDrop({
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
    multiple: false,
    onDrop: (file: File | null) => {
      if (file) {
        form.setValue('img', file);
      }
    },
  });

  const imgFile = form.watch('img');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Brand Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-5">
              <div className="order-2 md:col-span-3 md:order-1">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brand Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="alt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image alt text</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="order-1 md:col-span-2 md:order-2">
                <div className="flex flex-col items-center justify-center gap-6">
                  <Input id="avatar" name="avatar" {...getInputProps()} />
                  <div className="size-40 aspect-square" {...getRootProps()}>
                    {imgFile ? (
                      <div className="size-full relative group">
                        <Image
                          src={URL.createObjectURL(imgFile)}
                          alt="Profile image"
                          width={160}
                          height={160}
                          className="size-40 object-cover rounded-md"
                          priority
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/25 h-full w-full opacity-0 group-hover:opacity-100">
                          <div className="w-full h-full flex items-center justify-center">
                            <ImageUp />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={cn(
                          'size-full border border-border border-dashed rounded-md',
                          isDragActive && 'border-blue-500',
                        )}
                      >
                        <div className="h-full flex flex-col items-center justify-center gap-3">
                          <span>
                            <ImageUp />
                          </span>
                          <p className="text-xs text-center font-medium">
                            <span className="text-blue-500">
                              Click to upload
                            </span>
                            <br />
                            <span>Or drag and drop</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {error ? (
                    <Typography variant="xs" textColor="destructive">
                      {error}
                    </Typography>
                  ) : (
                    <Typography variant="xs" textColor="muted">
                      JPG, JPEG, PNG image size : max 2 MB{' '}
                      <span className="font-semibold">
                        Ratio 1:1 (500 x 500 px)
                      </span>
                    </Typography>
                  )}
                </div>
              </div>
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

export default AdminCreateBrand;

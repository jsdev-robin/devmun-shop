'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@repo/ui/components/card';
import Heading from '@repo/ui/components/heading';
import Link from 'next/link';
import { HeartIcon } from 'lucide-react';
import { Skeleton } from '@repo/ui/components/skeleton';
import SkeletonHeading from '@repo/ui/components/skeleton-heading';
import ApiError from '@repo/ui/common/api-error';
import Typography from '@repo/ui/components/typography';
import { Button } from '@repo/ui/components/button';
import SyncImage from '../../ui/product/SyncImage';

const data = [
  {
    title:
      'Printable T-Rex Valentine Favor Tags, Goody Bag Tags, Classroom Party Tags, Treat Bag Tags, Stickers, Editable Template',
    description:
      'Snowman Tag | gift tag | pastel colors | snack tag | cute snowman',
    images: [
      { src: '/images/products/52.jpg', alt: 'Snowman tag front view' },
      { src: '/images/products/53.jpg', alt: 'Snowman tag side view' },
      { src: '/images/products/54.jpg', alt: 'Snowman tag with gift' },
    ],
    price: 9.99,
  },
  {
    title: "Snow happy we're friends editable Favor Tag",
    description:
      'Snowman Tag | gift tag | pastel colors | snack tag | cute snowman',
    images: [
      { src: '/images/products/55.jpg', alt: 'Snowman tag front view' },
      { src: '/images/products/53.jpg', alt: 'Snowman tag side view' },
      { src: '/images/products/54.jpg', alt: 'Snowman tag with gift' },
    ],
    price: 9.99,
  },
  {
    title:
      'Wizard Potion Labels Printables, HP Polyjuice Potion Label, Editable, Halloween Decor, Wizard Party, Apothecary Labels, INSTANT DOWNLOAD',
    description:
      'Snowman Tag | gift tag | pastel colors | snack tag | cute snowman',
    images: [
      { src: '/images/products/53.jpg', alt: 'Snowman tag front view' },
      { src: '/images/products/54.jpg', alt: 'Snowman tag side view' },
      { src: '/images/products/55.jpg', alt: 'Snowman tag with gift' },
    ],
    price: 9.99,
  },
  {
    title:
      'SBack To School Gift Tag Template, Printable Class Favors, Editable A Little Treat To Make Your First Day Sweet Tag, Instant Download',
    description:
      'Snowman Tag | gift tag | pastel colors | snack tag | cute snowman',
    images: [
      { src: '/images/products/54.jpg', alt: 'Snowman tag front view' },
      { src: '/images/products/55.jpg', alt: 'Snowman tag side view' },
    ],
    price: 9.99,
  },
];

const HomeRecommendation = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
    data.map(() => 0),
  );

  const handleSyncImage = (productIndex: number) => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[productIndex] =
        (newIndices[productIndex] + 1) % data[productIndex].images.length;
      return newIndices;
    });
  };

  const isError = false;
  const isLoading = false;

  return (
    <section>
      <div className="container">
        <div className="grid gap-4 xl:grid-cols-4">
          <div className="xl:col-span-1">
            {isLoading ? (
              <div className="space-y-2">
                <SkeletonHeading as="h4" />
                <SkeletonHeading as="h4" className="hidden xl:block" />
                <SkeletonHeading as="h4" className="hidden xl:block" />
              </div>
            ) : (
              <Heading as="h4" className="text-center xl:text-left">
                Favourite the items you like to get instant recommendations
              </Heading>
            )}
          </div>
          <div className="xl:col-span-3">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {isError ? (
                <ApiError />
              ) : isLoading ? (
                [...Array(4)].map((_, index) => (
                  <Skeleton key={index} className="h-44" />
                ))
              ) : (
                <React.Fragment>
                  {data.map((product, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background relative p-0 gap-0"
                    >
                      <Link
                        href={`/featured/hub/${product.title}`}
                        className="absolute inset-0 w-full h-full"
                      />
                      <Image
                        src={product.images[currentImageIndices[i]].src}
                        alt={product.images[currentImageIndices[i]].alt}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        priority
                      />
                      <div className="p-2">
                        <Typography variant="sm" className="line-clamp-2">
                          {product.title} | {product.description}
                        </Typography>
                      </div>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-2 right-2 rounded-full hover:shadow-4"
                      >
                        <HeartIcon />
                      </Button>
                      <SyncImage onClick={() => handleSyncImage(i)} />
                    </Card>
                  ))}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRecommendation;

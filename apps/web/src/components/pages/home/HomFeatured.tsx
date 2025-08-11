'use client';

import React from 'react';
import Heading from '@repo/ui/components/heading';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from '@repo/ui/components/skeleton';
import SkeletonHeading from '@repo/ui/components/skeleton-heading';
import { Card } from '@repo/ui/components/card';
import ApiError from '@repo/ui/common/api-error';
import { Button } from '@repo/ui/components/button';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';
import { truncate } from '@repo/ui/libs/truncate';

const data = [
  {
    title: 'Maritime Living',
    image: { src: '/images/products/06.jpg', alt: 'Maritime Living' },
    slug: 'maritime-living',
  },
  {
    title: 'Velvet Vibes',
    image: { src: '/images/products/07.jpg', alt: 'Velvet Vibes' },
    slug: 'velvet-vibes',
  },
  {
    title: 'Crochet Style',
    image: { src: '/images/products/08.jpg', alt: 'Crochet Style' },
    slug: 'crochet-style',
  },
  {
    title: 'Head Chef Energy',
    image: { src: '/images/products/09.jpg', alt: 'Head Chef Energy' },
    slug: 'head-chef-energy',
  },
  {
    title: 'Dark Romanticism Vows',
    image: { src: '/images/products/10.jpg', alt: 'Dark Romanticism Vows' },
    slug: 'dark-romanticism-vows',
  },
  {
    title: 'Giddy Up',
    image: { src: '/images/products/11.jpg', alt: 'Giddy Up' },
    slug: 'giddy-up',
  },
  {
    title: 'Sledging',
    image: { src: '/images/products/12.jpg', alt: 'Sledging' },
    slug: 'sledging',
  },
  {
    title: 'Upcycled Style',
    image: { src: '/images/products/13.jpg', alt: 'Upcycled Style' },
    slug: 'upcycled-style',
  },
  {
    title: 'Darts',
    image: { src: '/images/products/14.jpg', alt: 'Darts' },
    slug: 'darts',
  },
  {
    title: 'Book Nooks',
    image: { src: '/images/products/15.jpg', alt: 'Book Nooks' },
    slug: 'book-nooks',
  },
];

const HomFeatured = () => {
  const isLoading = false;
  const isError = false;

  return (
    <section>
      <div className="container">
        <div className="space-y-6">
          {isLoading ? (
            <SkeletonHeading as="h4" />
          ) : (
            <Heading as="h4">Jump into featured interests</Heading>
          )}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {isError ? (
              <ApiError />
            ) : isLoading ? (
              [...Array(10)].map((_, i) => (
                <Skeleton key={i} className="w-full h-56" />
              ))
            ) : (
              data.map((item, i) => (
                <Card key={i} className="relative p-0 group">
                  <Link
                    href={`/featured/hub/${item.slug}`}
                    className="absolute inset-0 w-full h-full z-10"
                  />
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={600}
                    height={600}
                    sizes="(max-width: 639px) 50vw, 25vw"
                    blurDataURL={rgbDataURL(i)}
                    placeholder="blur"
                    loading="lazy"
                    className="size-full aspect-square object-cover rounded-xl"
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <Button variant="secondary" className="gap-0 rounded-full">
                      {truncate(item.title, 15)}
                      <span className="overflow-hidden transition-all w-0 -translate-x-2 group-hover:translate-x-0 group-hover:ml-2 group-hover:w-4">
                        <ArrowRight />
                      </span>
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomFeatured;

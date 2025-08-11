'use client';

import React from 'react';
import Heading from '@repo/ui/components/heading';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from '@repo/ui/components/skeleton';
import SkeletonHeading from '@repo/ui/components/skeleton-heading';
import ApiError from '@repo/ui/common/api-error';
import Typography from '@repo/ui/components/typography';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';

const data = [
  {
    title: 'Party Decor',
    slug: 'party-decor',
    image: {
      src: '/images/products/45.jpg',
      alt: 'Colorful party decorations including balloons and streamers',
    },
  },
  {
    title: 'Party Games',
    slug: 'party-games',
    image: {
      src: '/images/products/46.jpg',
      alt: 'Exciting party games setup with cards and board games',
    },
  },
  {
    title: 'Patches',
    slug: 'patches',
    image: {
      src: '/images/products/47.jpg',
      alt: 'A collection of embroidered patches with various designs',
    },
  },
  {
    title: 'Gender-Neutral Adult Sweatshirts',
    slug: 'gender-neutral-adult-sweatshirts',
    image: {
      src: '/images/products/48.jpg',
      alt: 'Comfortable gender-neutral sweatshirts in various colors',
    },
  },
  {
    title: 'Pendant Necklaces',
    slug: 'pendant-necklaces',
    image: {
      src: '/images/products/49.jpg',
      alt: 'Stylish pendant necklaces with unique designs',
    },
  },
  {
    title: 'Digital Prints',
    slug: 'digital-prints',
    image: {
      src: '/images/products/50.jpg',
      alt: 'Artistic digital prints displayed in a modern frame',
    },
  },
];

const HomeLoveShop = () => {
  const isError = false;
  const isLoading = false;
  return (
    <section>
      <div className="container">
        <div className="space-y-6">
          <div className="space-y-2">
            {isLoading ? (
              <SkeletonHeading as="h4" />
            ) : (
              <React.Fragment>
                <Heading as="h4">Categories you&apos;ll love to shop</Heading>
                <Typography variant="xs" textColor="muted">
                  Based on your activity
                </Typography>
              </React.Fragment>
            )}
          </div>
          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {isError ? (
              <ApiError />
            ) : isLoading ? (
              [...Array(6)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-36 shrink-0 h-44 md:h-60 md:w-auto"
                />
              ))
            ) : (
              <React.Fragment>
                {data.map((item, i) => (
                  <Link
                    href={`/featured/hub/${item.slug}`}
                    key={i}
                    className="w-36 shrink-0 rounded-xl md:w-auto transition-all group"
                  >
                    <div className="space-y-2">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        width={600}
                        height={600}
                        sizes="(max-width: 899px) 33vw, 17vw"
                        blurDataURL={rgbDataURL(i)}
                        placeholder="blur"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-xl block mx-auto transition-all group-hover:shadow-2 aspect-[0.8] group-hover:shadow-4"
                      />
                      <Typography weight="semibold">{item.title}</Typography>
                    </div>
                  </Link>
                ))}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoveShop;

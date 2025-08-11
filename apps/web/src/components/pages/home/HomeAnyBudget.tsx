'use client';

import React from 'react';
import { Button } from '@repo/ui/components/button';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Badge } from '@repo/ui/components/badge';
import Heading from '@repo/ui/components/heading';
import { Card } from '@repo/ui/components/card';
import { HeartIcon } from 'lucide-react';
import ApiError from '@repo/ui/common/api-error';
import { Skeleton } from '@repo/ui/components/skeleton';
import Typography from '@repo/ui/components/typography';
import SkeletonTypography from '@repo/ui/components/skeleton-typography';
import SkeletonHeading from '@repo/ui/components/skeleton-heading';
import { cn } from '@repo/ui/libs/utils';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';

const products = [
  {
    id: 1,
    imageSrc: '/images/gifts/07.jpg',
    videoSrc:
      'https://res.cloudinary.com/dft8nx292/video/upload/v1752682441/fptbr2ndzkoidlscom8v.mp4',
    price: '14.82',
    alt: 'A handcrafted wooden jewelry box',
  },
  {
    id: 2,
    imageSrc: '/images/gifts/08.jpg',
    price: '11.29',
    alt: 'A soft plush teddy bear',
  },
  {
    id: 3,
    imageSrc: '/images/gifts/10.jpg',
    videoSrc:
      'https://res.cloudinary.com/dft8nx292/video/upload/v1752682433/ztoyevem0inz4qhovmjj.mp4',
    price: '18.65',
    alt: 'A handmade ceramic coffee mug',
  },
  {
    id: 4,
    imageSrc: '/images/gifts/10.jpg',
    price: '13.47',
    oldPrice: '16.99',
    alt: 'A vintage-style pocket watch',
  },
  {
    id: 5,
    imageSrc: '/images/gifts/11.jpg',
    price: '19.23',
    alt: 'A customized leather wallet',
  },
  {
    id: 6,
    imageSrc: '/images/gifts/12.jpg',
    price: '12.74',
    alt: 'A scented candle in a decorative jar',
  },
  {
    id: 7,
    imageSrc: '/images/gifts/13.jpg',
    price: '17.36',
    alt: 'A handcrafted wooden photo frame',
  },
];

const HomeAnyBudget = () => {
  const isError = false;
  const isLoading = false;
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div className="md:col-span-2">
            {isLoading ? (
              <SkeletonTypography className="mb-6" />
            ) : (
              <Typography textColor="muted">Editors’ Picks</Typography>
            )}
            {isLoading ? (
              <SkeletonHeading as="h4" />
            ) : (
              <Heading as="h4">Original Finds for Any Budget</Heading>
            )}
          </div>
          {isError ? (
            <ApiError />
          ) : isLoading ? (
            [...Array(7)].map((_, index) => (
              <Skeleton
                key={index}
                className={cn(
                  'w-full h-36',
                  index === 2 && 'h-full lg:col-span-2 lg:row-span-2',
                )}
              />
            ))
          ) : (
            products.map((item, i) => (
              <Card
                className={cn(
                  'overflow-hidden transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background relative p-0 gap-0 group',
                  i === 2 && 'lg:col-span-2 lg:row-span-2',
                )}
                key={item.id}
              >
                <Link
                  href={`/listing/${i}/${item.id}`}
                  className="absolute inset-0 w-full h-full z-10"
                />
                <Image
                  src={item.imageSrc}
                  alt={''}
                  width={600}
                  height={600}
                  blurDataURL={rgbDataURL(i)}
                  placeholder="blur"
                  loading="lazy"
                  className={cn(
                    'w-full h-full object-cover rounded-xl aspect-square transition-all duration-500 group-hover:scale-105',
                    item.videoSrc ? 'group-hover:hidden' : null,
                  )}
                />
                {item.videoSrc && (
                  <video
                    onMouseEnter={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.play().catch((error) => {
                        console.warn('Video play was prevented:', error);
                      });
                    }}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    width="100%"
                    height="100%"
                    controls={false}
                    className="w-full h-full rounded-xl aspect-square object-cover hidden group-hover:block"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={item.videoSrc} type="video/mp4" />
                    <source src={item.videoSrc} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2 translate-y-4 rounded-full transition-all z-10 shadow-2 opacity-0 hover:shadow-4 group-hover:opacity-100 group-hover:translate-y-0 max-xl:touch:opacity-100 max-xl:touch:translate-y-0"
                >
                  <HeartIcon />
                </Button>
                <div className="absolute bottom-2 left-2 translate-y-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-y-0 z-10 max-xl:touch:opacity-100 max-xl:touch:translate-y-0">
                  <Badge
                    variant="secondary"
                    className="font-semibold border border-foreground"
                  >
                    <span> USD {item.price} </span>
                    {item.oldPrice && (
                      <del className="font-normal hidden sm:block">
                        USD {item.oldPrice}
                      </del>
                    )}
                  </Badge>
                </div>
                {item.videoSrc && (
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute right-2 bottom-2 rounded-full size-7 z-20"
                  >
                    <Play />
                  </Button>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeAnyBudget;

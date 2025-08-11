'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';
import Typography from '@repo/ui/components/typography';

const data = [
  {
    image: { src: '/images/categories/01.jpg', alt: '' },
    title: 'Personalised Gifts on sale',
    slug: 'personalised-gifts-on-sale',
  },
  {
    image: { src: '/images/categories/02.jpg', alt: '' },
    title: 'Bestsellers on sale',
    slug: 'bestsellers-on-sale',
  },
  {
    image: { src: '/images/categories/03.jpg', alt: '' },
    title: 'Home Decor on sale',
    slug: 'home-decor-on-sale',
  },
  {
    image: { src: '/images/categories/04.jpg', alt: '' },
    title: 'Spring Style on sale',
    slug: 'spring-style-on-sale',
  },
  {
    image: { src: '/images/categories/05.jpg', alt: '' },
    title: 'Kids & Baby on sale',
    slug: 'kids-baby-on-sale',
  },
  {
    image: { src: '/images/categories/06.jpg', alt: '' },
    title: 'Gifts for Her on sale',
    slug: 'gifts-for-her-on-sale',
  },
  {
    image: { src: '/images/categories/07.jpg', alt: '' },
    title: 'Gifts for Him on sale',
    slug: 'gifts-for-him-on-sale',
  },
  {
    image: { src: '/images/categories/08.jpg', alt: '' },
    title: 'Wall Art on sale',
    slug: 'wall-art-on-sale',
  },
  {
    image: { src: '/images/categories/09.jpg', alt: '' },
    title: 'Jewellery on sale',
    slug: 'jewellery-on-sale',
  },
  {
    image: { src: '/images/categories/10.jpg', alt: '' },
    title: 'Trending: Kitchen & Dining',
    slug: 'trending-kitchen-dining',
  },
  {
    image: { src: '/images/categories/11.jpg', alt: '' },
    title: 'Flash Finds: Pet Supplies',
    slug: 'flash-finds-pet-supplies',
  },
  {
    image: { src: '/images/categories/12.jpg', alt: '' },
    title: 'Trending: Home Improvement',
    slug: 'trending-home-improvement',
  },
];

const FeaturedCategories = () => {
  return (
    <section>
      <div className="container">
        <div className="grid gap-4 grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data.map((item, index) => (
            <article
              key={index}
              className="rounded-xl text-center relative group"
            >
              <Link
                href={`/search?q=${item.slug}`}
                className="absolute inset-0 w-full h-full z-10"
              />
              <div className="space-y-4">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={160}
                  height={160}
                  blurDataURL={rgbDataURL(index + 1)}
                  placeholder="blur"
                  loading="lazy"
                  className="rounded-full block mx-auto object-cover max-w-24 max-h-24 md:max-w-40 md:max-h-40"
                />
                <Typography
                  variant="sm"
                  weight="semibold"
                  className="flex items-center flex-wrap justify-center gap-1"
                >
                  {item.title}
                  <span className="transition-all group-hover:translate-x-1">
                    <ArrowRight
                      size={14}
                      strokeWidth={3}
                      className="hidden md:block"
                    />
                  </span>
                </Typography>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;

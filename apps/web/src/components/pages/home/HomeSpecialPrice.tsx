import React from 'react';
import { Button } from '@repo/ui/components/button';
import Heading from '@repo/ui/components/heading';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@repo/ui/components/skeleton';
import ApiError from '@repo/ui/common/api-error';
import Typography from '@repo/ui/components/typography';
import { Badge } from '@repo/ui/components/badge';
import { Card } from '@repo/ui/components/card';
import { HeartIcon } from 'lucide-react';
import SkeletonTypography from '@repo/ui/components/skeleton-typography';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';

const featuredData = [
  {
    title: 'Birthday Gift Card and Money Holders Holders Holders',
    image: { src: '/images/products/16.jpg', alt: 'Maritime Living' },
    slug: 'birthday-gift-card-and-money-holders-holders-holders',
  },
  {
    title: 'Pop-up and Confetti Birthday Cards',
    image: {
      src: '/images/products/17.jpg',
      alt: 'Pop-up and Confetti Birthday Cards',
    },
    slug: 'pop-up-and-confetti-birthday-cards',
  },
  {
    title: 'Camera Straps',
    image: { src: '/images/products/18.jpg', alt: 'Camera Straps' },
    slug: 'camera-straps',
  },
];

const productData = [
  {
    image: { src: '/images/products/19.jpg', alt: 'Product 19' },
    price: '21.90',
    originalPrice: '29.00',
    slug: 'product-19',
  },
  {
    image: { src: '/images/products/20.jpg', alt: 'Product 20' },
    price: '18.50',
    slug: 'product-20',
  },
  {
    image: { src: '/images/products/21.jpg', alt: 'Product 21' },
    price: '26.75',
    originalPrice: '33.50',
    slug: 'product-21',
  },
  {
    image: { src: '/images/products/22.jpg', alt: 'Product 22' },
    price: '15.40',
    slug: 'product-22',
  },
  {
    image: { src: '/images/products/23.jpg', alt: 'Product 23' },
    price: '31.20',
    originalPrice: '38.00',
    slug: 'product-23',
  },
  {
    image: { src: '/images/products/24.jpg', alt: 'Product 24' },
    price: '22.10',
    slug: 'product-24',
  },
];

const specialData = [
  {
    title: 'Personalised Gifts',
    image: { src: '/images/products/25.jpg', alt: 'Personalised Gifts' },
    slug: 'personalised-gifts',
  },
  {
    title: 'Gifts for Him',
    image: { src: '/images/products/26.jpg', alt: 'Gifts for Him' },
    slug: 'gifts-for-him',
  },
  {
    title: 'Gifts for Her',
    image: { src: '/images/products/27.jpg', alt: 'Gifts for Her' },
    slug: 'gifts-for-her',
  },
  {
    title: 'Gifts for Kids',
    image: { src: '/images/products/28.jpg', alt: 'Gifts for Kids' },
    slug: 'gifts-for-kids',
  },
  {
    title: 'Outdoor Decor',
    image: { src: '/images/products/29.jpg', alt: 'Outdoor Decor' },
    slug: 'outdoor-decor',
  },
];

const HomeMunSpecial = () => {
  const isLoading = false;
  const isError = false;
  return (
    <section>
      <div className="container">
        <div className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
            {!isLoading && (
              <div className="col-span-1">
                <div className="flex items-center justify-between gap-4 flex-wrap xl:flex-none">
                  <Heading as="h4">Mun-special gifts for birthdays</Heading>
                  <Button
                    className="rounded-full"
                    variant="secondary"
                    size="lg"
                  >
                    Get inspired
                  </Button>
                </div>
              </div>
            )}
            {isError ? (
              <ApiError className="col-span-full xl:col-span-1" />
            ) : isLoading ? (
              [...Array(4)].map((_, index) => (
                <Skeleton key={index} className="w-full h-44 lg:h-56" />
              ))
            ) : (
              featuredData.map(({ image, title, slug }, i) => (
                <article
                  className="overflow-hidden transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background relative rounded-xl flex flex-col justify-end bg-[linear-gradient(#0e0e0e00_48%,#0e0e0eab_100%)]"
                  key={i}
                >
                  <Link
                    href={`/gift-mode/${slug}`}
                    className="absolute inset-0 w-full h-full z-10"
                  />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    sizes="(max-width: 639px) 100vw, (max-width: 899px) 60vw, (max-width: 1199px) 55vw, 40vw"
                    blurDataURL={rgbDataURL(i)}
                    placeholder="blur"
                    loading="lazy"
                    className="w-full h-full object-cover -z-10"
                  />
                  <div className="absolute bottom-0 left-0 p-2 w-full">
                    <Typography
                      weight="medium"
                      className="text-white line-clamp-2"
                    >
                      {title}
                    </Typography>
                  </div>
                </article>
              ))
            )}
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {isError ? (
              <ApiError />
            ) : isLoading ? (
              [...Array(6)].map((_, index) => (
                <Skeleton key={index} className="w-full h-36" />
              ))
            ) : (
              productData.map(({ image, price, originalPrice, slug }, i) => (
                <Card
                  className="overflow-hidden p-0 relative h-36 group"
                  key={i}
                >
                  <Link
                    href={`/listing/${i}/${slug}`}
                    className="absolute inset-0 w-full h-full z-10"
                  />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    sizes="(max-width: 639px) 50vw, (max-width: 899px) 25vw, (max-width: 1199px) 20vw, 16vw"
                    blurDataURL={rgbDataURL(i)}
                    placeholder="blur"
                    loading="lazy"
                    className="max-w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2">
                    <Badge
                      variant="secondary"
                      className="font-semibold border border-foreground"
                    >
                      <span> USD {price} </span>
                      {originalPrice && (
                        <del className="font-normal hidden sm:block">
                          USD {originalPrice}
                        </del>
                      )}
                    </Badge>
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 translate-y-4 rounded-full transition-all z-10 shadow-2 opacity-0 hover:shadow-4 group-hover:opacity-100 group-hover:translate-y-0 max-xl:touch:opacity-100 max-xl:touch:translate-y-0"
                  >
                    <HeartIcon />
                  </Button>
                </Card>
              ))
            )}
          </div>
          <div className="space-y-4">
            {isLoading ? (
              <SkeletonTypography />
            ) : (
              <Typography weight="semibold">
                Gifts as special as they are
              </Typography>
            )}
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {isError ? (
                <ApiError />
              ) : isLoading ? (
                [...Array(5)].map((_, index) => (
                  <Skeleton key={index} className="w-full h-24" />
                ))
              ) : (
                <React.Fragment>
                  {specialData.map((item, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background relative p-2 shadow-2 hover:shadow-4"
                    >
                      <Link
                        href={`/search?q=${item.slug}`}
                        className="absolute inset-0 w-full h-full z-10"
                      />
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          width={90}
                          height={90}
                          blurDataURL={rgbDataURL(i)}
                          placeholder="blur"
                          loading="lazy"
                          sizes="(max-width: 479px) 75px, (max-width: 639px) 102px, 90px"
                          className="rounded-xl object-cover aspect-square size-16 md:size-22"
                        />
                        <div className="flex-1">
                          <Typography
                            variant="sm"
                            weight="semibold"
                            className="line-clamp-2"
                          >
                            {item.title}
                          </Typography>
                        </div>
                      </div>
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

export default HomeMunSpecial;

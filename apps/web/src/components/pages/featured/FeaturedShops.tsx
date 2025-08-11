import React from 'react';
import { Card } from '@repo/ui/components/card';
import Heading from '@repo/ui/components/heading';
import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon } from 'lucide-react';
import { Button } from '@repo/ui/components/button';
import Rating from '@repo/ui/components/rating';
import Typography from '@repo/ui/components/typography';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';

const FeaturedShops = () => {
  return (
    <section>
      <div className="space-y-6">
        <Heading as="h4" className="text-center">
          Featured Shops
        </Heading>
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <Card className="p-3 gap-0 relative transition-all hover:shadow-4">
              <div className="space-y-2">
                <div className="grid gap-1 grid-cols-2">
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/01.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/02.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/03.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/04.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="/shop/dfdlkf" className="block">
                    <div className="flex items-center gap-2">
                      <Image
                        src={'/images/featured/17.jpg'}
                        alt={''}
                        width={36}
                        height={36}
                        className="size-9 rounded-full object-cover"
                      />
                      <div>
                        <Typography
                          weight="bold"
                          variant="xs"
                          className="underline"
                        >
                          CoriBlackWolfCo
                        </Typography>
                        <div className="flex items-center gap-2">
                          <Rating value={5} />
                          <span className="text-xs">(1,466)</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full ml-auto hover:shadow-4"
                  >
                    <HeartIcon />
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="p-3 gap-0 relative transition-all hover:shadow-4">
              <div className="space-y-2">
                <div className="grid gap-1 grid-cols-2">
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/05.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/06.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/07.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/08.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="/shop/dfdlkf" className="block">
                    <div className="flex items-center gap-2">
                      <Image
                        src={'/images/featured/18.jpg'}
                        alt={''}
                        width={36}
                        height={36}
                        className="size-9 rounded-full object-cover"
                      />
                      <div>
                        <Typography
                          weight="bold"
                          variant="xs"
                          className="underline"
                        >
                          Flossandfable
                        </Typography>
                        <div className="flex items-center gap-2">
                          <Rating value={5} />
                          <span className="text-xs">(7,511)</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full ml-auto hover:shadow-4"
                  >
                    <HeartIcon />
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="p-3 gap-0 relative transition-all hover:shadow-4">
              <div className="space-y-2">
                <div className="grid gap-1 grid-cols-2">
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/09.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/10.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/11.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/12.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="/shop/dfdlkf" className="block">
                    <div className="flex items-center gap-2">
                      <Image
                        src={'/images/featured/19.jpg'}
                        alt={''}
                        width={36}
                        height={36}
                        className="size-9 rounded-full object-cover"
                      />
                      <div>
                        <Typography
                          weight="bold"
                          variant="xs"
                          className="underline"
                        >
                          ThatMomWithALaser
                        </Typography>
                        <div className="flex items-center gap-2">
                          <Rating value={5} />
                          <span className="text-xs">(905)</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full ml-auto hover:shadow-4"
                  >
                    <HeartIcon />
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="p-3 gap-0 relative transition-all hover:shadow-4">
              <div className="space-y-2">
                <div className="grid gap-1 grid-cols-2">
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/13.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/14.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/15.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                  <Link
                    href={`/listing/dfdf/dfdlkj`}
                    className="transition-all hover:opacity-80"
                  >
                    <Image
                      src={'/images/featured/16.jpg'}
                      alt={''}
                      width={200}
                      height={200}
                      blurDataURL={rgbDataURL(1)}
                      placeholder="blur"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="/shop/dfdlkf" className="block">
                    <div className="flex items-center gap-2">
                      <Image
                        src={'/images/featured/20.jpg'}
                        alt={''}
                        width={36}
                        height={36}
                        className="size-9 rounded-full object-cover"
                      />
                      <div>
                        <Typography
                          weight="bold"
                          variant="xs"
                          className="underline"
                        >
                          BeenThereTaughtThat
                        </Typography>
                        <div className="flex items-center gap-2">
                          <Rating value={5} />
                          <span className="text-xs">(6,808)</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full ml-auto hover:shadow-4"
                  >
                    <HeartIcon />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShops;

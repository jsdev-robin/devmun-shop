import React from 'react';
import { Button } from '@repo/ui/components/button';
import Heading from '@repo/ui/components/heading';
import Typography from '@repo/ui/components/typography';
import Image from 'next/image';
import Link from 'next/link';
import ApiError from '@repo/ui/common/api-error';
import { Skeleton } from '@repo/ui/components/skeleton';

const HomeHero = () => {
  const isLoading = false;
  const isError = false;
  return (
    <section>
      <div className="container">
        <div className="lg:grid lg:gap-6 lg:grid-cols-3">
          {isError ? (
            <ApiError />
          ) : isLoading ? (
            <React.Fragment>
              <Skeleton className="rounded-xl h-[500px] sm:h-[400px] lg:col-span-2" />
              <Skeleton className="rounded-xl h-[400px] hidden lg:block lg:col-span-1" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="lg:col-span-2">
                <article className="overflow-hidden transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background relative rounded-xl bg-[#8c89f0] hover:shadow-4">
                  <Link
                    href="/featured/hub/home-and-school"
                    className="absolute inset-0 w-full h-full z-10"
                  />
                  <div className="h-full flex flex-col sm:flex-row">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-balance text-center space-y-6 p-6">
                        <div className="space-y-2">
                          <Heading as="h2" className="font-merriweather">
                            Love can&rsquo;t be late
                          </Heading>
                          <Typography variant="lg" weight="semibold">
                            Find gifts that ship in 3 days or less.*
                          </Typography>
                        </div>
                        <Button
                          size="lg"
                          className="rounded-full absolute bottom-6 z-10 left-1/2 -translate-x-1/2 sm:static sm:-translate-x-0"
                        >
                          Shop Valentine&rsquo;s Day
                        </Button>
                        <Typography variant="xs">
                          *Orders processed in up to 3 business days. Actual
                          delivery times will vary.
                        </Typography>
                      </div>
                    </div>
                    <div className="grow relative h-[400px] clip-50 sm:clip-100">
                      <Image
                        src="/images/products/04.jpg"
                        alt="hero"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-xl"
                        priority
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div className="hidden lg:block lg:col-span-1">
                <article className="overflow-hidden transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background relative rounded-xl flex flex-col justify-end bg-[linear-gradient(#0e0e0e00_48%,#0e0e0eab_100%)] h-full hover:shadow-4">
                  <Link
                    href="/featured/hub/home-and-school"
                    className="absolute inset-0 w-full h-full z-10"
                  />
                  <Image
                    src="/images/products/05.jpg"
                    alt="hero"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-xl -z-10"
                    priority
                  />

                  <div className="absolute left-6 bottom-6 w-full">
                    <Heading as="h5" className="text-background">
                      Home Decor
                    </Heading>
                    <Typography weight="bold" textColor="white">
                      Shop now
                    </Typography>
                  </div>
                </article>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

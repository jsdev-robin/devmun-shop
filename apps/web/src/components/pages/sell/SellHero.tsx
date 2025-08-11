import React from 'react';
import { buttonVariants } from '@repo/ui/components/button';
import Heading from '@repo/ui/components/heading';
import { cn } from '@repo/ui/libs/utils';
import Link from 'next/link';

const SellHero = () => {
  return (
    <section className="bg-[url('/images/pattern/sell-hero-bg.jpg')] bg-[100%_auto] bg-no-repeat py-40 -mt-2 lg:-mt-3">
      <div className="container max-w-3xl">
        <div className="text-center space-y-6">
          <Heading as="h3" className="font-normal text-white">
            Millions of shoppers can’t wait to see what you have in store
          </Heading>
          <Link
            href="http://localhost:3001/sign-in"
            className={cn(buttonVariants({ size: 'lg' }), 'rounded-full')}
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SellHero;

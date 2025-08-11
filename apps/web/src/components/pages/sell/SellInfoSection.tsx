'use client';

import React from 'react';
import Heading from '@repo/ui/components/heading';
import Typography from '@repo/ui/components/typography';
import { BookOpen, Calculator, Tag } from 'lucide-react';
import { PinContainer } from '@repo/ui/components/three-d-pin';
import { buttonVariants } from '@repo/ui/components/button';
import { cn } from '@repo/ui/libs/utils';

const SellInfoSection = () => {
  return (
    <section>
      <div className="container max-w-4xl">
        <div className="space-y-6">
          <nav className="max-w-lg mx-auto">
            <ul className="flex items-center justify-between">
              {['Fees', 'Tools', 'Support', 'Stories', 'Selling', 'FAQ'].map(
                (item, i) => (
                  <li key={i}>
                    <a href={`#${item}`} className="underline text-sm">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <Heading as="h5" className="text-center">
            Join the creative marketplace where millions of shoppers spend
            billions each year purchasing directly from creative entrepreneurs
            like you.
          </Heading>
          <div className="grid gap-6 grid-cols-1 md:gap-10 md:grid-cols-3">
            <article className="text-center space-y-3">
              <div className="bg-sky-500/25 size-36 rounded-full flex items-center justify-center mx-auto">
                <Tag className="size-18" />
              </div>
              <div className="space-y-2">
                <Heading as="h6">Great value</Heading>
                <Typography variant="sm" textColor="muted">
                  List your first item for just 0.20 USD – you only pay
                  transaction, payment processing, and offsite advertising fees
                  when you make a
                </Typography>
              </div>
            </article>
            <article className="text-center space-y-3">
              <div className="bg-sky-500/25 size-36 rounded-full flex items-center justify-center mx-auto">
                <Calculator className="size-18" />
              </div>
              <div className="space-y-2">
                <Heading as="h6">Powerful tools</Heading>
                <Typography variant="sm" textColor="muted">
                  Our tools and services make it easy to manage, promote and
                  grow your business
                </Typography>
              </div>
            </article>
            <article className="text-center space-y-3">
              <div className="bg-sky-500/25 size-36 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="size-18" />
              </div>
              <div className="space-y-2">
                <Heading as="h6">Support and education</Heading>
                <Typography variant="sm" textColor="muted">
                  Reach out to Etsy support specialists anytime you need a hand,
                  and get tips on running a successful shop in our Seller
                  Handbook.
                </Typography>
              </div>
            </article>
          </div>
          <div className="block w-[20rem] h-[20rem] mx-auto">
            <PinContainer title="Sell on Mun">
              <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] p-4">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  Start selling today
                </h3>
                <a
                  href="http://localhost:3001/sign-in"
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-full')}
                >
                  Open your Mun shop
                </a>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellInfoSection;

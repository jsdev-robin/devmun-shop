import React from 'react';
import MainLogo from '@repo/ui/common/main-logo';
import Heading from '@repo/ui/components/heading';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';
import { cn } from '@repo/ui/libs/utils';
import { buttonVariants } from '@repo/ui/components/button';

const OnboardingScreener = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:h-screen">
      <div className="bg-[url('/images/background/shop.jpg')] bg-[100%_auto] bg-no-repeat p-4 h-80 md:h-auto">
        <MainLogo className="text-black" />
      </div>
      <div className="h-full overflow-y-auto p-4">
        <div className="h-full flex flex-col justify-center gap-6">
          <Heading as="h2" className="font-merriweather font-normal">
            Now time for the fun part!
          </Heading>
          <Typography variant="lg">
            We’ll walk you through creating your shop and filling it with items.
          </Typography>
          <div>
            <Link
              href="/your/shops/me/onboarding/preferences"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-full')}
            >
              Start your shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingScreener;

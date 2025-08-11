import React from 'react';
import MainLogo from '@repo/ui/common/main-logo';
import Heading from '@repo/ui/components/heading';
import Typography from '@repo/ui/components/typography';
import Link from 'next/link';
import { cn } from '@repo/ui/libs/utils';
import { buttonVariants } from '@repo/ui/components/button';

const OnboardingWelcome = () => {
  const steps = [
    {
      title: 'Make your shop uniquely yours',
      description:
        'We’ll walk you through every step, from choosing a name to creating your first listing.',
    },
    {
      title: 'Tell us a bit about yourself',
      description:
        'Share some info and set up how you’ll get paid with Mun Payments.',
    },
    {
      title: 'Open your shop – and pay a one-time USD 19 set-up fee',
      description:
        'This fee helps us invest in support for new sellers and enhanced security checks to protect our trusted marketplace.',
    },
    {
      title: 'Get after your first sale!',
      description:
        'We’ll give you tons of tips to help you start selling and grow your business in no time.',
    },
  ];

  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[url('/images/background/seller.jpg')] bg-[100%_auto] bg-no-repeat p-4">
        <MainLogo className="text-black" />
      </div>
      <div className="h-full overflow-y-auto p-4">
        <div className="space-y-6">
          <Heading as="h5" className="font-merriweather">
            Welcome, Shoref!
          </Heading>
          <Typography>
            We’re so excited for you to join our marketplace for unique and
            creative goods, where special items with a human touch shine. Ready
            to bring your shop to life?
          </Typography>
          <ol className="relative border-s-3 border-orange-500 ml-4">
            {steps.map((step, index) => (
              <li key={index} className="mb-6 ms-6 space-y-2">
                <span className="absolute flex items-center justify-center w-4.5 h-4.5 bg-orange-500 rounded-full -start-2.5 ring-2 ring-background" />
                <Heading as="h6" className="font-roboto">
                  {step.title}
                </Heading>
                <Typography className="font-poppins">
                  {step.description}
                </Typography>
              </li>
            ))}
          </ol>
          <Link
            href="/your/shops/me/onboarding/screener"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'rounded-full max-w-sm w-full',
            )}
          >
            Let&apos;s do this!
          </Link>
          <Typography>
            By clicking &quot;Let’s do this&quot; and opening an Mun shop,
            you’re agreeing to Mun’s Terms of Use, including our Seller Policy,
            Mun Payments Policy, and Privacy Policy.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default OnboardingWelcome;

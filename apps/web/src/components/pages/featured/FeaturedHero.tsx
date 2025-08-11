import React from 'react';
import Heading from '@repo/ui/components/heading';
import Typography from '@repo/ui/components/typography';

const FeaturedHero = () => {
  return (
    <section className="bg-lime-100 -my-4 lg:-my-6 relative">
      <div className="container">
        <div className="py-10 text-center space-y-4">
          <Heading as="h2" className="font-merriweather font-normal">
            Seller Deals!
          </Heading>
          <Heading as="h6">
            These small shops are here to help you save.
          </Heading>
          <Typography variant="sm" className="mb-4">
            While supplies last. Offer and pricing subject to change by sellers.
            Etsy makes no representations regarding availability. See shops for
            terms.
          </Typography>
        </div>
      </div>
      <div className="bg-lime-100 absolute w-full min-h-10 md:min-h-20" />
    </section>
  );
};

export default FeaturedHero;

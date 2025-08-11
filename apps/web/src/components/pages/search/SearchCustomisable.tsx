import React from 'react';
import Heading from '@repo/ui/components/heading';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@repo/ui/components/typography';

const customIdeas = [
  {
    image: '/images/search/57.jpg',
    label: 'personalized kids crafts',
  },
  {
    image: '/images/search/58.jpg',
    label: 'custom ceramic name kit',
  },
  {
    image: '/images/search/25.jpg',
    label: 'custom craft kit for parties',
  },
  {
    image: '/images/search/55.jpg',
    label: 'personalized paint your own pottery',
  },
  {
    image: '/images/search/15.jpg',
    label: 'custom craft kit for parties',
  },
  {
    image: '/images/search/32.jpg',
    label: 'custom craft kit for parties',
  },
];

const SearchCustomisable = () => {
  return (
    <section>
      <div className="container">
        <div className="space-y-6">
          <Heading as="h6" className="text-center">
            Shop customisable ideas
          </Heading>
          <div className="container max-w-6xl mx-auto">
            <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-10">
              {customIdeas.map((item, index) => (
                <article
                  key={index}
                  className="rounded-xl relative text-center group"
                >
                  <Link
                    href="/search?q=ldfldj"
                    className="absolute inset-0 w-full h-full z-10"
                  />
                  <div className="aspect-square mb-2">
                    <Image
                      src={item.image}
                      alt="/"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover rounded transition-all group-hover:shadow-1"
                    />
                  </div>
                  <Typography
                    variant="sm"
                    weight="semibold"
                    className="group-hover:underline"
                  >
                    {item.label}
                  </Typography>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchCustomisable;

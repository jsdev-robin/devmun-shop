import React from 'react';
import Heading from '@repo/ui/components/heading';
import { Card } from '@repo/ui/components/card';
import Image from 'next/image';
import { Button } from '@repo/ui/components/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface DiscoverItem {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
}

const DISCOVER_ITEMS: DiscoverItem[] = [
  {
    id: '1',
    title: 'Gifts for teachers',
    imageSrc: '/images/featured/21.jpg',
    href: '/gift-mode/teachers',
  },
  {
    id: '2',
    title: 'Gifts for Kids',
    imageSrc: '/images/featured/22.jpg',
    href: '/gift-mode/kids',
  },
  {
    id: '3',
    title: 'The Personalisation Shop',
    imageSrc: '/images/featured/23.jpg',
    href: '/gift-mode/personalisation',
  },
  {
    id: '4',
    title: 'Storage and Organisation',
    imageSrc: '/images/featured/24.jpg',
    href: '/gift-mode/storage',
  },
];

const FeaturedDiscover = () => {
  return (
    <section>
      <div className="container">
        <div className="space-y-6">
          <Heading as="h4" className="text-center font-semibold">
            Discover more
          </Heading>
          <div className="grid gap-y-6 gap-x-10 grid-cols-1 md:grid-cols-2">
            {DISCOVER_ITEMS.map((item) => (
              <Card
                key={item.id}
                className="h-48 relative overflow-hidden p-0 gap-0 !shadow-2 hover:!shadow-4"
              >
                <Link
                  href={item.href}
                  className="absolute inset-0 w-full h-full z-10"
                  aria-label={`Discover ${item.title}`}
                />
                <div className="flex h-full items-center gap-6">
                  <div className="w-32 h-full lg:w-44">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      priority={item.id === '1' || item.id === '2'}
                    />
                  </div>
                  <div className="flex-1 space-y-6">
                    <Heading as="h5" className="font-merriweather font-light">
                      {item.title}
                    </Heading>
                    <Button variant="ghost" className="!px-0">
                      Shop now <ArrowRight />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDiscover;

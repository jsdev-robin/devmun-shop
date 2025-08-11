'use client';

import React from 'react';
import Heading from '@repo/ui/components/heading';
import {
  Calendar,
  Package,
  Truck,
  MapPin,
  Handshake,
  Leaf,
  Heart,
} from 'lucide-react';
import { Button } from '@repo/ui/components/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@repo/ui/components/tooltip';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';
import Image from 'next/image';
import { productDescription } from '../data/dummyDescription';
import Typography from '@repo/ui/components/typography';

const ProductInfo = () => {
  return (
    <div className="order-1 lg:col-span-2 lg:order-2">
      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="text-base font-semibold cursor-pointer [&>svg]:stroke-2 [&>svg]:size-5 mun-card py-1 before:rounded-full before:shadow-none before:bg-muted hover:no-underline">
            Item details
          </AccordionTrigger>
          <AccordionContent className="py-6">
            <div dangerouslySetInnerHTML={productDescription} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="text-base font-semibold cursor-pointer [&>svg]:stroke-2 [&>svg]:size-5 mun-card py-1 before:rounded-full before:shadow-none before:bg-muted hover:no-underline">
            Delivery and return policies
          </AccordionTrigger>
          <AccordionContent className="py-6">
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Calendar className="size-5" />
                <Typography variant="body1">
                  Order today to get by{' '}
                  <Tooltip>
                    <TooltipTrigger>
                      <strong className="border-b-2 border-foreground border-dashed">
                        30 Jul-15 Aug
                      </strong>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="w-60">
                      <p>
                        Your order should arrive by this date if you buy today.
                        To calculate an estimated delivery date you can count
                        on, we look at things like the carrier&apos;s latest
                        transit times, the seller&apos;s processing time and
                        dispatch history, and where the order is dispatched from
                        and delivered to.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </Typography>
              </li>
              <li className="flex items-center gap-2">
                <Package className="size-5" />
                <Typography variant="body1">
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="border-b-2 border-foreground border-dashed">
                        Returns & exchanges accepted
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="w-60">
                      <p>
                        Buyers are responsible for return postage costs. If the
                        item is not returned in its original condition, the
                        buyer is responsible for any loss in value.
                      </p>
                    </TooltipContent>
                  </Tooltip>{' '}
                  within 14 days
                </Typography>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="size-5" />
                <Typography variant="body1">
                  Delivery cost: <strong>USD 18.23</strong>
                </Typography>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-5" />
                <Typography variant="body1">
                  Dispatched from: <strong>Manikganj</strong>
                </Typography>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="text-base font-semibold cursor-pointer [&>svg]:stroke-2 [&>svg]:size-5 mun-card py-1 before:rounded-full before:shadow-none before:bg-muted hover:no-underline">
            Do you know?
          </AccordionTrigger>
          <AccordionContent className="py-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Handshake className="size-10" />
                <div className="flex-1">
                  <Typography variant="body2" weight="semibold">
                    Mun Purchase Protection
                  </Typography>
                  <Typography variant="body2" textColor="muted">
                    Shop confidently on Mun knowing if something goes wrong with
                    an order, we&apos;ve got your back for all eligible
                    purchases — see programme terms
                  </Typography>
                </div>
              </div>
              <div className="bg-sky-200 p-4 flex gap-2 rounded-md">
                <Leaf />
                <Typography variant="xs">
                  Mun offsets carbon emissions from delivery and packaging on
                  this purchase.
                </Typography>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="text-base font-semibold cursor-pointer [&>svg]:stroke-2 [&>svg]:size-5 mun-card py-1 before:rounded-full before:shadow-none before:bg-muted hover:no-underline">
            Meet you sellers
          </AccordionTrigger>
          <AccordionContent className="py-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="size-20 aspect-square">
                  <Image
                    src="/images/shop/01.jpg"
                    alt=""
                    width={80}
                    height={80}
                    className="size-full object-cover"
                    priority
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <Heading as="h5" className="font-light font-merriweather">
                    Iveta
                  </Heading>
                  <Typography variant="xs">
                    <span>Owner of </span>
                    <Link href="/shop/okkembroidery" className="underline">
                      Okkembroidery
                    </Link>
                  </Typography>
                  <Button variant="ghost" className="rounded-full -ml-4">
                    <Heart />
                    Follow shop
                  </Button>
                </div>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full"
              >
                Message veta
              </Button>
              <Typography
                variant="xs"
                textColor="muted"
                className="text-center"
              >
                This seller usually responds{' '}
                <strong>within a few hours.</strong>
              </Typography>
              <Button variant="ghost" size="lg" className="rounded-full">
                View seller details
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductInfo;

'use client';

import React from 'react';
import Heading from '@repo/ui/components/heading';
import Rating from '@repo/ui/components/rating';
import { ChevronLeftIcon, ChevronRightIcon, Check, Star } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/avatar';
import { Separator } from '@repo/ui/components/separator';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@repo/ui/components/pagination';
import Typography from '@repo/ui/components/typography';
import SelectInput from '@repo/ui/components/select-input';

const ProductReview = () => {
  return (
    <div className="order-2 lg:col-span-3 lg:order-1">
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="size-5 fill-yellow-500 stroke-yellow-500" />
              <Heading as="h6">5 out of 5</Heading>
            </div>
            <Heading as="h6" className="font-light text-muted-foreground">
              (247 reviews)
            </Heading>
          </div>
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <div className="border-2 border-yellow-500 size-10 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">5/5</span>
              </div>
              <span className="text-xs">
                Item <br />
                quality
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="border-2 border-yellow-500 size-10 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">5/5</span>
              </div>
              <span className="text-xs">Delivery</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="border-2 border-yellow-500 size-10 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">5/5</span>
              </div>
              <span className="text-xs">
                Customer <br /> service
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Heading className="text-base font-semibold" asChild>
            Reviews for this shop
          </Heading>
          <SelectInput
            className="rounded-full w-auto"
            options={[
              { label: 'Suggested', value: 'suggested' },
              { label: 'Most recent', value: 'most_recent' },
              { label: 'Highest Rating', value: 'highest_rating' },
              { label: 'Lowest Rating', value: 'lowest_rating' },
            ]}
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Rating value={5} displayMode="stars" size={20} />
                  <Typography
                    variant="body1"
                    weight="semibold"
                    textColor="secondary"
                  >
                    5
                  </Typography>
                </div>
                <Separator orientation="vertical" className="block !h-4" />
                <Typography
                  variant="xs"
                  textColor="muted"
                  className="flex items-center"
                >
                  <Check className="stroke-green-500 size-4" /> Recommends
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="size-5">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/12.jpg" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <Typography variant="body2" weight="semibold">
                  Mia Carter
                </Typography>
                <Separator orientation="vertical" className="block !h-4" />
                <Typography variant="body2">25 Jun, 2025</Typography>
              </div>
            </div>
            <Typography variant="sm">
              Absolutely in love with the quality! 😍💖 Packaging was so
              thoughtful and the item exceeded my expectations! 🌟 Fast shipping
              and the seller was super kind 🙌 Will definitely order again! 🎁✨
            </Typography>
          </div>
          <Separator />
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="/search?q=1"
                className="rounded-full bg-muted"
              >
                <ChevronLeftIcon />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-full bg-muted">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="rounded-full bg-muted"
                isActive
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-full bg-muted">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-full bg-muted">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-full bg-muted">
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="rounded-full bg-muted">
                <ChevronRightIcon />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductReview;

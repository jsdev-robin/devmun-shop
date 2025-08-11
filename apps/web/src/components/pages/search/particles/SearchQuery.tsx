'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@repo/ui/components/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/select';
import Typography from '@repo/ui/components/typography';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import SearchQueryForm from './SearchQueryForm';

const categories = [
  'Home Decor',
  'Toys & Games',
  'Custom Gifts',
  'Wall Art',
  'Stationery',
  'Accessories',
  'Craft Supplies',
  'Party Supplies',
  'Pet Accessories',
  'DIY Kits',
];

const SearchQuery = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex items-center justify-between gap-4 overflow-x-hidden">
      <Button
        size="icon"
        variant="ghost"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft />
      </Button>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        slidesPerGroup={1}
        freeMode={true}
        grabCursor={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className="!w-auto">
          <SearchQueryForm />
        </SwiperSlide>
        {categories.map((item, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <Button
              className="rounded-full px-4 py-2 whitespace-nowrap"
              variant="outline"
            >
              {item}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        size="icon"
        variant="ghost"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight />
      </Button>

      <div className="flex items-center gap-2 whitespace-nowrap">
        <Typography variant="sm" textColor="muted">
          1,000+ items
        </Typography>
        <Select>
          <SelectTrigger className="rounded-full">
            <SelectValue placeholder="Most Recent" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Most relevant">Most relevant</SelectItem>
              <SelectItem value="Price: low to high">
                Price: low to high
              </SelectItem>
              <SelectItem value="Price: high to low">
                Price: high to low
              </SelectItem>
              <SelectItem value="Top reviews">Top reviews</SelectItem>
              <SelectItem value="Newest">Newest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchQuery;

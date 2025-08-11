import React from 'react';
import Heading from '@repo/ui/components/heading';
import { Button } from '@repo/ui/components/button';
import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon, ArrowRight } from 'lucide-react';
import { Badge } from '@repo/ui/components/badge';
import Typography from '@repo/ui/components/typography';
import Rating from '@repo/ui/components/rating';
import { Plus } from 'lucide-react';
import SearchQuery from './particles/SearchQuery';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@repo/ui/components/pagination';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';
import SellerBadge from '../../ui/product/SellerBadge';

const data = [
  {
    title:
      'Name Puzzle, Christmas Personalized Gift for Baby and Toddler, Patterned Flower Puzzle, Natural Wooden Puzzle, First Birthday Gift',
    price: '18.00',
    originalPrice: '20.00',
    discount: '10%',
    rating: 28407,
    ratingAvg: 4.8,
    shop: 'WoodenJoyCrafts',
    shipping: null,
    img: {
      src: '/images/hub/01.jpg',
      alt: 'Personalized Name Sign for Kids Room',
    },
  },
  {
    title: 'Personalized 3D Record Gift Keepsake',
    price: '20.00',
    originalPrice: '25.00',
    discount: '20%',
    rating: 2447,
    ratingAvg: 4.7,
    shop: 'RecordMomentsArt',
    shipping: null,
    img: {
      src: '/images/hub/02.jpg',
      alt: 'Personalized 3D Record Gift Keepsake',
    },
  },
  {
    title: 'The Blue Flowers Cover - Art Design',
    price: '12.00',
    originalPrice: null,
    discount: null,
    rating: 1848,
    ratingAvg: 4.5,
    shop: 'DezireStudio',
    shipping: null,
    img: {
      src: '/images/hub/03.jpg',
      alt: 'The Blue Flowers Cover - Art Design',
    },
  },
  {
    title: 'Blush Sculptural Ceramic Vase',
    price: '36.00',
    originalPrice: null,
    discount: null,
    rating: 524,
    ratingAvg: 4.2,
    shop: 'samikshaCeramics',
    shipping: null,
    img: { src: '/images/hub/04.jpg', alt: 'Blush Sculptural Ceramic Vase' },
  },
  {
    title: 'Miniature Tea Set with Blush Red Glaze',
    price: '12.87',
    originalPrice: '14.30',
    discount: '10%',
    rating: 14973,
    ratingAvg: 4.9,
    shop: 'CoolMiniCrafts',
    shipping: 'Free shipping',
    img: {
      src: '/images/hub/05.jpg',
      alt: 'Miniature Tea Set with Blush Red Glaze',
    },
  },
  {
    title: 'Oyster Shell Ceramic Dish Jewelry Tray',
    price: '20.00',
    originalPrice: '25.00',
    discount: '20%',
    rating: 21198,
    ratingAvg: 4.6,
    shop: 'ClayOceanic',
    shipping: null,
    img: {
      src: '/images/hub/06.jpg',
      alt: 'Oyster Shell Ceramic Dish Jewelry Tray',
    },
  },
  {
    title: 'Mini Gift Basket Spa Kit 8pc',
    price: '12.80',
    originalPrice: '16.00',
    discount: '20%',
    rating: 17242,
    ratingAvg: 4.7,
    shop: 'TinyTreatsBox',
    shipping: null,
    img: { src: '/images/hub/07.jpg', alt: 'Mini Gift Basket Spa Kit 8pc' },
  },
  {
    title: 'Hand-painted Cute Floral Ceramic Mug',
    price: '22.00',
    originalPrice: null,
    discount: null,
    rating: 2358,
    ratingAvg: 4.4,
    shop: 'MugArtByLena',
    shipping: null,
    img: {
      src: '/images/hub/08.jpg',
      alt: 'Hand-painted Cute Floral Ceramic Mug',
    },
  },
  {
    title: 'Felt Little Town Play Mat & Decor',
    price: '38.00',
    originalPrice: null,
    discount: null,
    rating: 4152,
    ratingAvg: 4.3,
    shop: 'FeltieWorld',
    shipping: null,
    img: {
      src: '/images/hub/09.jpg',
      alt: 'Felt Little Town Play Mat & Decor',
    },
  },
  {
    title: 'Custom Birth Info Hoop Embroidery',
    price: '48.00',
    originalPrice: null,
    discount: null,
    rating: 2957,
    ratingAvg: 4.6,
    shop: 'ThreadedMemory',
    shipping: 'Free shipping',
    img: {
      src: '/images/hub/10.jpg',
      alt: 'Custom Birth Info Hoop Embroidery',
    },
  },
  {
    title: 'Rainbow Crayon Set for Toddlers',
    price: '18.99',
    originalPrice: '22.00',
    discount: '15%',
    rating: 7185,
    ratingAvg: 4.8,
    shop: 'ColorMyPlay',
    shipping: 'Free shipping',
    img: { src: '/images/hub/11.jpg', alt: 'Rainbow Crayon Set for Toddlers' },
  },
  {
    title: 'Custom Wooden Photo Frame Gift',
    price: '35.00',
    originalPrice: null,
    discount: null,
    rating: 3012,
    ratingAvg: 4.5,
    shop: 'GiftedMemoryCo',
    shipping: null,
    img: { src: '/images/hub/12.jpg', alt: 'Custom Wooden Photo Frame Gift' },
  },
  {
    title: 'Baby Name Wall Felt Decor - LEO',
    price: '25.00',
    originalPrice: null,
    discount: null,
    rating: 1404,
    ratingAvg: 4.2,
    shop: 'WoollyLetters',
    shipping: null,
    img: { src: '/images/hub/13.jpg', alt: 'Baby Name Wall Felt Decor - LEO' },
  },
  {
    title: 'Gold Resin Giraffe Nursery Decor',
    price: '16.00',
    originalPrice: null,
    discount: null,
    rating: 1112,
    ratingAvg: 4.1,
    shop: 'JungleTotsDecor',
    shipping: null,
    img: { src: '/images/hub/14.jpg', alt: 'Gold Resin Giraffe Nursery Decor' },
  },
  {
    title: 'Retro Kids Room Cars Wall Frame',
    price: '14.50',
    originalPrice: '18.00',
    discount: '20%',
    rating: 907,
    ratingAvg: 4.0,
    shop: 'ToyWorldPrints',
    shipping: null,
    img: { src: '/images/hub/15.jpg', alt: 'Retro Kids Room Cars Wall Frame' },
  },
  {
    title: 'Floral Alphabet Nursery Print',
    price: '12.00',
    originalPrice: null,
    discount: null,
    rating: 1724,
    ratingAvg: 4.6,
    shop: 'PetalType',
    shipping: null,
    img: { src: '/images/hub/16.jpg', alt: 'Floral Alphabet Nursery Print' },
  },
  {
    title: 'Handmade Duck Plush Toy',
    price: '27.00',
    originalPrice: '30.00',
    discount: '10%',
    rating: 3100,
    ratingAvg: 4.7,
    shop: 'SoftCritterToys',
    shipping: null,
    img: { src: '/images/hub/17.jpg', alt: 'Handmade Duck Plush Toy' },
  },
  {
    title: "Green Linen Casual Men's Shirt",
    price: '45.00',
    originalPrice: '55.00',
    discount: '18%',
    rating: 1208,
    ratingAvg: 3.9,
    shop: 'BeachLookMenswear',
    shipping: 'Free shipping',
    img: { src: '/images/hub/18.jpg', alt: "Green Linen Casual Men's Shirt" },
  },
  {
    title: 'Watercolor House Portrait Custom',
    price: '46.00',
    originalPrice: null,
    discount: null,
    rating: 6208,
    ratingAvg: 4.9,
    shop: 'PaintedHomeStudio',
    shipping: 'Free shipping',
    img: { src: '/images/hub/19.jpg', alt: 'Watercolor House Portrait Custom' },
  },
  {
    title: 'Custom Handkerchief with Embroidery',
    price: '19.00',
    originalPrice: '23.00',
    discount: '17%',
    rating: 2738,
    ratingAvg: 4.3,
    shop: 'ElegantStitchery',
    shipping: 'Free shipping',
    img: {
      src: '/images/hub/20.jpg',
      alt: 'Custom Handkerchief with Embroidery',
    },
  },
];

const SearchProducts = () => {
  return (
    <section>
      <div className="container">
        <div className="space-y-6">
          <SearchQuery />
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map((item, i) => (
                  <article key={i} className="rounded group">
                    <div className="relative">
                      <Link
                        href={`/listing/${i}/${item.title}`}
                        className="absolute inset-0 w-full h-full z-10"
                      />
                      <div className="relative">
                        <Image
                          src={item.img.src}
                          alt={item.img.alt}
                          width={600}
                          height={600}
                          blurDataURL={rgbDataURL(i)}
                          placeholder="blur"
                          loading="lazy"
                          className="w-full h-full object-cover rounded transition-all group-hover:shadow-1"
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute top-2 right-2 translate-y-4 rounded-full transition-all z-10 shadow-2 opacity-0 hover:shadow-4 group-hover:opacity-100 group-hover:translate-y-0 max-xl:touch:opacity-100 max-xl:touch:translate-y-0"
                        >
                          <HeartIcon />
                        </Button>
                        <Badge
                          variant="secondary"
                          className="absolute left-2 border-foreground font-semibold rounded-full bottom-2 md:bottom-auto md:top-2"
                        >
                          Mun&apos;s Pick
                        </Badge>
                      </div>
                      <div className="py-2">
                        <div className="flex items-center gap-0 sm:gap-2">
                          <Typography
                            variant="sm"
                            className="line-clamp-2 sm:line-clamp-1"
                          >
                            {item.title}
                          </Typography>
                          <Rating
                            value={Number(item.rating)}
                            average={item.ratingAvg}
                            displayMode="compact"
                          />
                        </div>
                        <SellerBadge shop={item.shop} />
                        <div className="flex items-center flex-wrap mt-1 md:gap-2">
                          <Heading as="h6">USD {item.price}</Heading>
                          <div className="flex items-center gap-2">
                            {item.originalPrice && (
                              <span>
                                <del className="text-muted-foreground text-sm">
                                  USD {item.originalPrice}
                                </del>
                              </span>
                            )}
                            {item.discount && (
                              <Typography variant="xs" textColor="muted">
                                ({item.discount} off)
                              </Typography>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="items-center flex-wrap gap-2 hidden sm:flex">
                        <Button
                          variant="outline"
                          className="rounded-full z-10 hover:shadow-4"
                        >
                          <Plus />
                          Add to basket
                        </Button>
                        <Link
                          href="/search?q=dfjdlkfdlk"
                          className="flex items-center gap-2 text-xs font-semibold z-20 group/more"
                        >
                          More like this
                          <span className="transition-all group-hover/more:translate-x-1">
                            <ArrowRight size={14} strokeWidth={3} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default SearchProducts;

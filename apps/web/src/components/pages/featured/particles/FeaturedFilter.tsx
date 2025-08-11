import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@repo/ui/components/sheet';
import { Button } from '@repo/ui/components/button';
import { SlidersHorizontal } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Typography from '@repo/ui/components/typography';
import { Checkbox } from '@repo/ui/components/checkbox';
import { Radio } from '@repo/ui/components/radio';
import { Label } from '@repo/ui/components/label';
import Link from 'next/link';

const FeaturedFilter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <SlidersHorizontal /> Filters
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="min-h-svh p-6 overflow-y-auto sm:max-w-lg md:p-10"
      >
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
        <div className="space-y-4">
          <div className="space-y-3">
            <Typography variant="sm" weight="bold">
              Special offers
            </Typography>
            <div className="flex gap-2 flex-col items-start">
              <Link
                href="/search?special-offers=free-delivery"
                className="inline-flex items-center gap-2"
              >
                <Checkbox readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  FREE delivery
                </Label>
              </Link>
              <Link
                href="/search?special-offers=on-sale"
                className="inline-flex items-center gap-2"
              >
                <Checkbox readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  On sale
                </Label>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <Typography variant="sm" weight="bold">
              Item type
            </Typography>
            <div className="flex gap-2 flex-col items-start">
              <Link
                href="/search?item-type=all"
                className="inline-flex items-center gap-2"
              >
                <Radio readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  All items
                </Label>
              </Link>
              <Link
                href="/search?item-type=vintage"
                className="inline-flex items-center gap-2"
              >
                <Radio readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  Vintage
                </Label>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <Typography variant="sm" weight="bold">
              Price ($)
            </Typography>
            <div className="flex gap-2 flex-col items-start">
              <Link
                href="/search?price=[0, 500]"
                className="inline-flex items-center gap-2"
              >
                <Radio readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  Any price
                </Label>
              </Link>
              <Link
                href="/search?price=[0, 25]"
                className="inline-flex items-center gap-2"
              >
                <Radio readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  Under USD 25
                </Label>
              </Link>
              <Link
                href="/search?price=[25, 50]"
                className="inline-flex items-center gap-2"
              >
                <Radio readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  USD 25 to USD 50
                </Label>
              </Link>
              <Link
                href="/search?price=[50, 100]"
                className="inline-flex items-center gap-2"
              >
                <Radio readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  USD 50 to USD 100
                </Label>
              </Link>
              <Link
                href="/search?price=[100, 500]"
                className="inline-flex items-center gap-2"
              >
                <Radio readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  Over USD 100
                </Label>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <Typography variant="sm" weight="bold">
              Ordering options
            </Typography>
            <div className="flex gap-2 flex-col items-start">
              <Link
                href="/search?ordering-options=gift-cards"
                className="inline-flex items-center gap-2"
              >
                <Checkbox readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  Accepts Mun gift cards
                </Label>
              </Link>
              <Link
                href="/search?ordering-options=gift-wrap"
                className="inline-flex items-center gap-2"
              >
                <Checkbox readOnly />
                <Label className="font-normal cursor-pointer hover:underline">
                  Can be gift-wrapped
                </Label>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FeaturedFilter;

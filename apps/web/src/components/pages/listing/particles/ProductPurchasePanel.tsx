'use client';

import React from 'react';
import Heading from '@repo/ui/components/heading';
import Rating from '@repo/ui/components/rating';
import { Check } from 'lucide-react';
import SelectInput from '@repo/ui/components/select-input';
import { Label } from '@repo/ui/components/label';
import { Button } from '@repo/ui/components/button';
import Typography from '@repo/ui/components/typography';
import { Badge } from '@repo/ui/components/badge';
import SellerBadgeIcon from '@repo/ui/icons/SellerBadgeIcon';
import SellerBadge from '../../../ui/product/SellerBadge';

const ProductPurchasePanel = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Typography weight="semibold" textColor="destructive">
          Only 1 left and in 4 baskets
        </Typography>
        <div className="flex flex-col">
          <div className="flex items-center flex-wrap md:gap-2">
            <Heading as="h4" className="text-green-800">
              USD 176.45+
            </Heading>
            <div className="flex items-center gap-2">
              <span>
                <del className="text-muted-foreground text-sm">USD 29.95+</del>
              </span>
              <Badge className="rounded-full bg-[#a3e29a] text-foreground">
                50% off
              </Badge>
            </div>
          </div>
          <Typography weight="semibold" className="text-green-800">
            Sale ends on 03 August
          </Typography>
        </div>
        <Typography variant="xs" textColor="muted" className="py-2">
          Local taxes included (where applicable)
        </Typography>
        <Typography>
          Custom First&Last Day of School Sign,Back to School Photo Prop for
          kids,Custom wood name sign,Personalized gift name sign,Kindergarten
          Sign
        </Typography>
        <div className="flex items-center gap-2">
          <SellerBadge shop="Okkembroidery" />
          <Rating value={5} displayMode="stars" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Check size={20} className="stroke-blue-500" />
          <Typography variant="xs" textColor="muted">
            Returns & exchanges accepted
          </Typography>
        </div>
        <div className="space-y-3">
          <Label>Dimensions</Label>
          <SelectInput
            options={[
              { label: 'Apple', value: 'apple' },
              { label: 'Banana', value: 'banana' },
              { label: 'Cherry', value: 'cherry' },
              { label: 'Date', value: 'date' },
              { label: 'Elderberry', value: 'elderberry' },
            ]}
          />
        </div>
        <div className="space-y-3">
          <Label>Style</Label>
          <SelectInput
            options={[
              { label: 'Apple', value: 'apple' },
              { label: 'Banana', value: 'banana' },
              { label: 'Cherry', value: 'cherry' },
              { label: 'Date', value: 'date' },
              { label: 'Elderberry', value: 'elderberry' },
            ]}
          />
        </div>
        <div className="space-y-3">
          <Label>Quantity</Label>
          <SelectInput
            options={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
              { label: '7', value: '7' },
              { label: '8', value: '8' },
              { label: '9', value: '9' },
            ]}
          />
        </div>
        <Button size="lg" variant="outline" className="rounded-full w-full">
          Buy it now
        </Button>
        <Button size="lg" className="rounded-full w-full">
          Add to basket
        </Button>
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <SellerBadgeIcon />
        <Typography variant="body2" textColor="muted" className="flex-1">
          <strong className="text-foreground">Star Seller.</strong>
          This seller consistently earned 5-star reviews, dispatched on time,
          and replied quickly to any messages they received.
        </Typography>
      </div>
    </div>
  );
};

export default ProductPurchasePanel;

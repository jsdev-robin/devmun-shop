'use client';

import React from 'react';
import ProductGallery from './particles/ProductGallery';
import { HeartIcon } from 'lucide-react';
import { Button } from '@repo/ui/components/button';
import MunsPickBadge from './particles/MunsPickBadge';
import ProductReview from './particles/ProductReview';
import ProductInfo from './particles/ProductInfo';
import ProductPurchasePanel from './particles/ProductPurchasePanel';

const ProductListing = () => {
  return (
    <section>
      <div className="container">
        <div className="space-y-10">
          <div className="grid gap-4 xl:gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3 lg:pr-10">
              <div className="relative">
                <ProductGallery />
                <MunsPickBadge />
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full size-10 border border-border !shadow-2 hover:!shadow-4 absolute top-2 right-2 xl:-right-14"
                >
                  <HeartIcon />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ProductPurchasePanel />
            </div>
          </div>
          <div className="grid gap-4 xl:gap-10 lg:grid-cols-5">
            <ProductReview />
            <ProductInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/dialog';
import { Button } from '@repo/ui/components/button';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';

interface SellerProductGalleryDailogProps {
  imgs: {
    url: string;
  }[];
}

const SellerProductGalleryDailog: React.FC<SellerProductGalleryDailogProps> = ({
  imgs,
}) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button size="sm" className="size-8">
            <Eye />
          </Button>
        </DialogTrigger>
        <DialogContent className="px-0 sm:max-w-5xl">
          <DialogHeader className="px-6">
            <DialogTitle>Product Image Gallery</DialogTitle>
            <DialogDescription>
              Browse all uploaded images for this product.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[65svh] overflow-y-auto px-6">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {imgs.map((item, i) => (
                <Image
                  key={i}
                  src={item.url}
                  alt="Profile image"
                  width={600}
                  height={600}
                  className="size-full object-cover rounded-md"
                  blurDataURL={rgbDataURL(i)}
                  placeholder="blur"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default SellerProductGalleryDailog;

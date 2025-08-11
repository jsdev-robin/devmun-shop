'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useBreakpoint } from '@repo/ui/hooks/use-breakpoint';
import Script from 'next/script';
import { Button } from '@repo/ui/components/button';
import { Bug } from 'lucide-react';

declare global {
  interface Window {
    cloudinary?: {
      galleryWidget: (options: {
        container: string;
        cloudName: string;
        mediaAssets: Array<{
          tag?: string;
          publicId?: string;
          mediaType?: string;
        }>;
        aspectRatio?: string;
        transformation?: {
          crop: string;
        };
        carouselOffset?: number;
        carouselLocation?: 'left' | 'bottom' | 'right' | 'top';
      }) => {
        render: () => void;
      };
    };
  }
}

const ProductGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const isXlAndAbove = !useBreakpoint('xl');
  const isLgAndAbove = !useBreakpoint('lg');
  const isMdAndAbove = !useBreakpoint('md');

  const initializeGallery = () => {
    if (!window.cloudinary || !galleryRef.current) return;

    try {
      const gallery = window.cloudinary.galleryWidget({
        container: '#my-gallery',
        cloudName: 'demo',
        mediaAssets: [
          {
            tag: 'shoes_product_gallery_demo',
            mediaType: 'image',
          },
          {
            tag: 'shoes_product_gallery_demo',
            mediaType: 'video',
          },
          {
            tag: 'shoes_product_gallery_demo_spinset',
            mediaType: 'spin',
          },
        ],
      });
      gallery.render();
    } catch (error) {
      console.error('Error initializing Cloudinary gallery:', error);
    }
  };

  useEffect(() => {
    if (scriptLoaded || window.cloudinary) {
      initializeGallery();
    }
  }, [scriptLoaded, isXlAndAbove, isLgAndAbove, isMdAndAbove]);

  return (
    <div className="space-y-6">
      <Script
        src="https://product-gallery.cloudinary.com/all.js"
        type="text/javascript"
        strategy="afterInteractive"
        onLoad={() => {
          setScriptLoaded(true);
          initializeGallery();
        }}
        onError={() => console.error('Failed to load Cloudinary script')}
      />
      <div id="my-gallery" className="max-h-full" ref={galleryRef} />
      <div className="flex items-center justify-end">
        <Button variant="ghost" size="lg" className="rounded-full">
          <Bug />
          Report this item to MUN
        </Button>
      </div>
    </div>
  );
};

export default ProductGallery;

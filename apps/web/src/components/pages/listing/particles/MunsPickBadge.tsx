'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@repo/ui/components/tooltip';
import { Badge } from '@repo/ui/components/badge';
import Link from 'next/link';

const MunsPickBadge = () => {
  return (
    <Tooltip>
      <TooltipTrigger
        asChild
        className="absolute top-2 left-2 bg-orange-300 text-foreground sm:left-19"
      >
        <Badge className="rounded-xl">
          <span className="sparkle-animate">
            <Sparkles className="size-4" />
          </span>
          <span className="border-b-1 border-foreground border-dashed">
            Mun&apos;s Pick
          </span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="w-60">
        <p>
          Mun’s Picks are hand selected by our style experts to highlight items
          from shops that have shown quality, reliability and style.
        </p>
        <Link href="/" className="underline mt-2 block">
          Discover more
        </Link>
      </TooltipContent>
      <style>
        {`
          @keyframes sparklePulse {
            0%, 90%, 100% {
              transform: scale(.8);
              opacity: 1;
            }
            95% {
              transform: scale(1.1);
              opacity: 0.3;
            }
          }
          .sparkle-animate {
            animation: sparklePulse 2s infinite ease-in-out;
          }
        `}
      </style>
    </Tooltip>
  );
};

export default MunsPickBadge;

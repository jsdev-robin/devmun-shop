'use client';

import Gradient from '@repo/ui/components/gradient';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-6">
      <Link href="/sign-in" className="inline-block">
        <Gradient>
          <div className="bg-slate-900 rounded-lg p-8 w-full max-w-md">
            <div className="text-center">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                Devmun <br /> Click On me
              </span>
            </div>
          </div>
        </Gradient>
      </Link>
    </div>
  );
};

export default page;

'use client';

import React from 'react';
import HeaderCategories from './particles/HeaderCategories';
import HeaderSearch from './particles/HeaderSearch';
import HeaderWidget from './particles/HeaderWidget';
import HeaderResponsive from './particles/HeaderResponsive';
import MainLogo from '@repo/ui/common/main-logo';

const Header = () => {
  return (
    <>
      <header className="pt-3 hidden lg:block">
        <div className="container">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              <MainLogo />
              <HeaderCategories />
            </div>
            <HeaderSearch />
            <HeaderWidget />
          </div>
        </div>
      </header>
      <HeaderResponsive />
    </>
  );
};

export default Header;

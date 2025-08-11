'use client';

import React from 'react';
// import { useParams } from 'next/navigation';
import FeaturedHero from '../../../../../components/pages/featured/FeaturedHero';
import FeaturedCategories from '../../../../../components/pages/featured/FeaturedCategories';
import FeaturedShops from '../../../../../components/pages/featured/FeaturedShops';
import FeaturedProducts from '../../../../../components/pages/featured/FeaturedProducts';
import FeaturedDiscover from '../../../../../components/pages/featured/FeaturedDiscover';

const Page = () => {
  // const params = useParams();
  // const category = params.category;

  return (
    <>
      <FeaturedHero />
      <FeaturedCategories />
      <FeaturedShops />
      <FeaturedProducts />
      <FeaturedDiscover />
    </>
  );
};

export default Page;

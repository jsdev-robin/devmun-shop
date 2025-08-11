import React from 'react';
import HomeHero from '../../components/pages/home/HomeHero';
import HomFeatured from '../../components/pages/home/HomFeatured';
import HomeMunSpecial from '../../components/pages/home/HomeMunSpecial';
import HomeBigDeals from '../../components/pages/home/HomeBigDeals';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomFeatured />
      <HomeMunSpecial />
      <HomeBigDeals />
    </>
  );
};

export default HomePage;

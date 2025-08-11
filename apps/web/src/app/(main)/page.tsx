import React from 'react';
import HomeHero from '../../components/pages/home/HomeHero';
import HomFeatured from '../../components/pages/home/HomFeatured';
import HomeMunSpecial from '../../components/pages/home/HomeMunSpecial';
import HomeBigDeals from '../../components/pages/home/HomeBigDeals';
import HomeLoveShop from '../../components/pages/home/HomeLoveShop';
import HomeRecommendation from '../../components/pages/home/HomeRecommendation';
import HomeShopGift from '../../components/pages/home/HomeShopGift';
import HomeAnyBudget from '../../components/pages/home/HomeAnyBudget';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomFeatured />
      <HomeMunSpecial />
      <HomeBigDeals />
      <HomeLoveShop />
      <HomeRecommendation />
      <HomeShopGift />
      <HomeAnyBudget />
      <HomeMunSpecial />
    </>
  );
};

export default HomePage;

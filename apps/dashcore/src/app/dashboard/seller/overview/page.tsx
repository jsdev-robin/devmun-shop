import React from 'react';
import SellerSalesReport from '../../../../components/dashboard/seller/pages/overview/SellerSalesReport';
import SellerOrderReport from '../../../../components/dashboard/seller/pages/overview/SellerOrderReport';

const SellerOverviewPage = () => {
  return (
    <>
      <SellerSalesReport />
      <SellerOrderReport />
    </>
  );
};

export default SellerOverviewPage;

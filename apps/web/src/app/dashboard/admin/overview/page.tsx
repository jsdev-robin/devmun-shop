import React from 'react';
import AdminOverviewSalesReport from '../../../../components/dashboard/admin/pages/overview/AdminOverviewSalesReport';
import AdminOverviewDistributionStats from '../../../../components/dashboard/admin/pages/overview/AdminOverviewDistributionStats';

const AdminOverviewPage = () => {
  return (
    <>
      <AdminOverviewSalesReport />
      <AdminOverviewDistributionStats />
    </>
  );
};

export default AdminOverviewPage;

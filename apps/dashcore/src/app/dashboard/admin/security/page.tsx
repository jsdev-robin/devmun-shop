import React from 'react';
import AdminAccount2FA from '../../../../components/dashboard/admin/pages/security/AdminAccount2FA';
import AdminAccountSocialConnect from '../../../../components/dashboard/admin/pages/security/AdminAccountSocialConnect';
import AdminAccountSigninHistory from '../../../../components/dashboard/admin/pages/security/AdminAccountSigninHistory';

const AdminAccountSecurityPage = () => {
  return (
    <>
      <AdminAccount2FA />
      <AdminAccountSocialConnect />
      <AdminAccountSigninHistory />
    </>
  );
};

export default AdminAccountSecurityPage;

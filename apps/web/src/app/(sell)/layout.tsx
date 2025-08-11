import React from 'react';
import Header from '@/components/layouts/Header';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header sell={true} />
      <main className="space-y-6 py-4 md:space-y-10 lg:py-6 xl:space-y-14">
        {children}
      </main>
    </>
  );
};

export default MainLayout;

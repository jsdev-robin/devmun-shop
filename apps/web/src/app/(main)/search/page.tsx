'use client';

import React, { Suspense } from 'react';
import SearchProducts from '../../../components/pages/search/SearchProducts';
import SearchCustomisable from '../../../components/pages/search/SearchCustomisable';
import { useSearchParams } from 'next/navigation';
import { SearchQueryProvider } from '../../../components/pages/search/contexts/SearchContext';

const SearchPageContent = () => {
  const searchParams = useSearchParams();

  return (
    <SearchQueryProvider queryParams={searchParams}>
      <SearchProducts />
      <SearchCustomisable />
    </SearchQueryProvider>
  );
};

const SearchPage = () => {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;

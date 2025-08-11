'use client';

import { ReadonlyURLSearchParams } from 'next/navigation';
import React, { createContext, useContext, ReactNode, useMemo } from 'react';

interface QueryParams {
  [key: string]: string;
}

interface SearchQueryContextType {
  query: QueryParams;
}

interface SearchQueryProviderProps {
  children: ReactNode;
  queryParams: ReadonlyURLSearchParams;
}

const SearchQueryContext = createContext<SearchQueryContextType | undefined>(
  undefined,
);

export const SearchQueryProvider: React.FC<SearchQueryProviderProps> = ({
  children,
  queryParams,
}) => {
  const query = useMemo<QueryParams>(() => {
    return Object.fromEntries(queryParams.entries());
  }, [queryParams]);

  const value = {
    query,
  };

  return (
    <SearchQueryContext.Provider value={value}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export const useSearchQuery = (): SearchQueryContextType => {
  const context = useContext(SearchQueryContext);
  if (context === undefined) {
    throw new Error('useSearchQuery must be used within a SearchQueryProvider');
  }
  return context;
};

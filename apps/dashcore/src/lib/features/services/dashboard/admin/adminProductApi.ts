import { GetQueryParams, ProductResponse } from '@repo/ui/types/api-response';
import { apiSlice } from '../../../api/api';

export const adminProductsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminProducts: builder.query<ProductResponse, GetQueryParams>({
      query: ({ pagination, queryParams, sort, globalFilter }) => {
        let url = `/product/dashcore/product/admin/all?page=${(pagination?.pageIndex ?? 0) + 1}&limit=${pagination?.pageSize}`;
        if (queryParams) url += `&${queryParams}`;
        if (sort) url += `&${sort}`;
        if (globalFilter) url += `&q=${globalFilter}`;
        return { url, method: 'GET' };
      },
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetAdminProductsQuery } = adminProductsApi;

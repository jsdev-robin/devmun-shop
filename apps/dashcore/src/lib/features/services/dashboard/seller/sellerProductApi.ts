import { GetQueryParams, ProductResponse } from '@repo/ui/types/api-response';
import { apiSlice } from '../../../api/api';
import { SuccessResponse } from '../../../types';

export const sellerProductsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSellerProducts: builder.query<ProductResponse, GetQueryParams>({
      query: ({ pagination, queryParams, sort, globalFilter }) => {
        let url = `/product/dashcore/product?page=${(pagination?.pageIndex ?? 0) + 1}&limit=${pagination?.pageSize}`;
        if (queryParams) url += `&${queryParams}`;
        if (sort) url += `&${sort}`;
        if (globalFilter) url += `&q=${globalFilter}`;
        return { url, method: 'GET' };
      },
      keepUnusedDataFor: 300,
    }),

    createProduct: builder.mutation<SuccessResponse, FormData>({
      query: (formData) => ({
        url: `/product/dashcore/product`,
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useGetSellerProductsQuery, useCreateProductMutation } =
  sellerProductsApi;

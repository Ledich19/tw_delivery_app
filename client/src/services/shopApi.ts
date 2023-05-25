import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { OrderType, ShopType } from '../app/types';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getShops: build.query<ShopType[], string>({
      query: () => '/shops',
    }),
    postOrder: build.mutation<OrderType, Partial<OrderType>>({
      query: (data) => ({
        url: `/cart`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),
  }),
});

export const { useGetShopsQuery, usePostOrderMutation } = shopApi;

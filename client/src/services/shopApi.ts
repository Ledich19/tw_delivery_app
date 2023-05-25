import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { ShopType } from '../app/types';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getShops: build.query<ShopType[], string>({
      query: () => '/shops',
    }),
    getShopsById: build.query({
      query: (id) => `/${id}}`,
    }),
  }),
});

export const { useGetShopsQuery, useGetShopsByIdQuery } = shopApi;

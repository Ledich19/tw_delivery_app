import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { Place } from '../app/types';

export const mapApi = createApi({
  reducerPath: 'mapApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://nominatim.openstreetmap.org/' }),
  endpoints: (build) => ({
    getPlaces: build.query<Place[], string>({
      query: (searchText: string) => ({
        url: 'search',
        params: {
          q: searchText,
          format: 'json',
          addressdetails: 1,
          polygon_geojson: 0,
        },
      }),
    }),
    getPlacesRevers: build.query<Place, { lat: number; lon: number }>({
      query: ({ lat, lon }) => ({
        url: 'reverse',
        params: {
          format: 'json',
          lat,
          lon,
          zoom: 18,
          addressdetails: 1,
        },
      }),
    }),
  }),
});

export const fetchPlace = async ({ lat, lon }: { lat: number; lon: number }) => {
  const url = 'https://nominatim.openstreetmap.org/reverse';
  const params = new URLSearchParams({
    format: 'json',
    lat: String(lat),
    lon: String(lon),
    zoom: '18',
    addressdetails: '1',
  });
  const response = await fetch(`${url}?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch reverse places');
  }

  const data = await response.json();
  return data as Place;
};

export const { useGetPlacesQuery, useGetPlacesReversQuery } = mapApi;

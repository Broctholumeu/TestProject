import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const conversionRateApi = createApi({
    reducerPath: 'conversionRateApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://data.fixer.io/api/latest?access_key=ae664278ce69935cc5d30cf63284a78c&symbols=AUD,USD,GBP,JPY" }),
    endpoints: (builder) => ({
        getRatesByCountry: builder.query({
            query: (rates) => `${rates}`,
        }),
    }),
})

export const { useGetRatesByCountryQuery } = conversionRateApi;
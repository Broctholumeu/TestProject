import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { conversionRateApi } from './API';

export const makeStore = configureStore({
    reducer: {
        [conversionRateApi.reducerPath]: conversionRateApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(conversionRateApi.middleware),
})

setupListeners(makeStore.dispatch)
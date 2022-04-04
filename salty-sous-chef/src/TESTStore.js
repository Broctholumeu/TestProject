import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { conversionRateApi } from './API';

export const store = configureStore({
    reducer: {
        [conversionRateApi.reducerPath]: conversionRateApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(conversionRateApi.middleware),
})

setupListeners(store.dispatch)
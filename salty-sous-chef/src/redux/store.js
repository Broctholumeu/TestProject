import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { conversionRateApi } from './API';
import currencyReducer from "./reducers";

export const makeStore = configureStore({
    reducer: {
        [conversionRateApi.reducerPath]: conversionRateApi.reducer,
        currency: currencyReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(conversionRateApi.middleware),
})

setupListeners(makeStore.dispatch)
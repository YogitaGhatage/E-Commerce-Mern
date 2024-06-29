import { configureStore } from "@reduxjs/toolkit";
import  cartSliceReucer  from './slices/cartSlice';
import { apiSlice } from "./slices/apiSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReucer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;
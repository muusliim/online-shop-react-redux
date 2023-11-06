import { configureStore } from '@reduxjs/toolkit';
import  sidebarReducer  from './sidebar-slice';
import cartReducer from './cart-slice';
import searchReducer from './search-slice';
import { apiSlice } from '../api/apiSlice';



export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cart: cartReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: gdm => gdm().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

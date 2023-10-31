import { configureStore } from '@reduxjs/toolkit';
import  sidebarReducer  from './sidebar-slice';
import { apiSlice } from '../api/apiSlice';



export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: gdm => gdm().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

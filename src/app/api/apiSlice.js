import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => 'products/categories'
        }),
        getProducts: builder.query({
            query: (limit) => `products?limit=${limit}`
        }),
        getSingleProduct: builder.query({
            query: (id) => `products/${id}` 
        })
    })
})

export const {useGetCategoriesQuery, useGetProductsQuery, useGetSingleProductQuery} = apiSlice;
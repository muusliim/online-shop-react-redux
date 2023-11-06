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
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products/category/${category}`
        }),
        getProductsBySearch: builder.query({
            query: (term) => `products/search?q=${term}`
        })
    })
})


export const {useGetCategoriesQuery, 
             useGetProductsQuery, 
            useGetSingleProductQuery, 
            useGetProductsByCategoryQuery,
            useGetProductsBySearchQuery} = apiSlice;
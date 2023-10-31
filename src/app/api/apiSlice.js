import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => 'products/categories'
        })
    })
})

export const {useGetCategoriesQuery} = apiSlice;
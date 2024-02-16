import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  tagTypes: ['products', 'comments'],
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['products'],
    }),
    getComments: builder.query({
      query: (productId) => `/products/${productId}/comments`,
      providesTags: ['comments'],
    }),
    createComment: builder.mutation({
      query: (data) => ({
        url: `/products/${data.productId}/comments`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['comments'],
    }),
  }),
})

export const { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation } = productsApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const articleApi = createApi({
//   tagTypes:["articles"],
//   reducerPath: 'articleApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
//   endpoints: (builder) => ({
//     getArticles: builder.query({
//       query: () => `articles`,
//       providesTags:["articles"],
//     }),
//     createArticle:builder.mutation({
//         query:(data) =>({
//             url: '/articles',
//             method:"POST",
//             body: data
//         }),
//         invalidatesTags:["articles"]
//     })
//   }),
// })
// export const { useGetArticlesQuery,useCreateArticleMutation} = articleApi

export const productApi = createApi({
  tagTypes:["comments"],
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getCommentsByProductId: builder.query({
      query: (id) => `products/${id}/comments`,
      providesTags:["comments"],
    }),
    createComment:builder.mutation({
      query:(data) =>(
        {
          url: `/products/${data.id}/comments`,
          method:"POST",
          body: data
      }),
      invalidatesTags:["comments"]
    })
  }),
})

export const { useGetProductsQuery,useGetCommentsByProductIdQuery,useCreateCommentMutation} = productApi
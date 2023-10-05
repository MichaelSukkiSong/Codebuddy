import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      removeCategory: builder.mutation({
        query: (category) => {
          return {
            url: `/api/categories/${category.id}`,
            method: 'DELETE',
          };
        },
      }),
      addCategory: builder.mutation({
        query: ({ id, name, prompt }) => {
          return {
            url: '/api/categories',
            method: 'POST',
            body: {
              id,
              name,
              prompt,
            },
          };
        },
      }),
      fetchCategory: builder.query({
        query: (categoryId) => {
          return {
            url: `/api/categories/${categoryId}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
  useFetchCategoryQuery,
  useAddCategoryMutation,
  useRemoveCategoryMutation,
} = categoriesApi;
export { categoriesApi };

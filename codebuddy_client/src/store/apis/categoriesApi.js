import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

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
        query: (arg) => {
          return {
            url: '/api/responses',
            method: 'POST',
            body: {},
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

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
        invalidatesTags: (result, error, category) => {
          return [{ type: 'Category', id: category._id }];
        },
        query: (category) => {
          return {
            url: `/api/categories/${category.id}`,
            method: 'DELETE',
          };
        },
      }),
      addCategory: builder.mutation({
        invalidatesTags: () => {
          return [{ type: 'AddCategory' }];
        },
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
      fetchCategories: builder.query({
        providesTags: (result, error, arg) => {
          const tags = result.map((category) => {
            return { type: 'Category', id: category._id };
          });
          tags.push({ type: 'AddCategory' });
          return tags;
        },
        query: () => {
          return {
            url: '/api/categories',
            method: 'GET',
          };
        },
      }),
      fetchCategory: builder.query({
        providesTags: (result, error, category) => {
          return [{ type: 'Category', id: category._id }];
        },
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
  useFetchCategoriesQuery,
  useFetchCategoryQuery,
  useAddCategoryMutation,
  useRemoveCategoryMutation,
} = categoriesApi;
export { categoriesApi };

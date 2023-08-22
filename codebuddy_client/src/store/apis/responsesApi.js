import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const responsesApi = createApi({
  reducerPath: 'responses',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      removeResponse: builder.mutation({
        invalidatesTags: (result, error, response) => {
          return [{ type: 'Response', id: response._id }];
        },
        query: (response) => {
          return {
            url: `/api/responses/${response._id}`,
            method: 'DELETE',
          };
        },
      }),
      addResponse: builder.mutation({
        invalidatesTags: () => {
          return [{ type: 'AddResponse' }];
        },
        query: (arg) => {
          return {
            url: '/api/responses',
            method: 'POST',
            body: {
              response: arg.response,
              section: arg.section,
            },
          };
        },
      }),
      fetchResponses: builder.query({
        providesTags: (result, error, arg) => {
          const tags = result.map((response) => {
            return { type: 'Response', id: response._id };
          });
          tags.push({ type: 'AddResponse' });
          return tags;
        },
        query: () => {
          return {
            url: '/api/responses',
            method: 'GET',
          };
        },
      }),
      fetchResponse: builder.query({
        providesTags: (result, error, response) => {
          return [{ type: 'Response', id: response._id }];
        },
        query: (responseId) => {
          return {
            url: `/api/responses/${responseId}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
  useFetchResponsesQuery,
  useFetchResponseQuery,
  useAddResponseMutation,
  useRemoveResponseMutation,
} = responsesApi;
export { responsesApi };

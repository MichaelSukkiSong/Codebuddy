import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
  }),
  refetchOnMountOrArgChange: 1,
  endpoints(builder) {
    return {
      fetchCurrentuser: builder.query({
        query: () => {
          return {
            url: '/api/current_user',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchCurrentuserQuery } = authApi;
export { authApi };

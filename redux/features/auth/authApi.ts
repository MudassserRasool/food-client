import { apiSlice } from '@/redux/apiSlice';
import { EndpointBuilder } from '@reduxjs/toolkit/query';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    login: builder.mutation({
      query: (credentials: Login) => ({
        url: '/users/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['adminStatsUsers'],
    }),
  }),
});

export const { useLoginMutation } = authApi;

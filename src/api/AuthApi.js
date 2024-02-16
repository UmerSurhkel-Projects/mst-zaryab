import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../config/config';
const { baseUrl } = ENV;

export const userApi = createApi({
    reducerPath: 'userApi',
    // baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/` }),
    baseQuery: fetchBaseQuery({ baseUrl: 'http://38.242.204.79:8080/v1' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            // body: The body of the request. It's passed the credentials, which will be the payload for the login (typically includes fields like username and password).
            query: (credentials) => ({
                url: 'user/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        // This defines a mutation called Register.
        register: builder.mutation({
            query: (credentials) => ({
                url: 'user/register',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
      // This defines a mutation called verify email
        verifyEmail: builder.mutation({
            query: ({ id, token }) => ({
                url: `user/verify-email/${id}`,
                method: 'POST',
                body: { token },
            }),
        }),
        // This defines a mutation called resend verify email
        resendEmail: builder.mutation({
            query: ({ id, email }) => ({
                url: `user/resend-mail/${id}`,
                method: 'POST',
                body: { email },
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyEmailMutation ,useResendEmailMutation} = userApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../config/config';

const { baseUrl } = ENV;
const baseQueryWithAuth = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        login: builder.mutation({
            // body: The body of the request. It's passed the credentials, which will be the payload for the login (typically includes fields like username and password).
            query: (credentials) => ({
                url: 'user/login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
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
            // Register might add a new user, so we invalidate to refetch user-related data
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
        }),
         // This defines a mutation called Logout
        logout: builder.mutation({
            query: (id) => ({
                url: `user/logout/${id}`,
                method: 'GET',
            }),
             // Logout changes user state, so we invalidate user tags
             invalidatesTags: [{ type: 'User' }],
        }),
        // This defines a mutation called delete the account
        deleteAccount: builder.mutation({
            query: () => ({
                url: '/user/delete-account',
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'User' }],
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
        // This defines a mutation called change password
        changePassword: builder.mutation({
            query: (passwordData) => ({
                url: 'user/change-password',
                method: 'PUT',
                body: passwordData,
            }),
            // Changing password might affect user data, so we invalidate User tag
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
        }),
        // This defines a mutation for two-step verification setup or update
        twoStepVerification: builder.mutation({
            query: (verificationData) => ({
                url: 'user/two-step-verification',
                method: 'PUT',
                body: verificationData,
            }),
            // After setting up or updating two-step verification, user profile data might change
            invalidatesTags: ['UserProfile'],
            // Optionally, if the mutation provides specific user data, you can use providesTags too
            providesTags: (result, error, arg) => [{ type: 'User', id: arg.userId }],
        }),
        
        verifyOtp: builder.mutation({
            query: (verificationData) => ({
                url: 'user/verify-otp',
                method: 'PUT',
                body: verificationData, // Include the body in the request
            }),
            // Verification might update user's verification status or related data
            invalidatesTags: ['UserVerification', 'UserProfile'],
            // If OTP verification directly affects a user's entity, specify it here
            providesTags: (result, error, arg) => [{ type: 'User', id: arg.userId }],
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyEmailMutation, useResendEmailMutation, useLogoutMutation,useChangePasswordMutation,useTwoStepVerificationMutation,useVerifyOtpMutation,useDeleteAccountMutation  } = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../config/config';
const { baseUrl } = ENV;


const baseQueryWithAuth = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => 'user/get',
            providesTags: [{ type: 'User', id: 'LIST' }],
        }),
        updateUserProfile: builder.mutation({
            query: (formData) => ({
                url: 'user/update',
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
        }),
        
    }),
});

export const { useGetUserProfileQuery,useUpdateUserProfileMutation } = userApi;

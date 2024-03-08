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
export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        addContact: builder.mutation({
            query: (contact) => ({
                url: '/contacts/add-contact',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: contact,
            }),
            invalidatesTags: ['ContactList'],
        }),
        deleteContact: builder.mutation({
            query: (contactId) => ({
                url: `/contacts/delete/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ContactList'],
        }),
        getContactList: builder.query({
            query: ({ limit = 10, page = 1 ,search}) => ({
                url: '/contacts/contact-list',
                method: 'GET',
                params: { limit, page ,search},
            }),
            providesTags: ['ContactList'],
        }),
        getContactById: builder.query({
            query: (contactId) => ({
                url: `/contacts/get/${contactId}`,
                method: 'GET',
            }),
        }),
        updateContact: builder.mutation({
            query: ({ contactId, ...data }) => ({
                url: `/contacts/update/${contactId}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            }),
            invalidatesTags: ['ContactList'],
        }),
    }),
});

export const {
    useAddContactMutation,
    useGetContactListQuery,
    useGetContactByIdQuery,
    useUpdateContactMutation,
    useDeleteContactMutation,
} = contactApi;

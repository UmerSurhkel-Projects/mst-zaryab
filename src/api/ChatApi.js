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

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
       getMessages: builder.query({
            query: ({ contactId, limit, page }) => `messages/get/${contactId}?limit=${limit}&page=${page}`,
        }),
        recentChats: builder.query({
            query: ({limit, page }) => `contacts/recent-chats?limit=${limit}&page=${page}`,
        }),
    }),
});

export const { useGetMessagesQuery ,useRecentChatsQuery} = chatApi;

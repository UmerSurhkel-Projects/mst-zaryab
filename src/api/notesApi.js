import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../config/config';
const { baseUrl } = ENV;

export const notesApi = createApi({
    reducerPath: 'notesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/`,
        // In the context of Redux and RTK Query, getState is a function you can use to access the current state of the Redux store. 
        // When you define a baseQuery with fetchBaseQuery in RTK Query, the prepareHeaders function provides you with getState as an argument. 
        // This allows you to read the current state of your store and use it to prepare headers or make other decisions before a request is sent.
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        createNote: builder.mutation({
            query: (formData) => ({
                url: 'note/create',
                method: 'POST',
                body: formData,
            }),
        }),
        deleteNote: builder.mutation({
            query: (noteId) => ({
                url: `note/delete/${noteId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Notes', id: 'LIST' }],
        }),
        deleteSelectedNotes: builder.mutation({
            query: (noteIds) => ({
                url: 'note/delete-selected',
                method: 'DELETE',
                body: { noteIds },
            }),
            invalidatesTags: [{ type: 'Notes', id: 'LIST' }],
        }),
        editNote: builder.mutation({
            query: ({ noteId, ...formData }) => ({
                url: `note/edit`,
                method: 'PUT',
                body: { noteId, ...formData }
            }),
            invalidatesTags: ({ noteId }) => [{ type: 'Notes', id: noteId }],
        }),
        viewNote: builder.query({
            query: (noteId) => ({
                url: `note/get/${noteId}`,
                method: 'GET',
            }),
        }),
        listNotes: builder.query({
            query: ({ page = 1, limit = 3 }) => ({
                url: `note/list?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: (result) => [{ type: 'Notes', id: 'LIST' }],
        }),

    }),
});

export const { useCreateNoteMutation, useDeleteNoteMutation, useDeleteSelectedNotesMutation, useEditNoteMutation, useViewNoteQuery, useListNotesQuery } = notesApi;

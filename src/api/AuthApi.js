
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../config/config';
const { baseUrl } = ENV;

export const userApi = createApi({
    // This is a unique key that defines where your API state will be stored in the Redux store. Here, 'userApi' is used as the key.
    reducerPath: 'userApi',
    // Here, fetchBaseQuery is used with baseUrl set to 'https://mst.notes.arhamsoft.org/v1/'. 
    // This means that all your requests will have this URL as a base, and you'll only need to specify the endpoint paths.
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/` }),

    // The builder argument is an instance of an endpoint builder.
    //  It allows you to define query/mutation endpoints in a concise and standardized way.
    //   It provides methods like query and mutation to define different types of operations.
    endpoints: (builder) => ({
        // This defines a mutation called login. Mutations are typically used for POST, PUT, PATCH, or DELETE requests that modify data on the serve
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

    }),
});

// RTK Query automatically generates React hooks for each endpoint.
//  Here, useLoginMutation is a hook that components can use to trigger the login mutation.
// When you use useLoginMutation in a component, you get a method to trigger the mutation and variables that contain the current status 
// of the mutation (whether it's loading, successful, or errored),
//  and the response data or error. This simplifies state management related to API calls significantly.

export const { useLoginMutation, useRegisterMutation } = userApi;

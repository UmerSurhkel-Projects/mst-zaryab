import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/AuthApi';
import { userApi } from './api/UserApi';
import {contactApi} from './api/ContactApi';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware,userApi.middleware,contactApi.middleware),
});

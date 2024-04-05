import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/AuthApi';
import { userApi } from './api/UserApi';
import { contactApi } from './api/ContactApi';
import {ChatPlaceHolder} from './components/chats/ChatPlaceholder';
import loaderReducer from './components/loader/loaderSlice';
import { globalLoaderMiddleware } from './globalLoaderMiddleware';
import { chatApi } from './api/ChatApi';
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    loader: loaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware, userApi.middleware, contactApi.middleware,chatApi.middleware)
      .concat(globalLoaderMiddleware),
});

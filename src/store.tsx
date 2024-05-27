import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/MainApi";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
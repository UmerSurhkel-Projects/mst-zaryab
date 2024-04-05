// src/store/globalLoaderMiddleware.js
import { startLoading,stopLoading } from "./components/loader/loaderSlice";
export const globalLoaderMiddleware = (api) => (next) => (action) => {
  if (action.type.endsWith('/pending')) {
    // Dispatch startLoading when any API call starts
    api.dispatch(startLoading());
  } else if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) {
    // Dispatch stopLoading when any API call succeeds or fails
    api.dispatch(stopLoading());
  }

  return next(action);
};

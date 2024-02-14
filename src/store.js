// // src/app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// // import { userApi } from './api/authApi';
// // import { notesApi } from './api/notesApi';

// export const store = configureStore({
//     reducer: {
//         // Add the generated reducer as a specific top-level slice
//         // [userApi.reducerPath]: userApi.reducer,
//         // [notesApi.reducerPath]: notesApi.reducer,
//     },
//     // Middleware can be used for logging, crash reporting, talking to an asynchronous API, routing, and more.
//     // The middleware from RTK Query (userApi.middleware) is being added to the store.
//     //  This is essential for RTK Query to function correctly, 
//     // as it enables all the powerful features

//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(),
// });

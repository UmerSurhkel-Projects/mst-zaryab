import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "./ApiHead";

const baseQuery = createBaseQuery();

export const api = createApi({
  reducerPath: "BooksApp",
  baseQuery: baseQuery,
  tagTypes: ["Book"],
  endpoints: () => ({}),
});

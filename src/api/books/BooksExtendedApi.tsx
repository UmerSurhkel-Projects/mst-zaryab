import { api } from "../MainApi";
import { addBookType,bookCategoriesType,bookType ,DeleteResponse} from "../Interfaces";
import BooksEnhancedApi from "./BooksEnhancedApi";
import { createBaseQuery } from "../ApiHead";

const baseQuery = createBaseQuery();


const BooksExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<bookType[], { offset?: number, limit?: number }>({
      query: ({ offset = 0, limit = 2 }) => ({
        url: "books",
        method: "GET",
        params: { offset, limit }
      }),
    }),
    
    getBook: builder.query<bookType, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
    }),
    getBookCategories: builder.query<bookCategoriesType[], string>({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
    }),
    deleteBook: builder.mutation<DeleteResponse, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("access_token") || "", // Access token retrieved from localStorage
        },
      }),
    }),
    addBook: builder.mutation<bookType, addBookType>({ 
      query: (payload) => ({
        url: `/books`,
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("access_token") || ""
        },
        body: JSON.stringify(payload)
      }),
    }),

    UpdateBook: builder.mutation<bookType, addBookType>({ 
      query: (id) => ({
        url: `/books/${id}`,
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("access_token") || ""
        },
      }),
    }),
 

  }),
  overrideExisting: true,
});
BooksEnhancedApi();
baseQuery:baseQuery;


export const {useGetBooksQuery,useGetBookQuery,useDeleteBookMutation,useAddBookMutation,useUpdateBookMutation,useGetBookCategoriesQuery} = BooksExtendedApi;

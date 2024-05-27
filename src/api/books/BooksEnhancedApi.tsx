import { api } from "../MainApi";

const BooksEnhancedApi = () => {
  api.enhanceEndpoints({
    endpoints: {
      getBooks: {
        providesTags: ["Book"],
      },
      getBook: {
        providesTags: ["Book"],
      },
      deleteBook: {
        invalidatesTags: ["Book"],
      },
    },
  });
};

export default BooksEnhancedApi;

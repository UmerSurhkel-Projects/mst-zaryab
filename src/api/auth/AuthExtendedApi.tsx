import { api } from "../MainApi";
import { AuthType } from "../Interfaces";
import AuthEnhancedApi from "./AuthEnhancedApi";
const AuthExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthType, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
  overrideExisting: true,
});
AuthEnhancedApi();

export const {useLoginMutation} = AuthExtendedApi;

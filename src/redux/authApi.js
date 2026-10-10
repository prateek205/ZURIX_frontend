import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newData) => ({
        url: "/auth/register",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["Auth"],
    }),

    addLogin: builder.mutation({
      query: (addNew) => ({
        url: "/auth/login",
        method: "POST",
        body: addNew,
      }),
      invalidateTags: ["Auth", "Cart"],
    }),

    getProfile: builder.query({
      query: () => ({
        url: "/auth/getProfile",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),

    addLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth", "Cart"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useAddLoginMutation,
  useGetProfileQuery,
  useAddLogoutMutation,
} = authApi;

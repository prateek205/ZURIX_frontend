import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (addNew) => ({
        url: "/auth/login",
        method: "POST",
        body: addNew,
      }),
      invalidateTags: ["Auth"],
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
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useAddLoginMutation, useGetProfileQuery, useAddLogoutMutation } =
  authApi;

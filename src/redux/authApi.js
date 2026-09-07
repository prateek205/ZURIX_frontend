import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (addNew) => ({
        url: "/login",
        method: "POST",
        body: addNew,
      }),
      invalidateTags: ["Auth"],
    }),

    getProfile: builder.query({
      query: () => ({
        url: "/getProfile",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),

    addLogout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useAddLoginMutation, useGetProfileQuery, useAddLogoutMutation } =
  authApi;

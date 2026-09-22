import { baseApi } from "./baseApi";

export const addressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAddress: builder.mutation({
      query: (newBody) => ({
        url: "/address/createAddress",
        method: "POST",
        body: newBody,
      }),
      invalidatesTags: ["Address"],
    }),

    getAllAddress: (builder) => ({
      query: ({ sort }) => ({
        url: "/address/getAllAddress",
        params: {
          sort,
        },
        method: "GET",
      }),
      providesTags: ["Address"],
    }),
  }),
});

const { useAddAddressMutation, useGetAllAddressQuery } = addressApi;

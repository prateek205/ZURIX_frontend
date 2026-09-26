import { baseApi } from "./baseApi";

const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWishlist: builder.mutation({
      query: (newData) => ({
        url: "/wishlist/createWishlist",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["Wishlist"],
    }),

    getAllWishlist: builder.query({
      query: () => ({
        url: "/wishlist/getAllWishlist",
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),

    deleteWishlist: builder.mutation({
      query: (id) => ({
        url: "/wishlist/deleteWishlist",
        method: "DELETE",
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useCreateWishlistMutation,
  useGetAllWishlistQuery,
  useDeleteWishlistMutation,
} = wishlistApi;

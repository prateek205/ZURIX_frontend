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
  }),
});

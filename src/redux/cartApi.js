import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (newData) => ({
        url: "/cart/addToCart",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["Cart"],
    }),

    getAllCarts: builder.query({
      query: () => ({
        url: "/cart/getAllCarts",
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),

    updateCart: builder.mutation({
      query: ({ itemId, quantity }) => ({
        url: `/cart/updateCart/${itemId}`,
        method: "PUT",
        body: {quantity},
      }),
      invalidatesTags: ["Cart"],
    }),

    deleteCartItem: builder.mutation({
      query: (itemId) => ({
        url: `/cart/removeCart/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartsQuery,
  useUpdateCartMutation,
  useDeleteCartItemMutation,
} = cartApi;

import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (newData) => ({
        url: "/cart/addToCart",
        method: "POST",
        body:newData,
      }),
      invalidatesTags: ["Cart"],
    }),

    updateCart: builder.mutation({
      query: (id, newData) => ({
        url: `/cart/updateCart/${id}`,
        method: "PUT",
        body: newData,
      }),
      invalidatesTags: ["Cart"],
    }),

    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/removeCart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteCartItemMutation,
} = cartApi;

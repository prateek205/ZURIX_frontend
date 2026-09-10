import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/order/createOrder",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["Order"],
    }),

    getAllOrder: builder.query({
      query: () => ({
        url: "/order/getAllOrders",
        method: "GET",
      }),
      providesTags: ["Order"],
    }),

    getOrderById: builder.query({
      query: (id) => ({
        url: `/order/getOrderById/${id}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),

    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `/order/cancelOrder/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useGetOrderByIdQuery,
  useCancelOrderMutation,
} = orderApi;

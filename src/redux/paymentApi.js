import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRazorpayOrder: builder.mutation({
      query: () => ({
        url: "/payment/create-order",
        method: "POST",
      }),
    }),

    verifyRazorpayPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payment/verify-payment",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags:["Carts","Order"]
    }),
  }),
});

export const {
  useCreateRazorpayOrderMutation,
  useVerifyRazorpayPaymentMutation,
} = paymentApi;

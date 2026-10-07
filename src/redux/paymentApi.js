import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRazorpayOrder: builder.mutation({
      query: (paymentData) => ({
        url: "/payment/create-order",
        method: "POST",
        body:paymentData
      }),
    }),

    verifyRazorpayPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payment/verify-payment",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags:["Cart","Order"]
    }),
  }),
});

export const {
  useCreateRazorpayOrderMutation,
  useVerifyRazorpayPaymentMutation,
} = paymentApi;

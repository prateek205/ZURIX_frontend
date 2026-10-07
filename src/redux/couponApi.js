import { baseApi } from "./baseApi";

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postCoupon: builder.mutation({
      query: (newData) => {
        url: "/coupen/createCoupen";
        method: "POST";
        body: newData;
      },
      invalidatesTags: ["Coupon"],
    }),

    getAllCoupen: builder.query({
      query: () => {
        url: "/coupen/getAllCoupen";
        method: "GET";
      },
      providesTags: ["Coupon"],
    }),

    getCoupenCode: builder.query({
      query: (id) => {
        url: `/coupen/getCoupenByCode/${id}`;
        method: "GET";
      },
      providesTags: ["Coupon"],
    }),

    applyCouponCode: builder.mutation({
      query: (newCoupon) => {
        url: "/coupon/applyCoupon";
        method: "POST";
        body: newCoupon;
      },
      invalidatesTags: ["Coupon"],
    }),

    updateCouponCode: builder.mutation({
      query: (id, newData) => {
        url: `/coupon/updateCoupon/${id}`;
        method: "PUT";
        body: newData;
      },
      invalidatesTags: ["Coupon"],
    }),

    deleteCouponCode: builder.mutation({
      query: (id) => {
        url: `/coupen/deleteCoupen/${id}`;
        method: "DELETE";
      },
      invalidatesTags: ["Coupon"],
    }),
  }),
});

export const {
  usePostCoupenMutation,
  useGetAllCoupenQuery,
  useGetCoupenCodeQuery,
  useApplyCouponCodeMutation,
  useUpdateCouponCodeMutation,
  useDeleteCouponCodeMutation,
} = couponApi;

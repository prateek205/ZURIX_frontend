import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: ({ search, filter }) => ({
        url: "/category/getAllCategory",
        params: {
          search,
          filter,
        },
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    getCategoryById: builder.query({
      query: (id) => ({
        url: `/category/getCategoryById/${id}`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    updateCategoryById: builder.mutation({
      query: (id, newData) => ({
        url: `/category/updateCategoryById/${id}`,
        method: "PUT",
        body: newData,
      }),
      invalidatesTags: ["Category"],
    }),

    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `/category/deleteCategoryById/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryByIdMutation,
  useDeleteCategoryByIdMutation,
} = categoryApi;

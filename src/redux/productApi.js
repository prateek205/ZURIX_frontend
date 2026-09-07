import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        sort,
        search,
        filter,
        minPrice,
        maxPrice,
        colors,
        size,
        category,
      }) => ({
        url: "/products/getAllProducts",
        params: {
          sort,
          search,
          filter,
          minPrice,
          maxPrice,
          colors,
          size,
          category,
        },
        method: "GET",
      }),
      provideTags: ["Product"],
    }),

    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/addProducts",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),

    getProductById: builder.query({
      query: () => ({
        url: `/products/getProductById/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    updateProductById: builder.mutation({
      query: (id, updateData) => ({
        url: `/products/updateProductById/${id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProductById: builder.mutation({
      query: ({ id }) => ({
        url: `/products/deleteProductById/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddProductMutation,
  useGetProductByIdQuery,
  useUpdateProductByIdMutation,
  useDeleteProductByIdMutation,
} = productApi;

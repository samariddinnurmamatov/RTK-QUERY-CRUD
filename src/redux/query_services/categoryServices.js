import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryServices = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64b53eb3f3dbab5a95c7002a.mockapi.io/",
  }),
  // tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: ({ search }) => {
        return `category?search=${search}`;
      },
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      // providesTags: ["Category"],
    }),
    // getCategory: builder.query({
    //   query: (id) => {
    //     return `category/${id}`;
    //   },
    //   // providesTags: ["Category"],
    // }),
    // getCategory
    addCategory: builder.mutation({
      query: (body) => ({
        url: "category",
        method: "POST",
        body,
      }),
      // invalidatesTags: ["Category"],
    }),
    // updateCategory,
    // updateCategory: builder.mutation({
    //   query: (body, id) => ({
    //     url: `category/${id}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   // invalidatesTags: ["Category"],
    // }),
    // deleteCategory,
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  // useGetCategoryQuery,
  useAddCategoryMutation,
  // useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryServices;

export default categoryServices;

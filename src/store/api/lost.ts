import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWithReauth } from "./helper";
import { TRegisterLostItemsDto } from "../types/lost";
import { TItem } from "../types/constant";
export const lostApi = createApi({
  reducerPath: "lostApi",
  baseQuery: baseQuery,
  tagTypes: ["AllLostItems", "UserLostItems"],
  endpoints: (builder) => ({
    registerLostItems: builder.mutation<any, TRegisterLostItemsDto>({
      query: (body) => ({
        url: "items/lost/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["AllLostItems", "UserLostItems"],
    }),
    getLostItemsById: builder.mutation<TItem, string>({
      query: (itemId) => ({
        url: `items/lost/${itemId}`,
        method: "GET",
      }),
    }),
    getAllUserLostItems: builder.mutation<any, TRegisterLostItemsDto>({
      query: () => ({
        url: "items/lost",
        method: "GET",
      }),
      providesTags: ["UserLostItems"],
    }),
    getAllLostItems: builder.mutation<any, any>({
      query: () => ({
        url: "items/lost/all",
        method: "GET",
      }),
      providesTags: ["AllLostItems"],
    }),
    deleteLostItemById: builder.mutation<any, TRegisterLostItemsDto>({
      query: (itemId) => ({
        url: `items/lost/${itemId}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllLostItems", "UserLostItems"],
    }),
  }),
});

export const {
  useGetAllLostItemsMutation,
  useDeleteLostItemByIdMutation,
  useGetAllUserLostItemsMutation,
  useRegisterLostItemsMutation,
  useGetLostItemsByIdMutation,
} = lostApi;

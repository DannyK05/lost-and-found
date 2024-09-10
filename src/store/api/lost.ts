import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./helper";
import { TRegisterLostItemsDto } from "../types/lost";
import { TItem } from "../types/constant";
export const lostApi = createApi({
  reducerPath: "lostApi",
  baseQuery: baseQueryWithReauth,
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
    getLostItemsById: builder.query<TItem, string>({
      query: (itemId) => ({
        url: `items/lost/${itemId}`,
        method: "GET",
      }),
    }),
    getAllUserLostItems: builder.query<any, TRegisterLostItemsDto>({
      query: () => ({
        url: "items/lost",
        method: "GET",
      }),
      providesTags: ["UserLostItems"],
    }),
    getAllLostItems: builder.query<any, any>({
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
    claimLostItem: builder.mutation<any, TRegisterLostItemsDto>({
      query: (itemId) => ({
        url: "items/claim",
        method: "POST",
        itemId,
      }),
      invalidatesTags: ["AllLostItems", "UserLostItems"],
    }),
  }),
});

export const {
  useGetAllLostItemsQuery,
  useDeleteLostItemByIdMutation,
  useGetAllUserLostItemsQuery,
  useRegisterLostItemsMutation,
  useGetLostItemsByIdQuery,
  useClaimLostItemMutation,
} = lostApi;

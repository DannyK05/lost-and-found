import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWithReauth } from "./helper";
import { TRegisterFoundItemsDto } from "../types/found";
import { TItem } from "../types/constant";
export const foundApi = createApi({
  reducerPath: "foundApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["AllFoundItems", "UserFoundItems"],
  endpoints: (builder) => ({
    registerFoundItems: builder.mutation<any, TRegisterFoundItemsDto>({
      query: (body) => ({
        url: "items/found/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["AllFoundItems"],
    }),
    getFoundItemsById: builder.mutation<TItem, string>({
      query: (itemId) => ({
        url: `items/found/${itemId}`,
        method: "GET",
      }),
    }),
    getAllUserFoundItems: builder.mutation<any, TRegisterFoundItemsDto>({
      query: () => ({
        url: "items/found",
        method: "GET",
      }),
      providesTags: ["UserFoundItems"],
    }),
    getAllFoundItems: builder.mutation<any, any>({
      query: () => ({
        url: "items/found/all",
        method: "GET",
      }),
      providesTags: ["AllFoundItems"],
    }),
    deleteFoundItemById: builder.mutation<any, TRegisterFoundItemsDto>({
      query: (itemId) => ({
        url: `items/found/${itemId}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllFoundItems", "UserFoundItems"],
    }),
    claimItem: builder.mutation<any, TRegisterFoundItemsDto>({
      query: (itemId) => ({
        url: "items/claim",
        method: "POST",
        itemId,
      }),
      invalidatesTags: ["AllFoundItems", "UserFoundItems"],
    }),
  }),
});

export const {
  useGetAllFoundItemsMutation,
  useClaimItemMutation,
  useDeleteFoundItemByIdMutation,
  useGetAllUserFoundItemsMutation,
  useRegisterFoundItemsMutation,
  useGetFoundItemsByIdMutation,
} = foundApi;

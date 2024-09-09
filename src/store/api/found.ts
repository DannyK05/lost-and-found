import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import { TRegisterFoundItemsDto } from "../types/found";
import { TItem } from "../types/constant";
export const foundApi = createApi({
  reducerPath: "foundApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    registerFoundItems: builder.mutation<any, TRegisterFoundItemsDto>({
      query: (body) => ({
        url: "items/found/register",
        method: "POST",
        body,
      }),
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
    }),
    getAllFoundItems: builder.mutation<any, any>({
      query: () => ({
        url: "items/found/all",
        method: "GET",
      }),
    }),
    deleteFoundItemById: builder.mutation<any, TRegisterFoundItemsDto>({
      query: (itemId) => ({
        url: `items/found/${itemId}/delete`,
        method: "DELETE",
      }),
    }),
    claimItem: builder.mutation<any, TRegisterFoundItemsDto>({
      query: (itemId) => ({
        url: "items/claim",
        method: "POST",
        itemId,
      }),
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

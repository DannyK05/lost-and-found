import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./helper";
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
    getFoundItemsById: builder.query<TItem, string>({
      query: (itemId) => ({
        url: `items/found/${itemId}`,
        method: "GET",
      }),
    }),
    getAllUserFoundItems: builder.query<void, TRegisterFoundItemsDto>({
      query: () => ({
        url: "items/found",
        method: "GET",
      }),
      providesTags: ["UserFoundItems"],
    }),
    getAllFoundItems: builder.query<void, any>({
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
    claimFoundItem: builder.mutation<any, TRegisterFoundItemsDto>({
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
  useGetAllFoundItemsQuery,
  useClaimFoundItemMutation,
  useDeleteFoundItemByIdMutation,
  useGetAllUserFoundItemsQuery,
  useRegisterFoundItemsMutation,
  useGetFoundItemsByIdQuery,
} = foundApi;

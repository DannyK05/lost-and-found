import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./helper";
import {
  TGetAllFoundItemsResponse,
  TGetAllUserFoundItemsResponse,
  TRegisterFoundItemsDto,
} from "../types/found";
import { TFoundItemResponse } from "../types/constant";
export const foundApi = createApi({
  reducerPath: "foundApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["AllFoundItems", "UserFoundItems"],
  endpoints: (builder) => ({
    registerFoundItems: builder.mutation<void, TRegisterFoundItemsDto>({
      query: (body) => ({
        url: "items/found/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["AllFoundItems"],
    }),
    getFoundItemsById: builder.query<TFoundItemResponse, string>({
      query: (itemId) => ({
        url: `items/found/${itemId}`,
        method: "GET",
      }),
    }),
    getAllUserFoundItems: builder.query<TGetAllUserFoundItemsResponse, void>({
      query: () => ({
        url: "items/found",
        method: "GET",
      }),
      providesTags: ["UserFoundItems"],
    }),
    getAllFoundItems: builder.query<TGetAllFoundItemsResponse, void>({
      query: () => ({
        url: "items/found/all",
        method: "GET",
      }),
      providesTags: ["AllFoundItems"],
    }),
    deleteFoundItemById: builder.mutation<void, string>({
      query: (itemId) => ({
        url: `items/found/${itemId}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllFoundItems", "UserFoundItems"],
    }),
    claimFoundItem: builder.mutation<void, string>({
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

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./helper";
import { TRegisterLostItemsDto } from "../types/lost";
import { TLostItemResponse } from "../types/constant";
export const lostApi = createApi({
  reducerPath: "lostApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["AllLostItems", "UserLostItems"],
  endpoints: (builder) => ({
    registerLostItems: builder.mutation<void, TRegisterLostItemsDto>({
      query: (body) => ({
        url: "items/lost/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["AllLostItems", "UserLostItems"],
    }),
    getLostItemsById: builder.query<TLostItemResponse, string>({
      query: (itemId) => ({
        url: `items/lost/${itemId}`,
        method: "GET",
      }),
    }),
    getAllUserLostItems: builder.query<any, void>({
      query: () => ({
        url: "items/lost",
        method: "GET",
      }),
      providesTags: ["UserLostItems"],
    }),
    getAllLostItems: builder.query<any, void>({
      query: () => ({
        url: "items/lost/all",
        method: "GET",
      }),
      providesTags: ["AllLostItems"],
    }),
    deleteLostItemById: builder.mutation<any, string>({
      query: (itemId) => ({
        url: `items/lost/${itemId}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllLostItems", "UserLostItems"],
    }),
    claimLostItem: builder.mutation<any, string>({
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

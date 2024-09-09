import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import { TRegisterLostItemsDto } from "../types/lost";
import { TItem } from "../types/constant";
export const lostApi = createApi({
  reducerPath: "lostApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    registerLostItems: builder.mutation<any, TRegisterLostItemsDto>({
      query: (body) => ({
        url: "items/lost/register",
        method: "POST",
        body,
      }),
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
    }),
    getAllLostItems: builder.mutation<any, any>({
      query: () => ({
        url: "items/lost/all",
        method: "GET",
      }),
    }),
    deleteLostItemById: builder.mutation<any, TRegisterLostItemsDto>({
      query: (itemId) => ({
        url: `items/lost/${itemId}/delete`,
        method: "DELETE",
      }),
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

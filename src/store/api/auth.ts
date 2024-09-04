import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import { TLoginDto, TRegisterDto } from "../types/auth";

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<any, TLoginDto>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<void, TRegisterDto>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

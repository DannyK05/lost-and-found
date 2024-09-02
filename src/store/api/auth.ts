import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  enpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

e;

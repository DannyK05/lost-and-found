import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { selectCurrentUserToken } from "../selector";

export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_PUBLIC_BASE_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const token = selectCurrentUserToken(getState());
    console.log("Token:", token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

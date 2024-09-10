import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { selectCurrentUserToken } from "../selector";
import { Mutex } from "async-mutex";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../utilities/storage";
import {
  LOST_AND_FOUND_TOKEN,
  LOST_AND_FOUND_USER,
} from "../../utilities/constant";

// create a new mutex
const mutex = new Mutex();
export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_PUBLIC_BASE_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const token =
      selectCurrentUserToken(getState()) ||
      getFromLocalStorage(LOST_AND_FOUND_TOKEN);
    console.log("Token:", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  // Handle 401 (Unauthorized)
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // Try refreshing token here if applicable, else redirect
        if (typeof window !== "undefined") {
          window.location.href = "/";
          removeFromLocalStorage(LOST_AND_FOUND_USER);
          removeFromLocalStorage(LOST_AND_FOUND_TOKEN);
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  // Handle 500 (Invalid Token) - Custom check
  if (
    result.error &&
    result.error.status === 500 &&
    result.error.data.message === "invalid token"
  ) {
    // Redirect for invalid token
    if (typeof window !== "undefined") {
      window.location.href = "/";
      removeFromLocalStorage(LOST_AND_FOUND_USER);
      removeFromLocalStorage(LOST_AND_FOUND_TOKEN);
    }
  }

  return result;
};

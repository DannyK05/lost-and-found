import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { authApi } from "./api/auth";

export const store = configureStore({
  reducer: { auth: authReducer, [authApi.reducerPath]: authApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

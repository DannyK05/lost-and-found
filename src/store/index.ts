import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { authApi } from "./api/auth";
import { foundApi } from "./api/found";
import { lostApi } from "./api/lost";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [foundApi.reducerPath]: foundApi.reducer,
    [lostApi.reducerPath]: lostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      foundApi.middleware,
      lostApi.middleware
    ),
});

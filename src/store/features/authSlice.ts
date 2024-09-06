import { createSlice } from "@reduxjs/toolkit";
import {
  LOST_AND_FOUND_TOKEN,
  LOST_AND_FOUND_USER,
} from "../../utilities/constant";
import { getFromLocalStorage } from "../../utilities/storage";
import { TUser } from "../types/auth";

type TAuthState = {
  user: null | string | TUser;
  token: null | string;
};
const initialState: TAuthState = {
  user: getFromLocalStorage(LOST_AND_FOUND_USER)
    ? JSON.parse(getFromLocalStorage(LOST_AND_FOUND_USER) || "{}")
    : null,
  token: getFromLocalStorage(LOST_AND_FOUND_TOKEN)
    ? getFromLocalStorage(LOST_AND_FOUND_TOKEN)
    : null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
    removeCredentials: (state) => {
      state.user = "";
      state.token = "";
    },
  },
});

export const { setCredentials, removeCredentials } = authSlice.actions;
export default authSlice.reducer;

import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
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

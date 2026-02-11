import { LOST_AND_FOUND_TOKEN } from "../../lib/constant";
import { getFromLocalStorage } from "../../lib/storage";

export const selectCurrentUser = (state) =>
  state.auth.user || getFromLocalStorage(LOST_AND_FOUND_TOKEN);

export const selectCurrentUserToken = (state) =>
  state.auth.token || getFromLocalStorage(LOST_AND_FOUND_TOKEN);

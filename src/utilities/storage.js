export const getFromLocalStorage = (key) => {
  if (!key || typeof window == "undefined") {
    return "";
  } else {
    return window.localStorage.getItem(key);
  }
};

export const removeFromLocalStorage = (key) => {
  if (!key || typeof window == "undefined") {
    return "";
  } else {
    return window.localStorage.removeItem(key);
  }
};

export const setToLocalStorage = (key, value) => {
  if (!key || typeof window == "undefined") {
    return "";
  } else {
    return window.localStorage.setItem(key, value);
  }
};

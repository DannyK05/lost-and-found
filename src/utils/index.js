export const shortenString = (str, count = 20) => {
  return str.length > count ? str.slice(0, count) + "..." : str;
};

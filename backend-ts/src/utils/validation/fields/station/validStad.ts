export const validstad = (stad: any) => {
  if (typeof stad === "string") {
    if (stad.length < 200) {
      return true;
    } else {
      return false;
    }
  }
};

export const validstad = (stad: any) => {
  if (typeof stad === "string") {
    if (stad.length < 200) {
      return true;
    }
  }

  return false;
};

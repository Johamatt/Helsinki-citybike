export const validX = (x: any) => {
  if (typeof x !== "string") {
    return false;
  }
  if (!Number.isNaN(x) && !Number.isInteger(x)) {
    return true;
  }
  return false;
};

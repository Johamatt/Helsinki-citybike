export const validY = (y: any) => {
  if (typeof y !== "string") {
    return false;
  }
  if (!Number.isNaN(y) && !Number.isInteger(y)) {
    return true;
  }
  return false;
};

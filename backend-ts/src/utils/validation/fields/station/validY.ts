export const validY = (y: any) => {
  if (typeof y === "number" && !Number.isNaN(y) && !Number.isInteger(y)) {
    return true;
  }
  return false;
};

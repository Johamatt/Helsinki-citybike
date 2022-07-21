export const validKapasiteet = (kapasiteet: any) => {
  if (typeof kapasiteet !== "string") {
    return false;
  }
  const num = Number(kapasiteet);
  if (Number.isInteger(num) && num > 0) {
    return true;
  }
  return false;
};

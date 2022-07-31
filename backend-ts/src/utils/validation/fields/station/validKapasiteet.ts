export const validKapasiteet = (kapasiteet: any) => {
  const num = Number(kapasiteet);
  if (Number.isSafeInteger(num) && num > 0) {
    return true;
  }
  
  return false;
};

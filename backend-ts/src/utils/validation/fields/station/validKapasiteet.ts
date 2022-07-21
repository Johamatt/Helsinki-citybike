export const validKapasiteet = (kapasiteet: any) => {
  if (Number.isInteger(kapasiteet) && kapasiteet >= 1) {
    return true;
  } else {
    false;
  }
};

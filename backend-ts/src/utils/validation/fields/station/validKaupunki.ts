export const validKaupunki = (kaupunki: any) => {
  if (typeof kaupunki === "string") {
    if (kaupunki.length < 200) {
      return true;
    }
  }
  
  return false;
};

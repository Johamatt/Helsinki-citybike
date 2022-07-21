export const validOsoite = (osoite: any) => {
  if (typeof osoite === "string") {
    if (osoite.length < 200) {
      return true;
    } else {
      return false;
    }
  }
};

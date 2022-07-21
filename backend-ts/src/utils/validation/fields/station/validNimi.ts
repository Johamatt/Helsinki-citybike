export const validNimi = (nimi: any) => {
    if (typeof nimi === "string") {
    if (nimi.length < 200) {
      return true;
    } else {
      return false;
    }
  }
};

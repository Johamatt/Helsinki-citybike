export const validOperaattor = (operaattor: any) => {
  if (typeof operaattor === "string") {
    if (operaattor.length < 200) {
      return true;
    }
  }

  return false;
};

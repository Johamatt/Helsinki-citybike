export const validName = (name: any) => {
  if (typeof name === "string") {
    if (name.length < 200) {
      return true;
    }
  }
  
  return false;
};

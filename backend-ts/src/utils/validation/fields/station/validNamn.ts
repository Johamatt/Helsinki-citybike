export const validNamn = (namn: any) => {
  if (typeof namn === "string") {
    if (namn.length < 200) {
      return true;
    } 
  }
  
  return false;
};

export const validX = (x: any) => {
    if (typeof x === "number" && !Number.isNaN(x) && !Number.isInteger(x)) {
      return true;
    }
  
    return false;
  };

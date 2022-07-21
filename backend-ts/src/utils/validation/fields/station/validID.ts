export const validId = (Id: any) => {
    if (Number.isInteger(Id) && Id >= 0) {
      return true;
    } else {
      false;
    }
  };

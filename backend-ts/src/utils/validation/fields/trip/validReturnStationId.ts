export const validReturnStationId = (value: any) => {
  if (Number.isSafeInteger(value) && value > 0) {
    return true;
  }

  return false;
};

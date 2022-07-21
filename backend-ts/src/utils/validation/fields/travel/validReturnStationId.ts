export const validReturnStationId = (value: any) => {
  if (Number.isInteger(value) && value > 0) {
    return true;
  } else {
    return false;
  }
};

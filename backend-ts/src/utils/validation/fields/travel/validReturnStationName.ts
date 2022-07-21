export const validReturnStationName = (ReturnStationName: any) => {
  if (ReturnStationName.length < 200) {
    return true;
  } else {
    return false;
  }
};

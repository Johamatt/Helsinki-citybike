export const validReturnStationName = (ReturnStationName: any) => {
  if (ReturnStationName.length > 2 || ReturnStationName.length < 200) {
    return true;
  } else {
    return false;
  }
};

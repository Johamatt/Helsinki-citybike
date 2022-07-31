export const validReturnStationName = (ReturnStationName: any) => {
  if (typeof ReturnStationName === "string") {
    if (ReturnStationName.length < 200) {
      return true;
    }

    return false;
  }
};

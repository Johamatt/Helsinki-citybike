export const validDepartureStationName = (DepartureStationName: any) => {
  if (DepartureStationName.length < 200) {
    return true;
  } else {
    return false;
  }
};

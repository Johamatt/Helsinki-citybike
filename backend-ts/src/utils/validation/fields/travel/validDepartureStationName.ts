export const validDepartureStationName = (DepartureStationName: any) => {
    if (typeof DepartureStationName === "string") {
    if (DepartureStationName.length < 200) {
      return true;
    } else {
      return false;
    }
  }
};

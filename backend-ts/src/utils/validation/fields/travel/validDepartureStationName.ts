export const validDepartureStationName = (DepartureStationName: any) => {
    if (DepartureStationName.length > 2 || DepartureStationName.length < 200) {
      return true;
    } else {
      return false;
    }
  };

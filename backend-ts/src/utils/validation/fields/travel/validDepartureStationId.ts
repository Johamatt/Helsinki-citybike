export const validDepartureStationId = (DepartureStationId: any) => {
    if (Number.isInteger(DepartureStationId) && DepartureStationId > 0) {
      return true;
    } else {
      false;
    }
  };

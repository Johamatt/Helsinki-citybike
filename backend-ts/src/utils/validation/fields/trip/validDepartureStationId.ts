export const validDepartureStationId = (DepartureStationId: any) => {
  if (Number.isSafeInteger(DepartureStationId) && DepartureStationId > 0) {
    return true;
  }

  return false;
};

export const validGetPaginatedFilterTrip = (
  page: any,
  size: any,
  column: any,
  order: any
) => {
  if (
    typeof page !== "string" &&
    typeof size !== "string" &&
    typeof column !== "string" &&
    typeof order !== "string"
  ) {
    return false;
  }
  const pageNum = Number(page);
  const sizeNum = Number(size);
  const orderStr = order.toLowerCase();

  if (
    Number.isInteger(pageNum) &&
    pageNum >= 0 &&
    Number.isInteger(sizeNum) &&
    sizeNum > 0
  ) {
    if (
      column === "id" ||
      column === "returnTime" ||
      column === "departureTime" ||
      column === "departureStationId" ||
      column === "departureStationName" ||
      column === "returnStationId" ||
      column === "returnStationName" ||
      column === "distanceInMeters" ||
      column === "durationInSeconds"
    ) {
      if (orderStr === "asc" || orderStr === "desc") {
        return true;
      }
    }
  }
  return false;
};

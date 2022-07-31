import Trip from "../../../models/trip";

export const validGetPaginatedFilterTrip = (query: any) => {
  const pageNum = Number(query.page);
  const sizeNum = Number(query.size);
  const orderStr = query.order.toLowerCase();
  const column = query.column;

  if (
    Number.isInteger(pageNum) &&
    pageNum >= 0 &&
    Number.isInteger(sizeNum) &&
    sizeNum > 0 &&
    Object.keys(Trip.getAttributes()).includes(column) &&
    (orderStr === "asc" || orderStr === "desc")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validGetPaginatedFilterStation = (
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
    console.log("hep");
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
    console.log("hep2");
    if (
      column === "FID" ||
      column === "id" ||
      column === "nimi" ||
      column === "namn" ||
      column === "name" ||
      column === "osoite" ||
      column === "adress" ||
      column === "kaupunki" ||
      column === "stad" ||
      column === "operaattor" ||
      column === "kapasiteet" ||
      column === "x" ||
      column === "y"
    ) {
      console.log("hep52");
      if (orderStr === "asc" || orderStr === "desc") {
        return true;
      }
    }
  }
  return false;
};

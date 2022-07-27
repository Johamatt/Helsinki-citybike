export const validGetAll = (page: any, size: any) => {
  if (typeof page !== "string" && typeof size !== "string") {
    return false;
  }
  const pageNum = Number(page);
  const sizeNum = Number(size);
  if (
    Number.isInteger(pageNum) &&
    pageNum > 0 &&
    Number.isInteger(sizeNum) &&
    sizeNum > 0
  ) {
    return true;
  }
  return false;
};

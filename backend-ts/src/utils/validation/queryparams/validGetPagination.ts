export const validGetPagination = (query: any) => {
  const pageNum = Number(query.page);
  const sizeNum = Number(query.size);
  if (
    Number.isInteger(pageNum) &&
    pageNum >= 0 &&
    Number.isInteger(sizeNum) &&
    sizeNum > 0
  ) {
    return true;
  }
  return false;
};

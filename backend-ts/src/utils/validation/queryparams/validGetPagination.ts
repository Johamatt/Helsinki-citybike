export const validGetPagination = (query: any) => {
  const pageNum = Number(query.page);
  const sizeNum = Number(query.size);
  if (
    Number.isSafeInteger(pageNum) &&
    pageNum >= 0 &&
    Number.isSafeInteger(sizeNum) &&
    sizeNum > 0
  ) {
    return true;
  }
  return false;
};

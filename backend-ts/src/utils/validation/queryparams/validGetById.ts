export const validGetId = (query: any) => {
  const id = Number(query.id);
  if (Number.isInteger(id) && id > 0) {
    return true;
  }
  return false;
};

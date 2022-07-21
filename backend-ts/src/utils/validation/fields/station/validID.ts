export const validId = (id: any) => {
  if (typeof id !== "string") {
    return false;
  }
  const num = Number(id);
  if (Number.isInteger(num) && num > 0) {
    return true;
  }
  return false;
};

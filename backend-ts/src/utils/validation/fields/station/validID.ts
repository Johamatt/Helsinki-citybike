export const validId = (id: any) => {
  const num = Number(id);

  if (Number.isSafeInteger(num) && num > 0) {
    return true;
  }

  return false;
};

export const validDurationInSeconds = (DurationInSeconds: any) => {
  if (Number.isSafeInteger(DurationInSeconds) && DurationInSeconds >= 10) {
    return true;
  }

  return false;
};

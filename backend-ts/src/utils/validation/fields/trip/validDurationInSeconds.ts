export const validDurationInSeconds = (DurationInSeconds: any) => {
  if (Number.isInteger(DurationInSeconds) && DurationInSeconds >= 10) {
    return true;
  } else {
    false;
  }
};

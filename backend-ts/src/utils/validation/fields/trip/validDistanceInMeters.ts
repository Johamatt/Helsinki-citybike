export const validDistanceInMeters = (DistanceInMeters: any) => {
  if (Number.isSafeInteger(DistanceInMeters) && DistanceInMeters >= 10) {
    return true;
  }

  return false;
};

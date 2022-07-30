export const validDistanceInMeters = (DistanceInMeters: any) => {
    if (Number.isInteger(DistanceInMeters) && DistanceInMeters >= 10) {
        return true;
      } else {
        false;
      }
    };

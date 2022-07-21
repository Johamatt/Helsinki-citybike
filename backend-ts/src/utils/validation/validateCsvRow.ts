import { validDepartureStationId } from "./fields/travel/validDepartureStationId";
import { validDepartureStationName } from "./fields/travel/validDepartureStationName";
import { validDepartureTime } from "./fields/travel/validDepartureTime";
import { validDistanceInMeters } from "./fields/travel/validDistanceInMeters";
import { validDurationInSeconds } from "./fields/travel/validDurationInSeconds";
import { validReturnStationId } from "./fields/travel/validReturnStationId";
import { validReturnStationName } from "./fields/travel/validReturnStationName";
import { validReturnTime } from "./fields/travel/validReturnTime";

export const validTravelCsvRow = (row: any) => {
  if (
    validDepartureStationId(row.departureStationId) &&
    validDepartureStationName(row.departureStationName) &&
    validDepartureTime(row.departureTime) &&
    validDistanceInMeters(row.distanceInMeters) &&
    validDurationInSeconds(row.durationInSeconds) &&
    validReturnStationId(row.returnStationId) &&
    validReturnStationName(row.returnStationName) &&
    validReturnTime(row.returnTime)
  ) {
    return true;
  }
  return false;
};

export const validateStationCSV = (row: {}) => {};

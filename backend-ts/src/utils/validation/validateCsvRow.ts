import { validAdress } from "./fields/station/validAdress";
import { validId } from "./fields/station/validID";
import { validKapasiteet } from "./fields/station/validKapasiteet";
import { validKaupunki } from "./fields/station/validKaupunki";
import { validName } from "./fields/station/validName";
import { validNamn } from "./fields/station/validNamn";
import { validNimi } from "./fields/station/validNimi";
import { validOperaattor } from "./fields/station/validOperaattor";
import { validOsoite } from "./fields/station/validOsoite";
import { validstad } from "./fields/station/validStad";
import { validX } from "./fields/station/validX";
import { validY } from "./fields/station/validY";
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

export const validStationCsvRow = (row: any) => {
  if (
    validAdress(row.adress) &&
    validId(row.id) &&
    validKapasiteet(row.kapasiteet) &&
    validKaupunki(row.kaupunki) &&
    validName(row.name) &&
    validNamn(row.namn) &&
    validNimi(row.nimi) &&
    validOperaattor(row.operaattor) &&
    validOsoite(row.osoite) &&
    validstad(row.stad) &&
    validX(row.x) &&
    validY(row.y)
  ) {
    return true;
  } else {
    return false;
  }
};

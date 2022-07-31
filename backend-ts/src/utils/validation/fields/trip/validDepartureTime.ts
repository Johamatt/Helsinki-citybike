import moment from "moment";

export const validDepartureTime = (DepartureTime: any) => {
  if (moment(DepartureTime, moment.defaultFormat, true).isValid()) {
    return true;
  }

  return false;
};

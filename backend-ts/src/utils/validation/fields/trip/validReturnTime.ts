import moment from "moment";

export const validReturnTime = (ReturnTime: any) => {
  if (moment(ReturnTime, moment.defaultFormat, true).isValid()) {
    return true;
  }

  return false;
};

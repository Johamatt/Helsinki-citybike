import axios, { AxiosResponse } from "axios";
import { ResponseData, Station, Trip } from "../types/responseTypes";

export const getStationsPagination = async (
  page: number
): Promise<Station[] | undefined> => {
  let data;
  try {
    data = await axios.get(
      `http://localhost:4000/stations/pagination/?page=${page}&size=10`
    );
  } catch (err) {
    console.log(err);
  }
  return data?.data.data.rows;
};

export const getTripsPagination = async (
  page: number
): Promise<Trip[] | undefined> => {
  let data;
  try {
    data = await axios.get(
      `http://localhost:4000/trips/pagination/?page=${page}&size=10`
    );
  } catch (err) {
    console.log(err);
  }
  return data?.data.data.rows;
};

export const getSingleStation = async (
  id: number | undefined
): Promise<any | undefined> => {
  let data;
  // localhost:4000/stations/1
  try {
    data = await axios.get(`http://localhost:4000/stations/${id}`);
  } catch (err) {
    console.log(err);
  }
  return data?.data;
};

import axios, { AxiosResponse } from "axios";
import { ResponseData, Station, Trip } from "../types/responseTypes";

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
  try {
    data = await axios.get(`http://localhost:4000/stations/${id}`);
  } catch (err) {
    console.log(err);
  }
  return data?.data;
};

export const getStationsFilterPagination = async (
  page: number,
  row: string,
  order: "ASC" | "DESC"
): Promise<any | undefined> => {
  let data;
  try {
    data = await axios.get(
      `http://localhost:4000/stations/paginationfiltering/?page=${page}&size=10&column=${row}&order=${order}`
    );
  } catch (err) {
    console.log(err);
  }
  return data?.data.data.rows;
};

export const getTripsFilterPagination = async (
  page: number,
  row: string,
  order: "ASC" | "DESC"
): Promise<any | undefined> => {
  let data;
  try {
    data = await axios.get(
      `http://localhost:4000/trips/paginationfiltering/?page=${page}&size=10&column=${row}&order=${order}`
    );
  } catch (err) {
    console.log(err);
  }
  return data?.data.data.rows;
};

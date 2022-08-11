import axios, { AxiosResponse } from "axios";
import { ResponseData } from "../types/responseTypes";

export const getdata = async (
  page: number,
  modelType: string
): Promise<ResponseData | undefined> => {
  let data;
  try {
    data = await axios.get(
      `http://localhost:4000/${modelType}/pagination/?page=${page}&size=10`
    );
  } catch (err) {
    console.log(err);
  }
  return data?.data.data;
};

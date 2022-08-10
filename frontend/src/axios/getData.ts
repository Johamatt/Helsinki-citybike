import axios, { AxiosResponse } from "axios";

export const getdata = async (
  file: File,
  modelType: string
): Promise<AxiosResponse<any, any> | undefined> => {
  let response;
  const formData = new FormData();
  formData.append("file", file);
  try {
    response = await axios.post(
      `http://localhost:4000/${modelType}/upload`,
      formData
    );
  } catch (err) {
    console.log(err);
  }

  return response;
};

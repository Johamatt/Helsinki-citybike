import axios, { AxiosResponse } from "axios";





export const postData = async (
  file: File,
  modelType: string
): Promise<AxiosResponse<any, any> | undefined> => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    return await axios.post(
      `http://localhost:4000/${modelType}/upload`,
      formData
    );
  } catch (err) {
    console.log(err);
  }
};

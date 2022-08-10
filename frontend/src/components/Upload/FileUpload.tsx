import { AxiosResponse } from "axios";
import React, { useRef, useState } from "react";
import { postData } from "../../axios/postData";
import "./FileUpload.css";

interface Props {
  modelType: string;
}

export const TripUpload: React.FC<Props> = ({ modelType }) => {
  const [file, setFile] = useState<File | null>();
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<
    AxiosResponse<any, any> | undefined
  >();

  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList) return;
    setFile(fileList[0]);
  };

  const uploadFile = async function (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    event.preventDefault();
    if (file) {
      setLoading(true);
      const res = await postData(file, modelType);
      setResponse(res);
      setIsFileUploaded(true);
      setLoading(false);
    }
  };

  console.log(response);
  return (
    <div className="content">
      <h1>Upload {modelType} </h1>
      <form className="upload">
        <div>
          <label className="file-upload">
            <input
              accept="text/csv"
              ref={inputRef}
              multiple={false}
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
            />
            Choose File
          </label>
          {file ? (
            <button className="btn" onClick={uploadFile}>
              Send
            </button>
          ) : (
            <div />
          )}
        </div>
      </form>{" "}
      {isFileUploaded ? (
        <div>
          <p>{file?.name} uploaded to database</p>
        </div>
      ) : (
        <div />
      )}
      {loading ? (
        <div>
          <p>loading . . .</p>
        </div>
      ) : (
        <div />
      )}
      {response !== undefined ? (
        <div>
          <p>{response?.data.dataModel}</p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

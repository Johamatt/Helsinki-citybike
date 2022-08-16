import { AxiosResponse } from "axios";
import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import { postData } from "../../axios/postData";
import "./FileUpload.css";
import { UploadReport } from "./UploadReport";

interface Props {
  modelType: "stations" | "trips";
}

export const FileUpload: React.FC<Props> = ({ modelType }) => {
  const [file, setFile] = useState<File | null>();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<
    AxiosResponse<any, any> | undefined
  >();

  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current)
      // add this
      lottie.loadAnimation({
        animationData: require("../../util/animations/loading.json"),
        renderer: "svg",
        container: element.current,
        autoplay: true,
        loop: true,
      });
  });

  const loadingAnimation = () => {};

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
      setLoading(false);
    }
  };

  return (
    <div>
      {!loading ? (
        <div className="d-flex flex-row align-items-center">
          <h1>Upload {modelType} </h1>
          <form className="upload">
            <div>
              <label className="upload-btn">
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
              {file && !loading ? (
                <button className="send-btn" onClick={uploadFile}>
                  Send
                </button>
              ) : (
                <div />
              )}
            </div>
          </form>{" "}
        </div>
      ) : (
        <div className="d-flex flex-row">
          <h2 className="d-flex align-items-end">Uploading file</h2>
          <div className="d-flex align-items-end" ref={element} />
        </div>
      )}
      {response !== undefined ? (
        <div>
          <UploadReport report={response.data} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

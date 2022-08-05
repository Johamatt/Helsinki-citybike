import axios from "axios";
import React, { useRef, useState } from "react";

import { MdDirectionsBike } from "react-icons/md";
import "./FileUpload.css";

interface Props {
  modelType: string | null;
}

export const TripUpload: React.FC<Props> = ({ modelType }) => {
  const [file, setFile] = useState<File | null>();

  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList) return;
    setFile(fileList[0]);
    console.log(fileList[0]);
  };

  const uploadFile = async function (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const res = await axios.post(
          `http://localhost:4000/${modelType}/upload`,
          formData
        );
        console.log(res);
      } catch (ex) {
        console.log(ex);
      }
    }
    console.log("k");
  };

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
      </form>
    </div>
  );
};

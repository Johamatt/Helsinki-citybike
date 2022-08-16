import React, { useState } from "react";
import { Report } from "../../types/responseTypes";
import "./uploadReport.css";

interface Props {
  report: Report;
}

export const UploadReport: React.FC<Props> = ({ report }) => {
  const [modal, setModal] = useState(true);

  console.log(report);
  const toggleModal = () => {
    setModal(false);
  };

  if (!modal) {
    return <div />;
  }

  return (
    <div>
      <div className="overlay">
        <div className="modal-content">
          <h1>Upload completed</h1>
          <h4>File: {report.filename}</h4>
          <p>Total rows uploaded: {report.totalNumberOfRows}</p>
          <button className="close-modal" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

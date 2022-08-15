import React, { useState } from "react";
import { UploadReport } from "../../types/responseTypes";
import "./modal.css";

interface Props {
  report: UploadReport; //UploadReport;
}

export const Report: React.FC<Props> = ({ report }) => {
  const [modal, setModal] = useState(true);

  console.log(report);
  const toggleModal = () => {
    setModal(false);
  };

  if (!modal) {
    return <div />;
  }

  function renderRows(): React.ReactNode {
    {
      report.failedImports.map((row) => console.log(row.row));
    }
    return <div></div>;
  }

  return (
    <div>
      <div className="overlay">
        <div className="modal-content">
          <h2>File: {report.filename}</h2>

          <p>Total rows uploaded: {report.totalNumberOfRows}</p>

          <button className="close-modal" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

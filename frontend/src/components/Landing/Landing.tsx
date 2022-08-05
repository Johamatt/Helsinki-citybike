import React, { useRef, useState } from "react";
import { MdDirectionsBike } from "react-icons/md";
import { Table } from "../Table/Table";
import { TripUpload } from "../Upload/FileUpload";
import "./Landing.css";

export const Landing: React.FC<{}> = () => {
  return (
    <div className="landing">
      <div className="content">
        <div className="uploadsForm">
          <TripUpload modelType="trips" />
          <TripUpload modelType="stations" />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import { Stations } from "../Table/Stations";
import { Trips } from "../Table/Trips";
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
      </div>
      <Stations />
      <Trips />
    </div>
  );
};

export default Landing;

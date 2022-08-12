import React from "react";
import { Stations } from "../Table/Stations";
import { Trips } from "../Table/Trips";

export const Landing: React.FC<{}> = () => {
  return (
    <div className="landing">
      {/* <div>
        <div>
          <TripUpload modelType="trips" />
          <TripUpload modelType="stations" />
        </div>
      </div> */}
      <Stations />
      <Trips />
    </div>
  );
};

export default Landing;

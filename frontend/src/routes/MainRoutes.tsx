import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import StationModal from "../components/Views/Modals/StationSingleView";
import { Stations } from "../components/Views/Stations";
import { Trips } from "../components/Views/Trips";

const MainRoutes = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/stations" element={<Stations />} />
        <Route path="/trips" element={<Trips />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </React.StrictMode>
  );
};
export default MainRoutes;

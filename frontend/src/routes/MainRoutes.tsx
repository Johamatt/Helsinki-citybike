import React from "react";
import { Routes, Route } from "react-router-dom";
import { Stations } from "../components/Views/Stations";
import { Trips } from "../components/Views/Trips";

const MainRoutes = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/stations" element={<Stations />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </React.StrictMode>
  );
};
export default MainRoutes;

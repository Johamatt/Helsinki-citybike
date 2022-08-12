import { Routes, Route } from "react-router-dom";
import { Stations } from "../components/Table/Stations";
import { Trips } from "../components/Table/Trips";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/stations" element={<Stations />} />
      <Route path="/trips" element={<Trips />} />
      {/* <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  );
};
export default MainRoutes;

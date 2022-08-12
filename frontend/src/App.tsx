import * as React from "react";
import { Link } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./navigation/MainRoutes";

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

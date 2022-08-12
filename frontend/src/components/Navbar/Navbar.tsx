import { Link } from "react-router-dom";
import MainRoutes from "../../navigation/MainRoutes";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div>
          <div className="navbar-nav align-items-center">
            <h1>
              Citybikes<span>.</span>
            </h1>
            <a className="nav-item nav-link" href="#">
              <Link to="/">Home</Link>
            </a>
            <a className="nav-item nav-link " href="#">
              <Link to="/trips">Trips</Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/stations">Stations</Link>
            </a>
          </div>
          <hr />
          <MainRoutes />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div>
          <div className="navbar-nav align-items-center">
            <h1>
              Citybikes<span>.</span>
            </h1>

            <Link to="/" className="nav-item nav-link link-dark">
              Home
            </Link>

            <Link to="/trips" className="nav-item nav-link link-dark">
              Trips
            </Link>

            <Link to="/stations" className="nav-item nav-link link-dark">
              Stations
            </Link>
          </div>
          <hr />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

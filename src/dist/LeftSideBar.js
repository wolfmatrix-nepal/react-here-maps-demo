import React, { Component } from "react";
import { Link } from "react-router-dom";
class LeftSideBar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/circle" className="nav-link">
                Circle
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/marker" className="nav-link">
                Marker
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/marker_with_cirlce" className="nav-link">
                Marker With Circle
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default LeftSideBar;

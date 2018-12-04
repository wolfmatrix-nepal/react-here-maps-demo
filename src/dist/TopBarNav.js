import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class TopBarNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">
          React Here Maps
        </Link>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a
              className="nav-link"
              target="new"
              href="https://github.com/wolfmatrix-nepal/React-Here-Maps"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default TopBarNav;

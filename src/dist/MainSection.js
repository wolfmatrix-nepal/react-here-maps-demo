import React, { Component } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

import "./dashboard.css";

class MainSection extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <LeftSideBar />
          <RightSideBar />
        </div>
      </div>
    );
  }
}
export default MainSection;

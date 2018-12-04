import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
class RightSideBar extends Component {
  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="justify-content-between align-items-center pt-3 pb-2 mb-3 ">
          <Switch>
            {routes.map((r, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={`${r.path}`}
                  component={r.component}
                />
              );
            })}
          </Switch>
        </div>
      </main>
    );
  }
}

export default RightSideBar;

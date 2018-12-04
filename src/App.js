import React, { Component } from "react";
import TopBarNav from "./dist/TopBarNav";
import MainSection from "./dist/MainSection";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <TopBarNav />
            <MainSection />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

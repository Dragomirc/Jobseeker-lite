import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./homePage/HomePage";
import JobsPage from "./jobsPage/JobsPage";
import JobDetailsPage from "./jobDetailsPage/JobDetailsPage";

import "../../../public/appStyles.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route  path="/jobs/:keywords?/:locationName?/:distanceFromLocation?" component={JobsPage} />
          <Route exact path="/jobDetails/:id" component={JobDetailsPage} />
        </div>
      </BrowserRouter>
    );
  }
}

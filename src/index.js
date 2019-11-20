import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/styles-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index";
import ResultsPage from "views/examples/ResultsPage";
import VerifyPage from "views/examples/VerifyPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route path="/result" render={props => <ResultsPage {...props} />} />
      <Route path="/verify" render={props => <VerifyPage {...props} />} />
      <Redirect from="/" to="/verify" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

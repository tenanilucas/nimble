import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { history } from "./history";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/app" component={App} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

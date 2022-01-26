import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { history } from "./history";
import PrivateRoute from "./PrivateRoute";
// import PageNotFound from "./pages/PageNotFound";
import Team from "./pages/Team";
import { Toaster } from "react-hot-toast";

function Routes() {
  return (
    <BrowserRouter history={history}>
      <Toaster position="top-center" />
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/app" exact component={App} />
        <PrivateRoute path="/" exact component={Home} />
        {/* <PrivateRoute path="*" exact component={PageNotFound} /> */}
        <PrivateRoute path="/team" exact component={Team} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);

export const AuthContext = createContext({});

function Routes() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute path="/app" component={App} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default Routes;

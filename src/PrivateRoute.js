import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import api from "./services/api";

const PrivateRoute = (props) => {
  const history = useHistory();

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      if (error.response.status === 401) {
        history.push("/login");
        localStorage.clear("@token");
        alert("Sessão expirada");
      }
      // return Promise.reject(error);
    }
  );

  const isLogged = !!localStorage.getItem("@token");
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;

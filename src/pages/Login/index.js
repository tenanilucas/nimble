import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const initialValues = { username: "", password: "" };
const Login = () => {
  const history = useHistory();
  const handleHistory = () => {
    history.push("/");
  };
  const [user, setUser] = useState(initialValues);

  function onChange(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (values) => {
    axios
      .post(
        `https://vdob2n-hom-protheus.totvscloud.com.br:24387/rest01/api/oauth2/v1/token?grant_type=password&password=${user.password}&username=${user.username}`,
        values
      )
      .then((resp) => {
        const { data } = resp;
        if (data) {
          localStorage.setItem("app-token", data.access_token);
          handleHistory();
          // console.log(data.access_token);
        }
      });
  };

  return (
    <div id="page-auth">
      <main>
        <div className="main-content">
          <img
            src="https://cms.evup.com.br/api/assets/736a71bb-3624-455a-ad87-2cc6cc5f2d27/"
            alt="Logo EspaçoLaser"
          />
          <div className="separator">entre com a sua conta</div>
          <Formik initialValues={{}} onSubmit={handleSubmit}>
            <Form>
              <Field
                name="username"
                onChange={onChange}
                type="text"
                placeholder="Usuário"
              />
              <ErrorMessage
                component="span"
                className="form-error"
                name="username"
              />
              <Field
                name="password"
                onChange={onChange}
                type="password"
                placeholder="Senha"
              />
              <ErrorMessage
                component="span"
                className="form-error"
                name="password"
              />
              <button type="submit" className="button">
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </main>
    </div>
  );
};

export default Login;

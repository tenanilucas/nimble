import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import "./styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T",
        });
      }
    }
  };

  render() {
    return (
      <div id="page-auth">
        <main>
          <div className="main-content">
            <img
              src="https://cms.evup.com.br/api/assets/736a71bb-3624-455a-ad87-2cc6cc5f2d27/"
              alt="Logo EspaçoLaser"
            />
            <div className="separator">entre com a sua conta</div>

            <form onSubmit={this.handleSignIn}>
              {this.state.error && <p>{this.state.error}</p>}
              <input
                type="email"
                placeholder="Endereço de e-mail"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Senha"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <button type="submit">Entrar</button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(SignIn);

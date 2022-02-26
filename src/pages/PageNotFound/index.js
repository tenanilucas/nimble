import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./style.scss";

function PageNotFound() {
  return (
    <>
      <NavBar />
      <main>
        <div className="pageNotFound">
          <h2>Oops! Página não encontrada</h2>
          <h1>404</h1>
          <p>Não conseguimos encontrar a página que está procurando</p>
          <Link to="/">
            <button className="button">Volte para a home</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;

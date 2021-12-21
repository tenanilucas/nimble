import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

function NavBar() {
  const logOut = () => {
    localStorage.clear("@token");
  };

  var path = window.location.pathname;
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a
          href="https://www.espacolaser.com.br/"
          target="_blank"
          rel="noreferrer"
          className="nav__logo"
        >
          <img
            src="https://cms.evup.com.br/api/assets/736a71bb-3624-455a-ad87-2cc6cc5f2d27/"
            alt="Logo EspaçoLaser"
            className="logo_name"
          />
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/"
                className={`nav__link ${path === "/" ? "active-link" : " "}`}
                id="home"
              >
                <AiIcons.AiFillHome className="nav__icon" />
                <span className="nav__name">Home</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/app"
                className={`nav__link ${path === "/app" ? "active-link" : " "}`}
                id="app"
              >
                <IoIcons.IoMdDocument className="nav__icon" />
                <span className="nav__name">Aprovação</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/team"
                className={`nav__link ${
                  path === "/team" ? "active-link" : " "
                }`}
                id="team"
              >
                <RiIcons.RiTeamFill className="nav__icon" />
                <span className="nav__name">Time</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link" id="log_out" onClick={logOut}>
                <RiIcons.RiLogoutBoxLine className="nav__icon" />
                <span className="nav__name">Sair</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

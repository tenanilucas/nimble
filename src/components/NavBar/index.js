import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { SideBarData } from "../SideBarData";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  const logOut = () => {
    localStorage.clear("app-token");
  };

  return (
    <>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="logo_content">
          <div className="logo">
            <img
              src="https://cms.evup.com.br/api/assets/736a71bb-3624-455a-ad87-2cc6cc5f2d27/"
              alt="Logo EspaçoLaser"
              className="logo_name"
            />
          </div>
          <FaIcons.FaBars id="btn" onClick={showSideBar} />
        </div>
        <ul className="nav_list">
          <li>
            <FaIcons.FaSearch id="search" onClick={showSideBar} />
            <input type="text" placeholder="Pesquisar..." />
            <span className="tooltip">Pesquisar</span>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="links_name">{item.title}</span>
                </Link>
                <span className="tooltip">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img
                src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/09/cropped-spiderman-3-1540228026.jpg"
                alt="Foto de perfil"
              />
              <div className="name_job">
                <div className="name">Peter Parker</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            <Link to="/">
              <RiIcons.RiLogoutBoxLine id="log_out" onClick={logOut} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

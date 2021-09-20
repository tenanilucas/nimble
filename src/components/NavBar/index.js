import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { SideBarData } from "../SideBarData";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">EspaçoLaser</div>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU"
                alt="Foto de perfil"
              />
              <div className="name_job">
                <div className="name">Lucas Denhoninho</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            <Link to="/">
              <RiIcons.RiLogoutBoxLine id="log_out" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

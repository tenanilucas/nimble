import React from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/home",
    icon: <BsIcons.BsGrid1X2Fill />,
    cName: "nav-text",
  },
  {
    title: "Aprovação",
    path: "/app",
    icon: <IoIcons.IoMdDocument />,
    cName: "nav-text",
  },
  {
    title: "User",
    path: "/app",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text",
  },
  {
    title: "Files",
    path: "/app",
    icon: <AiIcons.AiOutlineFileDone />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/app",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text",
  },
];

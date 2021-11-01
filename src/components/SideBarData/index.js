import React from "react";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Aprovação",
    path: "/app",
    icon: <IoIcons.IoMdDocument />,
    cName: "nav-text",
  },
  {
    title: "Time",
    path: "/team",
    icon: <RiIcons.RiTeamFill />,
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

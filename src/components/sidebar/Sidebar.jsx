import React from "react";
import SidebarLink from "../sidebarLink/SidebarLink";
import "./sidebar.scss";

import { MdOutlineDashboard } from "react-icons/md";
import { BsBook, BsFlag } from "react-icons/bs";
import {
  AiOutlineFolder,
  AiOutlineFile,
  AiOutlineFileText,
} from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar_wrapper">
      <h2 className="sidebar_header">ascb</h2>
      <SidebarLink title="Dashboard" Icon={MdOutlineDashboard} />
      <SidebarLink title="Projects" Icon={AiOutlineFolder} />
      <SidebarLink title="Homes" Icon={AiOutlineFile} />
      <SidebarLink title="Tests" Icon={AiOutlineFileText} active />
      <SidebarLink title="Content" Icon={BsBook} />
      <SidebarLink title="Support" Icon={BsFlag} />
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./sidebarLink.scss";

function SidebarLink({ title, Icon, active }) {
  return (
    <div
      className={active ? "sideBarLink_wrapper active" : "sideBarLink_wrapper"}
    >
      <h3 className="sidebarLink_title">{title}</h3>
      <Icon className="sidebarLink_icon" />
    </div>
  );
}

export default SidebarLink;

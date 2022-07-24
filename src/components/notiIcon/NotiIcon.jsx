import React from "react";
import "./notiIcon.scss";

function NotiIcon({ Icon, bgColor }) {
  return (
    <div className="notiIcon_wrapper">
      <div className="noti"></div>
      <Icon className="notiIcon" style={{ color: `#${bgColor}` }} />
    </div>
  );
}

export default NotiIcon;

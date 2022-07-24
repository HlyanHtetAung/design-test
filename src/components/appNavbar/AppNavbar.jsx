import React from "react";
import "./appNavbar.scss";

import { BiSearch } from "react-icons/bi";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillBell } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import NotiIcon from "../notiIcon/NotiIcon";

function AppNavbar() {
  return (
    <div className="appNavbar_wrapper">
      <div className="appNavbar_searchWrapper">
        <input type="text" placeholder="Search" />
        <BiSearch className="appNavbar_searchIcon" />
      </div>
      <div className="appNav_rightWrapper">
        <NotiIcon Icon={RiMessage2Fill} bgColor="D3F6F3" />
        <NotiIcon Icon={AiFillBell} bgColor="FDE09E" />
        <img
          className="appNavbar_userImage"
          alt="user_avatar"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ny-5-2-clean-1656446800.jpg"
        />
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default AppNavbar;

import React, { useState } from "react";
import avatarSrc from "../../images/avatar.jpeg";
import Svg from "../Svg";
import { useScrollData } from "scroll-data-hook";

import "../../styles/header.css";

export default function Header() {
  const [inFocus, setInFocus] = useState(false);
  const { position } = useScrollData();

  return (
    <header className={position.y === 0 ? "header" : "header bcg"}>
      <div className="header__nav">
        <Svg icon="arrowLeft" customClass="back-icon" width={16} height={16} />{" "}
        <span>BACK</span>
      </div>
      <div className="header__separator"></div>
      <div className="header__breadcrumbs">
        <div className="crumb active">SEATING CHOICE</div>
        <Svg
          icon="arrowRightBold"
          customClass="crumb-separator"
          width={16}
          height={16}
        />
        <div className="crumb inactive">PAYMENT</div>
        <Svg
          icon="arrowRightBold"
          customClass="crumb-separator"
          width={16}
          height={16}
        />
        <div className="crumb inactive">FINISH</div>
      </div>
      <div className="header__main">
        <div
          className={
            inFocus ? "search-bar-wrapper focus" : "search-bar-wrapper"
          }
        >
          <Svg icon="search" customClass="search-icon" width={20} height={20} />
          <input
            type="search"
            className="search-bar"
            name=""
            id=""
            placeholder="Search.."
            onFocus={() => setInFocus(true)}
            onBlur={() => setInFocus(false)}
          />
        </div>
        <div className="account">
          <div className="avatar">
            <img src={avatarSrc} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

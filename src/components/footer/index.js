import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import {
  faHome,
  faUser,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function footer() {
  return (
    <div id="footer">
      <a href="/home">
        <button type="button" id="homeBtn" className="btn navBtns">
          <FontAwesomeIcon icon={faHome} className="fas fa-home" />
          Home
        </button>
      </a>
      <a href="/library">
        <button type="button" id="libraryBtn" className="btn navBtns">
          <FontAwesomeIcon
            id="goinHome"
            icon={faLayerGroup}
            className="fas fa-home"
          />
          Library
        </button>
      </a>
      <a href="/account">
        <button type="button" id="acctBtn" className="btn navBtns">
          <FontAwesomeIcon icon={faUser} className="fas fa-home" />
          Account
        </button>{" "}
      </a>
    </div>
  );
}

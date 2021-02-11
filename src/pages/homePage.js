import React from 'react'
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import {
    faHome
  } from "@fortawesome/free-solid-svg-icons";

export default function homePage() {
    return (
        <div className="pageWindow">
            <h1>home</h1>
        
            <img src={logo} className="App-logo" alt="logo" />{" "}
              <p>
                home
                <FontAwesomeIcon icon={faHome} />
              </p>
              <p>
                <a
                  className="App-link"
                  href="https://github.com/coryjquirk/puzzle-factory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository{" "}
                </a>{" "}
                <i className="fa fa-github" alt="github icon" />
              </p>
        </div>
    )
}
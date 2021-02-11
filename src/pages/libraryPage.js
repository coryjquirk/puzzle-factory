import React from 'react'
import GameLibrary from '../components/GameLibrary'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import {
    faLayerGroup,
  } from "@fortawesome/free-solid-svg-icons";

export default function libraryPage() {
    return (
        <div className="pageWindow">
            <h1>games library</h1>
            <FontAwesomeIcon icon={faLayerGroup} />
            <GameLibrary></GameLibrary>
        </div>
    )
}
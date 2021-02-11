import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import {
  faDice,
  faChess,
  faPuzzlePiece,
  faGamepad,
  faHatWizard,
  faChurch,
  faDiceD20,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";

class Game extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon
          id="goinHome"
          icon={this.props.icon}
          className="fas fa-home"
        />
        {this.props.gameName}
      </div>
    );
  }
}
export default function GameLibrary() {
  return (
    <div>
      <Container>
        <Row>
          <Col>{"  "}</Col>
          <Col>
            <div class="dropdown">
              <button class="dropbtn">sort by</button>
              <div class="dropdown-content">
                <p>name a-z</p>
                <p>name z-a</p>
                <p>release date new-old</p>
                <p>release date old-new</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row id="gameGrid">
          <Col>
            {" "}
            <Game gameName="dice" icon={faDice} />
          </Col>
          <Col>
            {" "}
            <Game gameName="chess" icon={faChess} />
          </Col>
          <Col>
            {" "}
            <Game gameName="jigsaw" icon={faPuzzlePiece} />
          </Col>
          <Col>
            {" "}
            <Game gameName="funnest game" icon={faGamepad} />
          </Col>
          <Col>
            {" "}
            <Game gameName="magic" icon={faHatWizard} />
          </Col>
          <Col>
            {" "}
            <Game gameName="six game" icon={faDiceD6} />
          </Col>
          <Col>
            {" "}
            <Game gameName="twenty time" icon={faDiceD20} />
          </Col>
          <Col>
            {" "}
            <Game gameName="fantasy" icon={faChurch} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

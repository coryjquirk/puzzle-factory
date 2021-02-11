import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import AccountPage from "./pages/accountPage";
import LibraryPage from "./pages/libraryPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import {
  faCog,
  faHome,
  faUser,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <Router>
        <a href="/options" id="optionsBtn">
          <span>
            <FontAwesomeIcon icon={faCog} className="fas fa-home" />
          </span>
        </a>
        <Header></Header>
        <Switch>
          <div className="App-header">
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/account" component={AccountPage}>
              my account
              <FontAwesomeIcon icon={faUser} />
            </Route>
            <Route path="/library" component={LibraryPage}>
            </Route>
            <Route path="/options" component={LibraryPage}>
              options
              <FontAwesomeIcon icon={faCog} />
            </Route>
          </div>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;

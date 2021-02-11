import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faCog } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <a href="/options" id="optionsBtn"><span><FontAwesomeIcon
                
                icon={faCog}
                className="fas fa-home"
              /></span></a>
      <header className="App-header">
        <h1>puzzle factory</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>We're building you an app.</p>
        <a
          className="App-link"
          href="https://github.com/coryjquirk/puzzle-factory"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository{" "}
        </a>{" "}
        <i className="fa fa-github" alt="github icon" />
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;

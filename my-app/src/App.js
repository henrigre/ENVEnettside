import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Hjemmeside from "./screens/Hjemmeside";
import LoggInn from "./screens/LoggInn";
import OmOss from "./screens/OmOss";
import Pris from "./screens/Pris";
import UseCase from "./screens/UseCase";
import Produkt from "./screens/Produkt";

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Hjemmeside />
          </Route>
          <Route exact path="/OmOss">
            <OmOss />
          </Route>
          <Route exact path="/LoggInn">
            <LoggInn />
          </Route>
          <Route exact path="/Pris">
            <Pris />
          </Route>
          <Route exact path="/UseCase">
            <UseCase />
          </Route>
          <Route exact path="/Produkt">
            <Produkt />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";

const App = () => {
  return (
    <>

      <ul>
        <li><a href="/home">HOME</a></li>
        <li><a href="/contacto">contacto</a></li>
        <li><a href="/about">about</a></li>
      </ul>

      <Router>

        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/contacto">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
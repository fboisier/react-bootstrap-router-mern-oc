import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { Home } from "./components/Home";
import { NavBarMenu } from "./components/NavBarMenu";

const App = () => {
  return (
    <>

      <Router>

        <NavBarMenu />
        <Container className="mt-4">

          <Switch>
            <Route path="/home">
              <Home algo={true}/>
              <Home algo={false}/>
            </Route>
            <Route path="/contacto">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Redirect
              exact
              from="/"
              to="/home"
            />

            <Route>
              <Error />
            </Route>

          </Switch>

        </Container>
      </Router>

    </>
  );
}

export default App;
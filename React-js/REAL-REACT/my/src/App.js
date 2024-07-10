import NavBar from "./navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./about";
import Home from "./home";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

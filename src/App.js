import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/users">
            <Button>Users</Button>
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

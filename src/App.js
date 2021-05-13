import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./screens/Home";
import { useEffect, useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [openAlert, setOpen] = useState(true);

  const handleAlert = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Alert open={openAlert} handleAlert={handleAlert}></Alert>
        <Header />
        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

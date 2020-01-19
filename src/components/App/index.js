import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../../styles.css";
import Home from "../Home";
import About from "../About";


const App = () => (
  <Router>
    <div>
      <Button variant="contained" color="primary">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/about">About</Link>
      </Button>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default App;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "typeface-roboto";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

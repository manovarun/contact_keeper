import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./components/context/contact/ContactState";
import AuthState from "./components/context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;

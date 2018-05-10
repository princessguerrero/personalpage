import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import GetInTouch from "./components/GetInTouch";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="top-navbar">
        <div className="top-navbar-left">
          <Link to="/">Princess Guerrero</Link>
        </div>
        <div className="top-navbar-right">
          <Link to="/about">About</Link>
          {"  "}
          <Link to="/portfolio">Portfolio</Link>
          {"  "}
          <Link to="/skills">Skills</Link>
          {"  "}
          <Link to="/getintouch">Get In Touch</Link>
        </div>
        </div>

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/getintouch" component={GetInTouch} />
        </div>
      </div>
    );
  }
}

export default App;

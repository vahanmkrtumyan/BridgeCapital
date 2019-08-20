import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./assets/scss/main.scss";
import PropTypes from "prop-types";
import Homepage from "./components/Homepage";


class App extends Component {
  render() {
    return <Route path="/" exact component={Homepage} />
  }}


export default App;

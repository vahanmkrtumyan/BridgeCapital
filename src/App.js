import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/scss/main.scss";
// import FeedbackForm from './components/FeedbackForm';
import PropTypes from "prop-types";
import Homepage from "./components/Homepage";
import CurrencyInput from "./CurrencyInput";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<FeedbackForm env={this.props.env} />*/}

        <div>
          <Switch>
            <Route path="/Kurs" component={CurrencyInput} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;

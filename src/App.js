import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./assets/scss/main.scss";
// import FeedbackForm from './components/FeedbackForm';
import PropTypes from "prop-types";
import Homepage from "./components/Homepage";
import CurrencyInput from "./CurrencyInput";
import NotFound from './components/notFound';
import {connectTranslations} from "./context/TranslationContext"

class App extends Component {
  render() {
    return this.props.textLoaded ? (
        <React.Fragment>
        {/*<FeedbackForm env={this.props.env} />*/}

        <div>
          <Switch>
            <Route path="/Kurs" component={CurrencyInput} />
            <Route path="/" exact component={Homepage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    ): null;
  }
}
App.propTypes = {
  env: PropTypes.object.isRequired
};

export default connectTranslations(App);

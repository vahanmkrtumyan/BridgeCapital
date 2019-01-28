import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./assets/scss/main.scss";
// import FeedbackForm from './components/FeedbackForm';
import PropTypes from "prop-types";
import Homepage from "./components/Homepage";
import CurrencyInput from "./CurrencyInput";
import NotFound from "./components/notFound";
import { connectTranslations } from "./context/TranslationContext";
import Loading from "./assets/img/loading.svg";

class App extends Component {
  render() {
    return this.props.initialTextLoaded ? (
      <>
        {/*<FeedbackForm env={this.props.env} />*/}

        <div>
      
            <Switch>
              <Route path="/Kurs" component={CurrencyInput} />
              <Route path="/" exact component={Homepage} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
        
        </div>
        {this.props.textLoaded ? null : (
          <img
            style={{ height: "100vh", width: "100vh", position: "absolute" }}
            src={Loading}
            alt="Loading"
          />
        )}
      </>
    ) : (
      <div
        style={{ width: "1200px", height: "1200px", backgroundColor: "red" }}
      >
        sadsad
      </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default connectTranslations(App);

import React, { Component } from 'react';
import './assets/scss/main.scss';
// import FeedbackForm from './components/FeedbackForm';
import PropTypes from 'prop-types';
import Homepage from './components/Homepage';
import CurrencyInput from './CurrencyInput';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Homepage />
        {/*<FeedbackForm env={this.props.env} />*/}
        <CurrencyInput/>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;

import React, { Component } from 'react';
import './assets/scss/main.scss';
// import FeedbackForm from './components/FeedbackForm';
import PropTypes from 'prop-types';
import HeaderComponent from './components/HeaderComponent.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <HeaderComponent />
        {/*<FeedbackForm env={this.props.env} />*/}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;

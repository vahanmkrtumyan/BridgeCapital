import React, { Component } from 'react';
import './assets/scss/main.scss';
// import FeedbackForm from './components/FeedbackForm';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Reactսսս</h1>
            <h2 className="text">Բարև ձեզ</h2>
        </header>
        {/*<FeedbackForm env={this.props.env} />*/}
      </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;

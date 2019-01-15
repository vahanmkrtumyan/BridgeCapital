import React, { Component } from 'react';
import FeedbackForm from './feedbackForm';
import './App.css';
import ContactForm from './conatctForm';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ContactForm/>
        <FeedbackForm/>
      </div>
    );
  }
}

export default App;

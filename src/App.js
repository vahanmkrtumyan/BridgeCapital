import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import MyDropzone from './components/upload';
import Import from "./components/import";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
        <MyDropzone/>
        <Import/>
      </React.Fragment>
      
    );
  }
}

export default App;

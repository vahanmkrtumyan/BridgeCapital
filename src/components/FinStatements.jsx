import React, { Component } from "react";
import { database } from "./firebase";

class FinStatements extends Component {
  state = {
    statements: {}
  };

  componentDidMount() {
    database.ref("Statements").on("value", snapshot => {
      if (snapshot.val() !== null) {
        this.setState({ statements: snapshot.val() }, () => {});
      }
    });
  }

  render() {
    console.log(Object.keys(this.state.statements));
    console.log(Object.values(this.state.statements));
    return (
      <div>
        <div>'sd' </div>
      </div>
    );
  }
}

export default FinStatements;

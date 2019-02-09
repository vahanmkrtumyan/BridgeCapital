import React, { Component } from "react";
import { database } from "./firebase";

class FinStatements extends Component {
  state = {
    statements: null
  };

  componentDidMount() {
    database.ref("Statements").on("value", snapshot => {
      if (snapshot.val() !== null) {
        this.setState({ statements: snapshot.val() });
      }
    });
  }

  render() {
    let arr;
    this.state.statements !== null
      ? (arr = Object.keys(this.state.statements).reverse())
      : (arr = "");

    return this.state.statements !== null ? (
      <div>
        <div>
          {arr.map(item => (
            <h1 key={item}>
              {item}
              {Object.values(this.state.statements[item]).map(n => (
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      Object.values(this.state.statements[item])[
                        Object.values(this.state.statements[item]).indexOf(n)
                      ]["downloadURL"]
                    }
                  >
                    {
                      Object.values(this.state.statements[item])[
                        Object.values(this.state.statements[item]).indexOf(n)
                      ]["name"]
                    }
                  </a>
                </div>
              ))}
            </h1>
          ))}
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default FinStatements;

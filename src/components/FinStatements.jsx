import React, { Component } from "react";
import { database } from "./firebase";

class FinStatements extends Component {
  state = {
    statements: null
  };

  componentDidMount() {
    database.ref("Statements").on("value", snapshot => {
      if (snapshot.val() !== null) {
        this.setState({ statements: snapshot.val() }, () => {
          console.log(
            Object.keys(
              Object.values(this.state.statements)[
                Object.keys(Object.values(this.state.statements))[0]
              ]
            )[2]
          );
        });
      }
    });
  }

  render() {
    this.state.statements !== null
      ? console.log(Object.values(Object.values(this.state.statements)[0]))
      : console.log(14);
    this.state.statements !== null
      ? console.log(Object.values(this.state.statements[2019])[0]["name"])
      : console.log(14);

    return this.state.statements !== null ? (
      <div>
        <div>
          {Object.keys(this.state.statements).map(item => (
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

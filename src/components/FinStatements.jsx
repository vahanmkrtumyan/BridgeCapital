import React, { Component } from "react";
import { database } from "./firebase";

class FinStatements extends Component {
  state = {
    statements: {}
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
    console.log(Object.keys(this.state.statements));
    console.log(Object.values(this.state.statements));
    console.log(Object.keys(Object.values(this.state.statements)));
    let asd = Object.values(this.state.statements)[
      Object.keys(Object.values(this.state.statements))[0]
    ];
    
    



    return (
      <div>
        <div>
          {Object.keys(this.state.statements).map(item => (
            <h1 key={item}>
              {item}
              {Object.values(this.state.statements).map(n => (
                <div>
                  <a
                    href={
                      Object.values(n)[
                        Object.values(this.state.statements).indexOf(n)
                      ].downloadURL
                    }
                  >
                    {
                      Object.values(n)[
                        Object.values(this.state.statements).indexOf(n)
                      ].name
                    }
                  </a>
                </div>
              ))}
            </h1>
          ))}
          
        </div>
      </div>
    );
  }
}

export default FinStatements;

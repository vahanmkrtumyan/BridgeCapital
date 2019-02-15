import React, { Component } from "react";
import { database } from "./firebase";
import FooterComponent from "./homepage/FooterComponent";

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

    let style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "50px",
      padding: "50px"
    }

    let style1 = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px",
      padding: "10px",
      display: 'block'
    }

    let arr;
    this.state.statements !== null
      ? (arr = Object.keys(this.state.statements).reverse())
      : (arr = "");

    return this.state.statements !== null ? (
      <div>
      <div style={style}>
        <div>
          {arr.map(item => (
            <h1 key={item} style={style1}>
              {item} թվականի հաշվետվություններ
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
      <FooterComponent/>
      </div>) : (
      <FooterComponent/>
    );
  }
}

export default FinStatements;

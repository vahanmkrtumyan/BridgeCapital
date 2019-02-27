// import PropTypes from "prop-types";
import React, { Component } from "react";
import { database, auth } from "./components/firebase";
import SignIn from "./components/signIn";
import CurrentUser from "./components/currentUser";
// import styles from "./button.scss";

class CurrencyInput extends Component {
  state = {
    USDBid: "",
    USDAsk: "",
    EURBid: "",
    EURAsk: "",
    RUBBid: "",
    RUBAsk: "",
    GBPBid: "",
    GBPAsk: "",
    errors: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    currentUser: null,
    loading: true
  };

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser, loading: false });
    });
  }

  handleInputChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      USDBid: this.state.USDBid,
      USDAsk: this.state.USDAsk,
      EURBid: this.state.EURBid,
      EURAsk: this.state.EURAsk,
      RUBBid: this.state.RUBBid,
      RUBAsk: this.state.RUBAsk,
      GBPBid: this.state.GBPBid,
      GBPAsk: this.state.GBPAsk,
      AMD: 1
    };
    database
      .ref()
      .child("kurs")
      .set(data);
  };

  render() {
    const divStyle = {
      color: "black"
    };

    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <div className="sign-in-page">
        <div className="box">
          <h2 className="h2 text-center pb-6">Փոխարժեքի մուտքագրում</h2>

          {currentUser && <CurrentUser user={currentUser} />}

          {!this.state.loading && !currentUser && <SignIn />}
          {currentUser && currentUser.email === "bridgecapital2019@gmail.com" && (
            <div className="row">
              <form>
                <div className="cols-sm-2">
                  <div className="input-field col-sm-6">
                    <label htmlFor="USDBid">USDBid</label>
                    <input
                      id="USDBid"
                      name="USDBid"
                      type="text"
                      className="card-slide"
                      placeholder="USDBid"
                      onChange={this.handleInputChange}
                      value={this.state.USDBid}
                    />
                  </div>
                  <div className="input-field col-sm-6">
                    <label htmlFor="Անուն">USDAsk</label>
                    <input
                      id="last_name"
                      name="USDAsk"
                      type="text"
                      style={divStyle}
                      placeholder="USDAsk"
                      onChange={this.handleInputChange}
                      value={this.state.USDAsk}
                    />
                  </div>
                  <div className="input-field col-sm-6">
                    <label htmlFor="Անուն">EURBid</label>
                    <input
                      id="last_name"
                      name="EURBid"
                      type="text"
                      style={divStyle}
                      placeholder="EURBid"
                      onChange={this.handleInputChange}
                      value={this.state.EURBid}
                    />
                  </div>
                  <div className="input-field col-sm-6">
                    <label htmlFor="Անուն">EURAsk</label>
                    <input
                      id="last_name"
                      name="EURAsk"
                      type="text"
                      style={divStyle}
                      placeholder="EURAsk"
                      onChange={this.handleInputChange}
                      value={this.state.EURAsk}
                    />
                  </div>
                  <div className="input-field col-sm-6">
                    <label htmlFor="Անուն">RUBBid</label>
                    <input
                      id="last_name"
                      name="RUBBid"
                      type="text"
                      style={divStyle}
                      placeholder="RUBBid"
                      onChange={this.handleInputChange}
                      value={this.state.RUBBid}
                    />
                  </div>
                  <div className="input-field col-sm-6">
                    <label htmlFor="Անուն">RUBAsk</label>
                    <input
                      id="last_name"
                      name="RUBAsk"
                      type="text"
                      style={divStyle}
                      placeholder="RUBAsk"
                      onChange={this.handleInputChange}
                      value={this.state.RUBAsk}
                    />
                  </div>
                  <div className="input-field col-sm-6">
                    <label htmlFor="Անուն">GBPBid</label>
                    <input
                      id="last_name"
                      name="GBPBid"
                      type="text"
                      style={divStyle}
                      placeholder="GBPBid"
                      onChange={this.handleInputChange}
                      value={this.state.GBPBid}
                    />
                  </div>
                  <div className="input-field col-sm-6">
                    <label htmlFor="Անուն">GBPAsk</label>
                    <input
                      id="last_name"
                      name="GBPAsk"
                      type="text"
                      style={divStyle}
                      placeholder="GBPAsk"
                      onChange={this.handleInputChange}
                      value={this.state.GBPAsk}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={this.handleSubmit}
                    type="button"
                    name="submit"
                    className="btn primary"
                  >
                    Ուղարկել
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CurrencyInput;

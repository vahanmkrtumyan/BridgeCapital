import PropTypes from "prop-types";
import React, { Component } from "react";
import { database, auth } from "./components/firebase";
import SignIn from "./components/signIn";
import CurrentUser from "./components/currentUser";
import styles from './button.scss';

class CurrencyInput extends Component {
  state = {
    USDBid: "",
    USDAsk: "",
    EURBid: "",
    EURAsk: "",
    RUBBid: "",
    RUBAsk: "",
    errors: {
      name: "",
      email: "",
      subject: "",
      message: ""
      },
      currentUser: null, loading: true
  };


  componentDidMount() {
      auth.onAuthStateChanged(currentUser => {
          this.setState({ currentUser, loading: false });
      });
    };


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
    return (
      <div className="col-sm-8 flex justify-end">
        {currentUser && <CurrentUser user={currentUser} />}
        {!this.state.loading && !currentUser && <SignIn />}
        {currentUser && (<div className="row">
        <form className="col s6" >
          <div className="input-field col s6">
            <input
              id="USDBid"
              name="USDBid"
              type="text"
              className="card-slide"
              placeholder="USDBid"
              onChange={this.handleInputChange}
              value={this.state.USDBid}
            />
            <label htmlFor="USDBid">USDBid</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              name="USDAsk"
              type="text"
              style={divStyle}
              placeholder="USDAsk"
              onChange={this.handleInputChange}
              value={this.state.USDAsk}
            />
            <label htmlFor="Անուն">USDAsk</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              name="EURBid"
              type="text"
              style={divStyle}
              placeholder="EURBid"
              onChange={this.handleInputChange}
              value={this.state.EURBid}
            />
            <label htmlFor="Անուն">EURBid</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              name="EURAsk"
              type="text"
              style={divStyle}
              placeholder="EURAsk"
              onChange={this.handleInputChange}
              value={this.state.EURAsk}
            />
            <label htmlFor="Անուն">EURAsk</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              name="RUBBid"
              type="text"
              style={divStyle}
              placeholder="RUBBid"
              onChange={this.handleInputChange}
              value={this.state.RUBBid}
            />
            <label htmlFor="Անուն">RUBBid</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              name="RUBAsk"
              type="text"
              style={divStyle}
              placeholder="RUBAsk"
              onChange={this.handleInputChange}
              value={this.state.RUBAsk}
            />
            <label htmlFor="Անուն">RUBAsk</label>
          </div>

          <button onClick={this.handleSubmit} type="button" name="submit" className={styles}>
            Ուղարկել
          </button>
        </form>
      </div>)}
      </div>


    );
  }
}

export default CurrencyInput;

import PropTypes from "prop-types";
import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class FeedbackForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  };

  handleInputChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  sendMessage = event => {
    event.preventDefault();

    var templateParams = {
      from_name: this.state.name + "(" + this.state.email + ")",
      to_name: "vahanmkrtumyan@gmail.com",
      subject: this.state.subject,
      message_html: this.state.message
    };

    emailjs
      .send(
        "gmail",
        "template_kVfGz0wq",
        templateParams,
        "user_2oVtAZArFSDKEkVPijQjw"
      )
      .then(
        response => {
          console.log("success");
        },
        err => {
          console.log("err");
        }
      );

    this.setState({ name: "", email: "", subject: "", message: "" });
  };

  render() {
    return (
      <div className="row">
        <form className="col s6">
          <div className="input-field col s6">
            <input
              id="last_name"
              name="name"
              type="text"
              className="validate"
              placeholder="Անուն"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            <label htmlFor="Անուն">Անուն</label>
          </div>

          <div className="input-field col s6">
            <input
              id="email"
              type="email"
              className="validate"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="subject"
                type="text"
                className="validate"
                name="subject"
                onChange={this.handleInputChange}
                value={this.state.subject}
              />
              <label htmlFor="subject">Թեմա</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="row">
                <textarea
                  id="textarea"
                  className="materialize-textarea"
                  onChange={this.handleInputChange}
                  value={this.state.message}
                  name="message"
                />
                <label htmlFor="textarea">Հաղորդագրություն</label>
              </div>
            </div>
          </div>
          <button onClick={this.sendMessage} type="button" name="submit">
            Ուղարկել
          </button>
        </form>
      </div>

      /*  <div className="row">
        <form className="col s6">
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <input
            type="text"
            name="subject"
            onChange={this.handleInputChange}
            value={this.state.subject}
          />
          <textarea
            type="text"
            onChange={this.handleInputChange}
            value={this.state.message}
          />
          <button onClick={this.sendMessage} type="button" name="submit" >Ուղարկել</button>
        </form>
      </div> */
    );
  }
}

export default FeedbackForm;

FeedbackForm.propTypes = {
  env: PropTypes.object.isRequired
};

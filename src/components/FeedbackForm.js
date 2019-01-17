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
    const target = event.target;
    const name = event.name;
    const value = target.value;

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
      <div>
        <form>
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
          <button onClick={this.sendMessage} type="button" name="submit" />
        </form>
      </div>
    );
  }
}

export default FeedbackForm;

FeedbackForm.propTypes = {
  env: PropTypes.object.isRequired
};

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
            <div className="contact-form">
                <h3 className="h3 pb-7">Հարցե±ր ունեք: Սիրով կսպասենտք Ձեր նամակներին:</h3>
                <form className="">
                    <div className="cols-sm-2 pb-4">
                        <div className="col-sm-6">
                            <input
                                id="last_name"
                                name="name"
                                type="text"
                                className="validate"
                                placeholder="Անուն"
                                onChange={this.handleInputChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className="col-sm-6">
                            <input
                                id="email"
                                type="email"
                                className="validate"
                                name="email"
                                placeholder="Էլ․ հասցե"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                        </div>
                    </div>
                    <div className="pb-5">
                        <textarea
                            id="textarea"
                            placeholder="Նամակ"
                            className="materialize-textarea h-180"
                            onChange={this.handleInputChange}
                            value={this.state.message}
                            name="message"
                        />
                    </div>
                    <div className="text-md-right text-xs-center">
                        <button className="btn primary" onClick={this.sendMessage} type="button" name="submit">
                            Ուղարկել
                        </button>
                    </div>

                    {/*<div>
                        <input
                            id="subject"
                            type="text"
                            className="validate"
                            name="subject"
                            onChange={this.handleInputChange}
                            value={this.state.subject}
                        />
                        <label htmlFor="subject">Թեմա</label>
                    </div>*/}

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

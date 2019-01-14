import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { axios } from 'axios';

class FeedbackForm extends Component {
  state = { name: "", email: "", message: "" };


  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state.name)
  };

  handleSubmit = async (e) =>  {
    e.preventDefault()

    const {name, email, message} = this.state;

    const form = await axios.post('/api/form', {
      name: name,
      email: email,
      message: message
    })
  }

  

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{ width: "600px" }}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="name">Email</Label>
          <Input type="name" email="name" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="Message">Message</Label>
          <Input type="textarea" name="Message" onChange={this.handleChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      
    );
  }
}

export default FeedbackForm;



import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron />
        <div className="bg-light p-5">
          <h3 className="pb-3">Book Search</h3>
          <h6 className="pb-2">Book Title:</h6>
          <form className="pb-5">
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
            />
            <FormBtn disabled={!this.state.title}>Search</FormBtn>
          </form>
        </div>
      </div>
    );
  }
}

export default Books;

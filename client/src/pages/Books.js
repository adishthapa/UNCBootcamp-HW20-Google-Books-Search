import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import SearchResults from "../components/SearchResults";

class Books extends Component {
  state = {
    search: [],
    results: "",
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

  handleFormSubmit = event => {
    event.preventDefault();
    API.getGoogleBooks(this.state.search)
      .then(res => {
        this.setState({ results: res.data.items });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron />
        <div className="bg-light p-3 mb-4">
          <h3 className="pb-3">Book Search</h3>
          <h6 className="pb-2">Book:</h6>
          <form className="pb-5">
            <Input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
            />
            <FormBtn
              disabled={!this.state.search}
              onClick={this.handleFormSubmit}
            >
              Search
            </FormBtn>
          </form>
        </div>
        <div className="bg-light p-3">
          {this.state.results ? (
            <SearchResults results={this.state.results} />
          ) : (
            <div>
              <h3 className="pb-3">Results</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Books;

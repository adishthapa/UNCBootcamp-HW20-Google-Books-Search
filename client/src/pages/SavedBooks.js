import React, { Component } from "react";
import API from "../utils/API";
import ListSavedBooks from "../components/ListSavedBooks";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="bg-light p-3">
        {this.state.books ? (
          <ListSavedBooks books={this.state.books} />
        ) : (
          <div>
            <h3 className="pb-3">Saved Books</h3>
          </div>
        )}
      </div>
    );
  }
}
export default SavedBooks;

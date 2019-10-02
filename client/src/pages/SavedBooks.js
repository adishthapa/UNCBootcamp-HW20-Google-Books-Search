import React, { Component } from "react";
import API from "../utils/API";
import ListSavedBooks from "../components/ListSavedBooks";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.handleLoadBooks();
  }

  handleLoadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleDeleteBooks = event => {
    event.preventDefault();
    const id = event.target.dataset.id;
    API.deleteBook(id)
      .then(document.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="bg-light p-3">
        {this.state.books ? (
          <ListSavedBooks
            books={this.state.books}
            handleDeleteBooks={this.handleDeleteBooks}
          />
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

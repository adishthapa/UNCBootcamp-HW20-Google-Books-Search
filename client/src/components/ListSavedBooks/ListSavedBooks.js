import React from "react";

function ListSavedBooks({ books, handleDeleteBooks }) {
  return (
    <div>
      <h3 className="pb-3">Saved Books</h3>
      {console.log(books)}
      <div className="row">
        <div className="col">
          {books.map((book, index) => (
            <div key={index} className="row p-3 m-3 border">
              <div className="col-10">
                <h3>{book.title ? book.title : "No Title Available"}</h3>
                <p>
                  Author:&nbsp;
                  {book.authors
                    ? book.authors.map((author, index) =>
                        index === book.authors.length - 1
                          ? author
                          : author + ", "
                      )
                    : "No Author Available"}
                </p>
              </div>
              <div className="col-2">
                <div className="btn-group d-flex" role="group">
                  <button type="button" className="btn btn-secondary m-2">
                    <a
                      href={book.link ? book.link : "https://www.google.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary m-2"
                    data-id={book._id}
                    onClick={handleDeleteBooks}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="col-2">
                <img
                  src={
                    book.image
                      ? book.image
                      : "http://via.placeholder.com/125x190"
                  }
                  alt="Book"
                />
              </div>
              <div className="col-10">
                <p>
                  {book.description
                    ? book.description
                    : "No Description Available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListSavedBooks;

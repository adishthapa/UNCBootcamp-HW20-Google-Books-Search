import React from "react";

function SearchResults({ results }) {
  return (
    <div>
      {console.log(results)}
      <h3 className="pb-3">Results</h3>
      <div className="row">
        <div className="col">
          {results.map((result, index) => (
            <div key={index} className="row p-3 m-3 border">
              <div className="col-10">
                <h3>
                  {result.volumeInfo.title
                    ? result.volumeInfo.title
                    : "No Title Available"}
                </h3>
                <p>
                  Author:&nbsp;
                  {result.volumeInfo.authors
                    ? result.volumeInfo.authors.map((author, index) =>
                        index === result.volumeInfo.authors.length - 1
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
                      href={
                        result.volumeInfo.infoLink
                          ? result.volumeInfo.infoLink
                          : "https://www.google.com/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </button>
                  <button type="button" className="btn btn-secondary m-2">
                    Save
                  </button>
                </div>
              </div>
              <div className="col-2">
                <img
                  src={result.volumeInfo.imageLinks.smallThumbnail}
                  alt="Book Image"
                />
              </div>
              <div className="col-10">
                <p>
                  {result.volumeInfo.description
                    ? result.volumeInfo.description
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

export default SearchResults;

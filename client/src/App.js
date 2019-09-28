import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container-fluid">
          <Jumbotron />
          <Switch>
            <Route path="/search-books">
              <SearchBooks />
            </Route>
            <Route path="/saved-books">
              <SavedBooks />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

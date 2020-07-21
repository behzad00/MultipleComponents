// Include the Main React Dependencies
import React from "react"
import ReactDOM from "react-dom"

// We need to include all of the components we"re utilizing
// Include the Header, Results, and Search components
import Header from "./components/Header"
import Results from "./components/Results"
import Search from "./components/Search"


ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.
  <div className="main-container">
    <Header />
    <Results />
    <Search />
  </div>
  , document.getElementById("app")
);

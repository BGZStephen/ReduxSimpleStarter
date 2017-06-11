import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search-bar"

const API_KEY = "AIzaSyC0UrUiTyeZ8_RabK7WbHZnoJ4nsWJIGJ8"

// Create a new component, this should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this components HTML and insert it in to the DOM

ReactDOM.render(<App />, document.querySelector('.container'));

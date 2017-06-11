import React from "react";
import ReactDOM from "react-dom";

// Create a new component, this should produce some HTML

const App = () => {
  return <div>Hi!</div>
}

// Take this components HTML and insert it in to the DOM

ReactDOM.render(<App />, document.querySelector('.container'));

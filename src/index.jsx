import React from 'react';
import ReactDOM from 'react-dom';

// create a new component
// this component will produce some html

const App = () => {
  return <div>Hi</div>;
}

// insert html in to the DOM
//

ReactDOM.render(<App></App>, document.querySelector('.container'));

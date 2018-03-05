import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = "AIzaSyAfrKmCGK76XcGWyS84yCH08LOyJ81ipFs";

// create a new component
// this component will produce some html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// insert html in to the DOM
//

ReactDOM.render(<App></App>, document.querySelector('.container'));

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyAfrKmCGK76XcGWyS84yCH08LOyJ81ipFs";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos})
    });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
};

ReactDOM.render(<App></App>, document.querySelector('.container'));

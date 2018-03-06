import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyAfrKmCGK76XcGWyS84yCH08LOyJ81ipFs";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      activeVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      })
    });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  };

  setActiveVideo(video) {
    this.setState({selectedVideo: video});
  }
};

ReactDOM.render(<App></App>, document.querySelector('.container'));

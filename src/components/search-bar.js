import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input value={this.state.term}
        onChange={event => this.setState({term: event.target.value})} />
        <button onClick={event => alert(this.state.term)}>Click me</button>
      </div>
    )
  }
}

export default SearchBar;

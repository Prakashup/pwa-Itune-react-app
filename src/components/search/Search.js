import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const options = [
      'All',
      'Audiobook',
      'eBook',
      'Movie',
      'Music',
      'Music Video',
      'Podcast',
      'TV Show',
      'Software'
      ];
    return (
      <div className="searchWrapper">
        <Dropdown
          className="dropdown"
          options={options}
          onChange={this._onSelect}
          value={ options[0] }
          placeholder="Select an option"
        />
        <input id="searchField" type="text" placeholder="Search" class="search-inpu-text" />

      </div>
    );
  }
}
export default Search;

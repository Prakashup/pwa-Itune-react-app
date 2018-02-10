import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import './search.css';
import  { getAlbumList } from '../../actions/SearchAction';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onClickSearch = this.onClickSearch.bind(this);
    console.log(this.props);
    this.state = {
    };
  }

  onClickSearch() {
    return true;
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
        <input id="searchField" type="text" placeholder="Search" onClick={ this.props.searchAction } className="search-inpu-text" />

      </div>
    );
  }
}
export default Search;

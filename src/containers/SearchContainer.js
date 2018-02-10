import React, {Component} from 'react';
import Search from '../components/search/Search';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAlbumList } from '../actions/SearchAction';

class SearchContainer extends Component {

  render() {
    return (
      <div>
        <Search  searchAction={ this.props.getAlbumListAction } />
      </div>
    );
  }
}

function mapStateToProps(state,props){
  return {

  };
}

function mapDispatchToProps(dispatch){
  return {
    getAlbumListAction: () => dispatch(getAlbumList())
  };
}
// *** bindActionCreators  use case ****//
// import * as searchAlbums from '../actions/SearchAction';
// <Search  searchAction={ this.props.action.getAlbumList } />
//function mapDispatchToProps(dispatch){  return {action: bindActionCreators(searchAlbums,dispatch)}}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

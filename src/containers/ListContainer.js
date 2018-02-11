import React, {Component} from 'react';
import List from '../components/list/List';
import { connect } from 'react-redux';
import * as searchActionCreator from '../actions/SearchAction';

class ListContainer extends Component {

  render() {
    return (
      <div>
        <List listOfAlbums={this.props.albumListProp} />
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
  return {
    albumListProp: state.SearchReducer.albumlist
  };
};


export default connect(mapStateToProps)(ListContainer);

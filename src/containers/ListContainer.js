import React, {Component} from 'react';
import List from '../components/list/List';
import { connect } from 'react-redux';
import * as upvoteActionCreator from '../actions/UpvotesAction';

class ListContainer extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <List
          listOfAlbums={this.props.albumListProp}
          upvoteActionAdd={this.props.addUpvote}
          loginStatus={ this.props.loginStateProp }
        />
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
  return {
    albumListProp: state.SearchReducer.albumlist,
    loginStateProp: state.LoginReducer.authenticated
    };
};


export default connect(mapStateToProps, upvoteActionCreator)(ListContainer);

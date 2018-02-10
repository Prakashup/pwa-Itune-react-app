import React, {Component} from 'react';
import './upvoteitem.css';

class UpvoteItem extends Component {
  render() {
    return (
      <div className="upvoteItem">
        <div className="upvoteItem-info">
           <div className="upvoteItem-info__ranking">
             <i className="material-icons like-icon u-pointer">favorite</i>
            <div>5</div>
          </div>
          <h3 className="upvoteItem-info__title">Rocket raccon</h3>
        </div>
        <div className="upvoteItem-image">
          <img src={'http://via.placeholder.com/350x150'}/>
        </div>
      </div>
    );
  }
}
export default UpvoteItem;

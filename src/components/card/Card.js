import React, {Component} from 'react';
import './card.css';

class Card extends Component {
      render() {
        return (
            <div className="card">
                <div className="card-info">
                    <div className="card-info__ranking">
                        <i className="material-icons like-icon u-pointer">favorite</i>
                        <div>5</div>
                    </div>
                    <h3 className="card-info__title">Rocket raccon</h3>
                </div>
                <div className="card-image">
                    <img src={'http://via.placeholder.com/350x150'}/>
                </div>
            </div>
        );
      }
  }
export default Card;

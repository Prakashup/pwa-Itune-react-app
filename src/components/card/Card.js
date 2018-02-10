import React, {Component} from 'react';
import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <div className="card u-flex">
            <div className="card-image waves-effect waves-block waves-light">
                <img alt="img" className="activator" src="http://is1.mzstatic.com/image/thumb/Music6/v4/8e/1c/42/8e1c4257-d43f-3263-b002-301b83a8ef94/source/100x100bb.jpg" />
            </div>
            <div className="card-content u-flex">
                <div className="card-header u-flex u-pointer">
                    <span className="card-title grey-text text-darken-4 activator">Solid Gold Hits</span>
                    <i className="material-icons right activator">more_vert</i>
                </div>
                <div className="card-actions u-flex">
                    <a target="_blank" href="https://itunes.apple.com/us/album/ch-check-it-out/724767716?i=724767861&amp;uo=4">
                        More
                    </a>
                </div>
            </div>
            <div className="card-reveal">
                <span className="card-title u-flex grey-text text-darken-4">Ch-Check It Out<i className="material-icons right">close</i></span>
            </div>
        </div>
    </div>
    );
  }
}
export default Card;

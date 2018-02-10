import React, {Component} from 'react';
import Card from '../card/Card';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="list-wrapper">
        <Card />
      </div>
    );
  }
}
export default List;

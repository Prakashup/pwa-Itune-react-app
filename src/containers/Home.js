import React, {Component} from 'react';
import SearchContainer from './SearchContainer';
import List from '../components/list/List';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="home">
        <SearchContainer />
        <List />
      </div>
    );
  }
}
export default Home;

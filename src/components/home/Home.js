import React, {Component} from 'react';
import Search from '../search/Search';
import List from '../list/List';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="home">
        <Search />
        <List />
      </div>
    );
  }
}
export default Home;

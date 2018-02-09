import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Card from './components/card/Card';
import Search from './components/search/Search';
import Header from './components/header/Header';
const Loading = () => <div>Loading...</div>;

const SearchComp = Loadable({
  loader: () => import('./components/search/Search'),
  loading: Loading,
});

const CardComp = Loadable({
  loader: () => import('./components/card/Card'),
  loading: Loading,
});

const App = () => (
  <Router>
    <div>
    <Header />
      <ul>
        <li><Link to="/">Search</Link></li>
        <li><Link to="/card">Upvote</Link></li>
      </ul>

      <Route exact path="/" component={SearchComp}/>
      <Route exact path="/card" component={CardComp}/>
      </div>
  </Router>
);

export default App;

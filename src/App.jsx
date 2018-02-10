import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import UpvoteItem from './components/upvotes/UpvoteItem';
import Header from './components/header/Header';

const Loading = () => <div>Loading...</div>;

const HomeComp = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

const UpvoteItemComp = Loadable({
  loader: () => import('./components/upvotes/UpvoteItem'),
  loading: Loading
});

const App = () => (
  <Router>
    <div>
      <Header />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/UpvoteItem">Upvote</Link></li>
      </ul>

      <Route exact path="/" component={ HomeComp }/>
      <Route exact path="/UpvoteItem" component={ UpvoteItemComp }/>
    </div>
  </Router>
);

export default App;

import React, {Component} from 'react';
import './header.css';

class Card extends Component {
  render() {
    return (
      <div id="header"><div class="navbar-fixed">
        <nav class="nav dark-primary-color">
          <h1 id="appHeader" role="button" class="title u-pointer">Music finder</h1>
          <div class="spacer"></div>
          <ul class="menu">
            <li class="menu__item">
              <a href="javascript:void(0);" class="menu__link user_info">
                <i class="material-icons">person</i>
                Guest
              </a>
            </li>
            <li class="menu__item ">
              <a href="javascript:void(0);" id="loginLink" class="menu__link">
                <i class="material-icons">input</i>
                <span class="icon-text">Login/Signup</span>
              </a>
            </li>
            <li class="menu__item active">
              <a href="javascript:void(0);" id="searchLink" class="menu__link">
                <i class="material-icons">search</i>
                <span class="icon-text">Search</span>
              </a>
            </li>
            <li class="menu__item ">
              <a href="javascript:void(0);" id="favLink" class="menu__link">
                <i class="material-icons">favorite</i>
                <span class="icon-text">Upvotes</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    );
  }
}
export default Card;

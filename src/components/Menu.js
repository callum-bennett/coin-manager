import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router-dom';

export default class Menu extends Component {

  render() {
    return(
      <div class="ui five item menu">
        <Link to="/" className="item" activeClassName="active" onlyActiveOnIndex>Home</Link>
        <Link to="/my-portfolio" className="item" activeClassName="active" onlyActiveOnIndex>My Portfolio</Link>
        <Link to="/exchanges" className="item" activeClassName="active" onlyActiveOnIndex>My Exchanges</Link>
        <Link to="/arbitrage" className="item" activeClassName="active" onlyActiveOnIndex>Arbitrage</Link>
        <a class="item">Other</a>
      </div>
    );
  }
}
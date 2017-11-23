import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {

  render() {
    return(
      <div className="ui five item menu">
        <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
        <NavLink to="/my-portfolio" className="item" activeClassName="active">My Portfolio</NavLink>
        <NavLink to="/exchanges" className="item" activeClassName="active">My Exchanges</NavLink>
        <NavLink to="/arbitrage" className="item" activeClassName="active">Arbitrage</NavLink>
        <a className="item">Other</a>
      </div>
    );
  }
}
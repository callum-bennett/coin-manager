import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './Menu';
import Home from './Home';
import MyPortfolio from './MyPortfolio';
import Exchanges from './Exchanges';
import Arbitrage from './Arbitrage';

import logo from '../logo.png';

class App extends Component {

  logo() {
    return (
      <img src={logo} className="logo" alt="logo" />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Route exact path="/" component={Home} />
          <Route exact path="/my-portfolio" component={MyPortfolio} />
          <Route exact path="/exchanges" component={Exchanges} />
          <Route exact path="/arbitrage" component={Arbitrage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

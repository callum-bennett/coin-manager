import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import CoinList from './renderers/CoinList';
import { Loading } from './renderers/Loading';

class Home extends Component {

  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    return this.props.coins.length
      ? <CoinList coins={this.props.coins} lastUpdated={Date.now()} />
      : <Loading />;
  }
}

function mapState ({ coins }) {
  return { coins }
}

export default connect(mapState, actions)(Home);
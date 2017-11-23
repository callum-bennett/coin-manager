import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.fetchCoins();
  }

  renderCoins() {
    return this.props.coins.map(coin => {
      return (
        <div key={coin.id}>
          {coin.symbol}
        </div>
      )
    });
  }

  render() {
    return(
      <div>
        {this.renderCoins()}
      </div>
    );
  }
}

function mapState ({ coins }) {
  return { coins }
}

export default connect(mapState, actions)(Home);
import React, { Component } from 'react';
import { Container, Table } from 'semantic-ui-react';
import moment from 'moment';

class CoinList extends Component {

  colorClass(percent) {
    let className;
      if (percent > 0) {
        className = 'percent-green';
      } else if (percent > -5) {
        className = 'percent-yellow';
      } else {
        className = 'percent-red';
      }
    className += ' center aligned';
    return className
  }

  renderHeaderCell(content, classes) {
    return <Table.HeaderCell className={classes}>{content}</Table.HeaderCell>;
  }

  render() {

    const lastUpdated = moment(this.props.lastUpdated);

    console.log(this.props.coins);
    return (
      <Container>
        <div className="">Last updated: {lastUpdated.format('DD-MM-YY h:mm:ss a')}</div>
        <Table celled className="ui inverted table">
          <Table.Header>
            <Table.Row>
              {this.renderHeaderCell('Coin')}
              {this.renderHeaderCell('Market Cap', 'center aligned')}
              {this.renderHeaderCell('1hr Change', 'center aligned')}
              {this.renderHeaderCell('24hr Change', 'center aligned')}
              {this.renderHeaderCell('1 week Change', 'center aligned')}
              {this.renderHeaderCell('BTC', 'center aligned')}
              {this.renderHeaderCell('USD', 'center aligned')}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              this.props.coins.map(coin => {
                return (
                  <Table.Row key={coin.id}>
                    <Table.Cell>
                      {coin.name} ({coin.symbol})
                    </Table.Cell>
                    <Table.Cell className="center aligned">
                      ${parseInt(coin.market_cap_usd).toLocaleString()}
                      </Table.Cell>
                    <Table.Cell className={this.colorClass(coin.percent_change_1h)}>
                      {coin.percent_change_1h}%
                    </Table.Cell>
                    <Table.Cell className={this.colorClass(coin.percent_change_24h)}>
                      {coin.percent_change_24h}%
                    </Table.Cell>
                    <Table.Cell className={this.colorClass(coin.percent_change_7d)}>
                      {coin.percent_change_7d}%
                    </Table.Cell>
                    <Table.Cell className="center aligned">
                      {coin.price_btc}
                      </Table.Cell>
                    <Table.Cell className="center aligned">
                      {parseFloat(coin.price_usd).toFixed(2)}
                      </Table.Cell>
                  </Table.Row>
                )
              })
            }
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default CoinList;
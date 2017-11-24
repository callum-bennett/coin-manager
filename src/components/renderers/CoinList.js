import React, { Component } from 'react';
import { Container, Icon, Label, Menu, Table } from 'semantic-ui-react';

class CoinList extends Component {

  render() {
    const imageBaseUrl = 'https://coinmarketcap.com/static/img/coins/16x16/';

    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Symbol</Table.HeaderCell>
              <Table.HeaderCell>Coin</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              this.props.coins.map(coin => {
                const imageUrl = `${imageBaseUrl}${coin.name.toLowerCase()}.png`;
                return (
                  <Table.Row key={coin.id}>
                    <Table.Cell> <img src={imageUrl} /> {coin.symbol}</Table.Cell>
                    <Table.Cell>{coin.name}</Table.Cell>
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
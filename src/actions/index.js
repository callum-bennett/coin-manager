import axios from 'axios';

import { FETCH_COINS } from './types';

export const fetchCoins = () => async dispatch => {
  const res = await axios.get('https://api.coinmarketcap.com/v1/ticker/');
  dispatch({ type: FETCH_COINS, payload: res.data })
};
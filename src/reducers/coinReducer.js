import { FETCH_COINS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COINS:
      return action.payload;
    default:
      return state;
  }
};
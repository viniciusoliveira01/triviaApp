import axios from 'axios';
import { FETCH_GAME, FETCH_GAME_SUCCESS, FETCH_GAME_ERROR } from './types';

export function fetchGame() {
  return async dispatch => {
    dispatch({
      type: FETCH_GAME
    });

    await axios
      .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean', {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
      .then(res => {
        const game = res.data.results;

        dispatch({
          type: FETCH_GAME_SUCCESS,
          payload: game
        });
      })
      .catch(e => {
        dispatch({
          type: FETCH_GAME_ERROR,
          payload: e
        });
      });
  };
}

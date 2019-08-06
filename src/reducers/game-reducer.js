import { FETCH_GAME, FETCH_GAME_SUCCESS, FETCH_GAME_ERROR } from '../actions/types';

const gameState = {
  isGameLoading: false,
  game: [],
  error: null
};

const gameReducer = (state = gameState, action) => {
  const newState = {};

  switch (action.type) {
    case FETCH_GAME: {
      Object.assign(newState, state, {
        isGameLoading: true
      });
      return newState;
    }
    case FETCH_GAME_SUCCESS: {
      Object.assign(newState, state, {
        isGameLoading: false,
        game: action.payload
      });
      return newState;
    }
    case FETCH_GAME_ERROR: {
      Object.assign(newState, state, {
        isGameLoading: false,
        error: action.payload
      });
      return newState;
    }
    default:
      return state;
  }
};

export default gameReducer;

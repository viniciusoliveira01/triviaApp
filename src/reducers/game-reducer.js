import { FETCH_GAME, FETCH_GAME_SUCCESS, FETCH_GAME_ERROR, NEXT_QUESTION } from '../actions/types';

const gameState = {
  isGameLoading: false,
  questions: [],
  totalScore: 0,
  currentQuestionIndex: 0,
  currentQuestion: '',
  userAnswers: [],
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
        questions: action.payload.questions,
        currentQuestion: action.payload.currentQuestion
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
    case NEXT_QUESTION: {
      const newUserAnswers = [...state.userAnswers, action.payload.userAnswer];

      Object.assign(newState, state, {
        currentQuestionIndex: action.payload.currentQuestionIndex,
        totalScore: action.payload.totalScore,
        currentQuestion: action.payload.currentQuestion,
        userAnswers: newUserAnswers
      });
      return newState;
    }
    default:
      return state;
  }
};

export default gameReducer;

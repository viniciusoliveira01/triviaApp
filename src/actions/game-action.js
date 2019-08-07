import axios from 'axios';
import { FETCH_GAME, FETCH_GAME_SUCCESS, FETCH_GAME_ERROR, NEXT_QUESTION } from './types';
import NavigationService from '../config/navigationService';

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
        const questions = res.data.results;
        const currentQuestion = questions[0].question;

        dispatch({
          type: FETCH_GAME_SUCCESS,
          payload: { questions, currentQuestion }
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

export function nextQuestion(questions, currentAnswer, currentQuestionIndex, totalScore) {
  return async dispatch => {
    let newTotalScore = totalScore;
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (currentAnswer === questions[currentQuestionIndex].correct_answer) {
      newTotalScore += 1;
    }

    if (nextQuestionIndex < questions.length) {
      dispatch({
        type: NEXT_QUESTION,
        payload: {
          currentQuestionIndex: nextQuestionIndex,
          totalScore: newTotalScore,
          currentQuestion: questions[nextQuestionIndex].question
        }
      });
    } else {
      dispatch({
        type: NEXT_QUESTION,
        payload: {
          currentQuestionIndex,
          totalScore: newTotalScore
        }
      });

      NavigationService.navigate('Result');
    }
  };
}

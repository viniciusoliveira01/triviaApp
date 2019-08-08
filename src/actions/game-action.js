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
    const nextQuestionIndex = currentQuestionIndex + 1;
    const nextQuestionObject = questions[nextQuestionIndex];
    const currentQuestionObject = questions[currentQuestionIndex];
    const { correct_answer } = currentQuestionObject;

    let newTotalScore = totalScore;
    let userAnswer = {};

    if (currentAnswer === correct_answer) {
      newTotalScore += 1;
    }

    userAnswer = {
      question: currentQuestionObject.question,
      correct_answer,
      userAnswer: currentAnswer
    };

    if (nextQuestionIndex < questions.length) {
      dispatch({
        type: NEXT_QUESTION,
        payload: {
          currentQuestionIndex: nextQuestionIndex,
          totalScore: newTotalScore,
          currentQuestion: nextQuestionObject.question,
          userAnswer
        }
      });
    } else {
      dispatch({
        type: NEXT_QUESTION,
        payload: {
          currentQuestionIndex,
          totalScore: newTotalScore,
          userAnswer
        }
      });

      NavigationService.navigate('Result');
    }
  };
}

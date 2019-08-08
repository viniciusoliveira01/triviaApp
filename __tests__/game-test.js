import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import mockAxios from '../__mock__/axios';
import questions from '../__mock__/questions';
import { fetchGame, nextQuestion } from '../src/actions/game-action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Test the game', () => {
  it('expect that the request should be successful', () => {
    const store = mockStore({});

    const expectedActions = ['FETCH_GAME', 'FETCH_GAME_SUCCESS', 'FETCH_GAME_ERROR'];

    mockAxios.get('*', { response: 200 });
    return store.dispatch(fetchGame()).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it('expect the next question action is working', () => {
    const store = mockStore({});

    const expectedActions = 'NEXT_QUESTION';

    const currentAnswer = 'True';
    const currentQuestionIndex = 0;
    const totalScore = 0;

    return store
      .dispatch(nextQuestion(questions, currentAnswer, currentQuestionIndex, totalScore))
      .then(() => {
        const actualActions = store.getActions().map(action => action);
        const { type } = actualActions[0];
        const { payload } = actualActions[0];

        expect(type).toEqual(expectedActions);
        expect(payload.currentQuestionIndex).toEqual(1);
        expect(payload.totalScore).toEqual(1);
        // At this point the currentQuestion is the next question.
        expect(payload.currentQuestion).toEqual(
          'Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.'
        );
      });
  });
});

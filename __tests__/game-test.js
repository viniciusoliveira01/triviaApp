import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from '../__mock__/axios';

import { fetchGame } from '../src/actions/game-action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Test fetch game', () => {
  it('expect that the request should be successful', () => {
    const store = mockStore({});

    const expectedActions = ['FETCH_GAME', 'FETCH_GAME_SUCCESS'];

    mockAxios.get('*', { response: 200 });
    return store.dispatch(fetchGame()).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import store from './src/config/store';
import Routes from './src/config/Routes';

const navigator = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

AppRegistry.registerComponent(appName, () => navigator);
console.disableYellowBox = true;

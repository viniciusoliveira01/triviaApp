import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Routes from './src/config/Routes';

const navigator = () => <Routes />;

AppRegistry.registerComponent(appName, () => navigator);

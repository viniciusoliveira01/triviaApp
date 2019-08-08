import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NavigationService from './navigationService';
import HomeScreen from '../screens/Home/HomeScreen';
import QuizScreen from '../screens/Quiz/QuizScreen';
import ResultScreen from '../screens/Result/ResultScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Quiz: {
      screen: QuizScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

const Routes = () => {
  return (
    <AppContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default Routes;

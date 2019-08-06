import { createStackNavigator, createAppContainer } from 'react-navigation';

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
    initialRouteName: 'Result',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);

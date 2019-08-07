import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Commons/Button';
import { fetchGame } from '../../actions/game-action';
import colors from '../../config/colors';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(fetchGame());
    navigation.navigate('Quiz');
  };

  return (
    <WelcomeSafeArea>
      <HomeContainer>
        <WelcomeTitle>Welcome to the {'\n'}Trivia Challenge!</WelcomeTitle>
        <WelcomeText>
          You will be presented {'\n'}with 10 true or false{'\n'} questions.
        </WelcomeText>
        <WelcomeText>Can you score 100%?</WelcomeText>
        <Button text="begin" onPress={startGame} />
      </HomeContainer>
    </WelcomeSafeArea>
  );
};

const WelcomeSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.iceWhite};
`;

const HomeContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

const WelcomeTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const WelcomeText = styled.Text`
  color: ${colors.darkGrey};
  font-size: 22px;
  text-align: center;
  margin: 10px;
`;

export default HomeScreen;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Commons/Button';
import { fetchGame } from '../../actions/game-action';
import colors from '../../config/colors';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const isGameLoading = useSelector(state => state.gameReducer.isGameLoading);

  const startGame = () => {
    dispatch(fetchGame());
  };

  return (
    <WelcomeSafeArea>
      <HomeContainer>
        <WelcomeTitle>Welcome to the {'\n'}Trivia Challenge!</WelcomeTitle>
        <WelcomeText>
          You will be presented {'\n'}with 10 true or false{'\n'} questions.
        </WelcomeText>
        <WelcomeText>Can you score 100%?</WelcomeText>
        <Button text="begin" onPress={startGame} isLoading={isGameLoading} />
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

import React from 'react';
import styled from 'styled-components';

const HomeScreen = () => {
  return (
    <WelcomeSafeArea>
      <HomeContainer>
        <WelcomeTitle>Welcome to the {'\n'}Trivia Challenge!</WelcomeTitle>
        <WelcomeText>
          You will be presented {'\n'}with 10 true or false{'\n'} questions.
        </WelcomeText>
        <WelcomeText>Can you score 100%?</WelcomeText>
        <BeginButton>
          <BeginButtonText> begin</BeginButtonText>
        </BeginButton>
      </HomeContainer>
    </WelcomeSafeArea>
  );
};

const WelcomeSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const HomeContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const WelcomeTitle = styled.Text`
  font-size: 24px;
  font-family: Open Sans;
  font-weight: bold;
  text-align: center;
`;

const WelcomeText = styled.Text`
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  margin: 10px;
`;

const BeginButton = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
`;

const BeginButtonText = styled.Text`
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  text-transform: uppercase;
`;

export default HomeScreen;

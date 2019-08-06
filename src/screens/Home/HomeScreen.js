import React from 'react';
import styled from 'styled-components';

import colors from '../../config/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <WelcomeSafeArea>
      <HomeContainer>
        <WelcomeTitle>Welcome to the {'\n'}Trivia Challenge!</WelcomeTitle>
        <WelcomeText>
          You will be presented {'\n'}with 10 true or false{'\n'} questions.
        </WelcomeText>
        <WelcomeText>Can you score 100%?</WelcomeText>
        <BeginButton onPress={() => navigation.navigate('Quiz')}>
          <BeginButtonText>begin</BeginButtonText>
        </BeginButton>
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
`;

const WelcomeTitle = styled.Text`
  font-size: 20px;
  font-family: Open Sans;
  font-weight: bold;
  text-align: center;
`;

const WelcomeText = styled.Text`
  color: ${colors.darkGrey};
  font-size: 22px;
  font-family: Open Sans 
  text-align: center;
  margin: 10px;
`;

const BeginButton = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background-color: ${colors.lightNavy};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const BeginButtonText = styled.Text`
  color: ${colors.white}
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  text-transform: uppercase;
`;

export default HomeScreen;

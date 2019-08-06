import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../config/colors';

const QuizScreen = () => {
  return (
    <QuizSafeArea>
      <CategoryTitle>Entertainment: Video Games</CategoryTitle>
      <QuizContainer>
        <QuestionContainer>
          <QuestionText>Unterned originally started as a Roblox Game.</QuestionText>
        </QuestionContainer>

        <QuestionText>1 of 10</QuestionText>

        <AnswerButtonContainer>
          <AnswerButton trueButton>
            <Icon name="check" size={28} style={{ color: colors.white }} />
          </AnswerButton>
          <AnswerButton>
            <Icon name="close" size={28} style={{ color: colors.white }} />
          </AnswerButton>
        </AnswerButtonContainer>
      </QuizContainer>
    </QuizSafeArea>
  );
};

const QuizSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.iceWhite};
`;

const QuizContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CategoryTitle = styled.Text`
  font-size: 24px;
  font-family: Open Sans;
  font-weight: bold;
  text-align: center;
`;

const QuestionContainer = styled.View`
  background-color: #ececee;
  border-radius: 3px;
  height: 250px;
  width: 250px;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const QuestionText = styled.Text`
  color: ${colors.black}
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  margin: 30px;
`;

const AnswerButtonContainer = styled.SafeAreaView`
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
`;

const AnswerButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.trueButton ? colors.darkGreen : colors.red)};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 3px;
`;

const AnswerButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-family: Open Sans;
  text-align: center;
  text-transform: uppercase;
`;

export default QuizScreen;

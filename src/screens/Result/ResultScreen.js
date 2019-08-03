import React from 'react';
import styled from 'styled-components';

import AnswerResult from '../../components/AnswerResult';

const ResultScreen = () => {
  return (
    <QuizSafeArea>
      <QuizContainer>
        <CategoryTitle>YOU SCORED{'\n'}1/10</CategoryTitle>

        <QuestionContainer>
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
        </QuestionContainer>

        <BeginButton>
          <BeginButtonText>Play again</BeginButtonText>
        </BeginButton>
      </QuizContainer>
    </QuizSafeArea>
  );
};

const QuizSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const QuizContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const CategoryTitle = styled.Text`
  font-size: 24px;
  font-family: Open Sans;
  font-weight: bold;
  text-align: center;
`;

const QuestionContainer = styled.View``;

const QuestionText = styled.Text`
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  margin: 30px;
`;

const BeginButton = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
`;

const BeginButtonText = styled.Text`
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  text-transform: uppercase;
`;

export default ResultScreen;

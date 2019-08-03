import React from 'react';
import styled from 'styled-components';

const QuizScreen = () => {
  return (
    <QuizSafeArea>
      <CategoryTitle>Entertainment: Video Games</CategoryTitle>
      <QuizContainer>
        <QuestionContainer>
          <QuestionText>Unterned originally started as a Roblox Game.</QuestionText>
        </QuestionContainer>

        <QuestionText>1 of 10</QuestionText>

        <AnswerButton>
          <AnswerButtonText>True</AnswerButtonText>
        </AnswerButton>
        <AnswerButton>
          <AnswerButtonText>False</AnswerButtonText>
        </AnswerButton>
      </QuizContainer>
    </QuizSafeArea>
  );
};

const QuizSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const QuizContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const CategoryTitle = styled.Text`
  font-size: 24px;
  font-family: Open Sans;
  font-weight: bold;
  text-align: center;
`;

const QuestionContainer = styled.View`
  border: 1px solid #000;
  height: 250px;
  width: 250px;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const QuestionText = styled.Text`
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  margin: 30px;
`;

const AnswerButton = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background-color: #8ea3ff;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 3px;
`;

const AnswerButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: Open Sans;
  text-align: center;
  text-transform: uppercase;
`;

export default QuizScreen;

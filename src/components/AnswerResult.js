import React from 'react';
import styled from 'styled-components';

const AnswerResult = ({ resultText }) => {
  return (
    <AnswerContainer>
      <Icon>-</Icon>
      <QuestionText>{resultText}</QuestionText>
    </AnswerContainer>
  );
};

const AnswerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.Text`
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  margin-right: 10px;
`;

const QuestionText = styled.Text`
  font-size: 14px;
  font-family: Open Sans 
  text-align: center;

`;

export default AnswerResult;

import React from 'react';
import styled from 'styled-components';
import { AllHtmlEntities } from 'html-entities';

import colors from '../../config/colors';

const Button = ({ question, questionsQuantity, actualQuestion }) => {
  const entities = new AllHtmlEntities();
  return (
    <>
      <QuestionContainer>
        <QuestionText>{entities.decode(question)}</QuestionText>
      </QuestionContainer>

      <QuestionText>
        {actualQuestion} of {questionsQuantity}
      </QuestionText>
    </>
  );
};

const QuestionContainer = styled.View`
  background-color: #ececee;
  border-radius: 3px;
  height: 250px;
  width: 250px;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

const QuestionText = styled.Text`
  color: ${colors.black}
  font-size: 18px;
  text-align: center;
  margin: 30px;
`;

export default Button;

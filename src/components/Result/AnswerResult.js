import React from 'react';
import styled from 'styled-components';
import { AllHtmlEntities } from 'html-entities';

import colors from '../../config/colors';

const AnswerResult = ({ result: { question, correct_answer } }) => {
  const entities = new AllHtmlEntities();
  return (
    <AnswerContainer>
      <AnswerText questionAnswer={correct_answer}>
        {correct_answer === 'True' ? 'True' : 'False'}{' '}
      </AnswerText>

      <QuestionText questionAnswer={correct_answer}>{entities.decode(question)}</QuestionText>
    </AnswerContainer>
  );
};

const AnswerContainer = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px 10px;
  flex-grow: 1;
  flex: 1;
`;

const AnswerText = styled.Text`
  color: ${props => (props.questionAnswer === 'True' ? colors.green : colors.red)};
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`;

const QuestionText = styled.Text`
  color: ${colors.darkGrey};
  font-size: 14px;

  font-weight: 500;
  text-align: left;
`;

export default AnswerResult;

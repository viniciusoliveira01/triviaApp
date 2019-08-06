import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';

const AnswerResult = ({ resultText }) => {
  return (
    <AnswerContainer>
      <Icon name="plus" size={18} style={{ marginTop: 5 }} />
      {/* <Icon name="minus" size={18} /> */}
      <QuestionText>{resultText}</QuestionText>
    </AnswerContainer>
  );
};

const AnswerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px 30px;
`;

const QuestionText = styled.Text`
  color: ${colors.darkGrey};
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 500;
  text-align: left;
  margin-left: 10px;
`;

export default AnswerResult;

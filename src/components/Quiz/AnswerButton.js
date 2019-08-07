import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../config/colors';

const Button = ({ iconText, trueButton, onPress }) => {
  return (
    <AnswerButton trueButton={trueButton} onPress={onPress}>
      <Icon name={iconText} size={28} style={{ color: colors.white }} />
    </AnswerButton>
  );
};

const AnswerButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.trueButton ? colors.darkGreen : colors.red)};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 3px;
`;

export default Button;

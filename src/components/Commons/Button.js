import React from 'react';
import styled from 'styled-components';

import colors from '../../config/colors';

const Button = ({ text, onPress }) => {
  return (
    <BeginButton onPress={onPress}>
      <BeginButtonText>{text}</BeginButtonText>
    </BeginButton>
  );
};

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
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export default Button;

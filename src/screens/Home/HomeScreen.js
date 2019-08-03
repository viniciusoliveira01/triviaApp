import React from 'react';
import styled from 'styled-components';

const HomeScreen = () => {
  return (
    <HomeContainer>
      <WelcomeText>Trivia app</WelcomeText>
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
  font-family: Open Sans 
  text-align: center;
  margin: 10px;
`;

export default HomeScreen;

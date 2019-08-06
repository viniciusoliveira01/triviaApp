import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

import colors from '../../config/colors';
import AnswerResult from '../../components/AnswerResult';

const ResultScreen = ({ navigation }) => {
  const progressPercent = (2 / 10) * 100;
  const isProgressCompleted = progressPercent === 100 ? colors.darkGreen : colors.lightNavy;
  return (
    <QuizSafeArea>
      <QuizContainer>
        <View>
          <QuizScoreTitle>YOU SCORED{'\n'}1/10</QuizScoreTitle>

          <ProgressBarAnimated
            width={300}
            value={progressPercent}
            backgroundColor={isProgressCompleted}
          />
        </View>

        <QuestionContainer persistentScrollbar>
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
          <AnswerResult result resultText="Unterned originally started as a Roblox Game." />
        </QuestionContainer>

        <BeginButton onPress={() => navigation.navigate('Home')}>
          <BeginButtonText>play again</BeginButtonText>
        </BeginButton>
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
  justify-content: space-around;
  align-items: center;
`;

const QuizScoreTitle = styled.Text`
  font-size: 24px;
  font-family: Open Sans;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const QuestionContainer = styled.ScrollView`
  margin: 30px 0;
`;

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
  font-size: 18px;
  font-family: Open Sans 
  text-align: center;
  text-transform: uppercase;
`;

export default ResultScreen;

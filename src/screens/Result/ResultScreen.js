import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

import AnswerResult from '../../components/Result/AnswerResult';
import Button from '../../components/Commons/Button';
import colors from '../../config/colors';

const ResultScreen = ({ navigation }) => {
  const questions = useSelector(state => state.gameReducer.questions);
  const totalScore = useSelector(state => state.gameReducer.totalScore);
  const progressPercent = (totalScore / questions.length) * 100;
  const isProgressCompleted = progressPercent === 100 ? colors.darkGreen : colors.lightNavy;

  return (
    <QuizSafeArea>
      <QuizContainer>
        <>
          <QuizScoreTitle>
            YOU SCORED{'\n'}
            {totalScore}/{questions.length}
          </QuizScoreTitle>

          <ProgressBarAnimated
            width={300}
            value={progressPercent}
            backgroundColor={isProgressCompleted}
          />
        </>

        <QuestionContainer persistentScrollbar>
          <FlatList data={questions} renderItem={({ item }) => <AnswerResult result={item} />} />
        </QuestionContainer>

        <Button text="play again" onPress={() => navigation.navigate('Home')} />
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
  padding: 30px 0;
`;

const QuizScoreTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const QuestionContainer = styled.ScrollView`
  margin: 30px 0;
`;

export default ResultScreen;

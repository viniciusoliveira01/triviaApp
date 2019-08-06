import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import Question from '../../components/Question';
import colors from '../../config/colors';

const QuizScreen = ({ navigation }) => {
  const questions = useSelector(state => state.gameReducer.game);
  const isGameLoading = useSelector(state => state.gameReducer.isGameLoading);

  const onAnswerQuestion = () => {
    navigation.navigate('Result');
  };

  if (isGameLoading) {
    return (
      <ActivityIndicator
        size="large"
        color={colors.lightNavy}
        style={{ flex: 1, alignSelf: 'center' }}
      />
    );
  }

  return (
    <QuizSafeArea>
      <CategoryTitle>Entertainment: Video Games</CategoryTitle>
      <QuizContainer>
        <Question
          question={questions[0].question}
          actualQuestion={2}
          questionsQuantity={questions.length}
        />

        <AnswerButtonContainer>
          <AnswerButton trueButton onPress={onAnswerQuestion}>
            <Icon name="check" size={28} style={{ color: colors.white }} />
          </AnswerButton>
          <AnswerButton onPress={onAnswerQuestion}>
            <Icon name="close" size={28} style={{ color: colors.white }} />
          </AnswerButton>
        </AnswerButtonContainer>
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
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const CategoryTitle = styled.Text`
  font-size: 24px;
  font-family: Open Sans;
  font-weight: bold;
  text-align: center;
`;

const AnswerButtonContainer = styled.SafeAreaView`
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
`;

const AnswerButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.trueButton ? colors.darkGreen : colors.red)};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 3px;
`;

const AnswerButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-family: Open Sans;
  text-align: center;
  text-transform: uppercase;
`;

export default QuizScreen;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { nextQuestion } from '../../actions/game-action';
import Question from '../../components/Quiz/Question';
import AnswerButton from '../../components/Quiz/AnswerButton';
import colors from '../../config/colors';

const QuizScreen = () => {
  const dispatch = useDispatch();

  const questions = useSelector(state => state.gameReducer.questions);
  const currentQuestion = useSelector(state => state.gameReducer.currentQuestion);
  const currentCategory = useSelector(state => state.gameReducer.currentCategory);
  const currentQuestionIndex = useSelector(state => state.gameReducer.currentQuestionIndex);
  const totalScore = useSelector(state => state.gameReducer.totalScore);

  const onAnswerQuestion = answer =>
    dispatch(nextQuestion(questions, answer, currentQuestionIndex, totalScore));

  return (
    <QuizSafeArea>
      <CategoryTitle>{currentCategory}</CategoryTitle>
      <QuizContainer>
        <Question
          question={currentQuestion}
          actualQuestion={currentQuestionIndex + 1}
          questionsQuantity={questions.length}
        />

        <AnswerButtonContainer>
          <AnswerButton iconText="check" trueButton onPress={() => onAnswerQuestion('True')} />
          <AnswerButton iconText="close" onPress={() => onAnswerQuestion('False')} />
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
  font-weight: bold;
  text-align: center;
`;

const AnswerButtonContainer = styled.SafeAreaView`
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
`;

export default QuizScreen;

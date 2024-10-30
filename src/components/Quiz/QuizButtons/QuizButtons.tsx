import { Button, Flex } from 'antd';

import { useGetQuizQuery } from '@/store/quizApi';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { quizActions, selectCurrentStep, selectTimeRemaining } from '@/store/quiz';
import { FinishButton } from './FinishButton';

const NextButton = () => {
  const dispatch = useAppDispatch();

  const handleNextStep = () => {
    dispatch(quizActions.nextQuestion());
  };

  return <Button onClick={handleNextStep}>Далее</Button>;
};

const PrevButton = () => {
  const dispatch = useAppDispatch();

  const handlePrevStep = () => {
    dispatch(quizActions.prevQuestion());
  };

  return <Button onClick={handlePrevStep}>Назад</Button>;
};

const ResetButton = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(quizActions.reset());
  };

  return <Button onClick={handleReset}>Сбросить и начать сначала</Button>;
};

export const QuizButtons = () => {
  const { data: quiz } = useGetQuizQuery();
  const timeRemaining = useAppSelector(selectTimeRemaining);
  const step = useAppSelector(selectCurrentStep);
  const stepsAmount = quiz?.questions.length ? quiz?.questions.length - 1 : 0;
  const isLastStep = step === stepsAmount;
  const isFirstStep = step === 0;

  if (!quiz) {
    return null;
  }

  return (
    <Flex gap={20}>
      {!isFirstStep && <PrevButton />}
      {!isLastStep ? <NextButton /> : <FinishButton />}
      {timeRemaining !== null && timeRemaining === 0 && <ResetButton />}
    </Flex>
  );
};

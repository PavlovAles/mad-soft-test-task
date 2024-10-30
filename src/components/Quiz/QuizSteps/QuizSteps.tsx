import { StepProps, Steps } from 'antd';
import { useMemo } from 'react';
import { SmileOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useGetQuizQuery } from '@/store/quizApi';
import { quizActions, selectCurrentStep } from '@/store/quiz';

export const QuizSteps = () => {
  const { data: quiz } = useGetQuizQuery();
  const dispatch = useAppDispatch();
  const step = useAppSelector(selectCurrentStep);

  const items = useMemo(() => {
    const steps: StepProps[] = new Array(quiz?.questions.length).fill({});
    if (steps.length) {
      steps[steps.length - 1] = { icon: <SmileOutlined /> };
    }
    return steps;
  }, [quiz?.questions.length]);

  const onChange = (value: number) => {
    dispatch(quizActions.setStep(value));
  };

  if (!quiz) {
    return null;
  }

  return <Steps current={step} items={items} onChange={onChange} />;
};

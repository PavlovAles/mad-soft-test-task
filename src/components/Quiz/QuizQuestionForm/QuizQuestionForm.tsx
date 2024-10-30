// import Form from 'antd/es/form/Form';

import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useGetQuizQuery } from '@/store/quizApi';
import { quizActions, selectAnswer, selectCurrentStep } from '@/store/quiz';
import { Form } from 'antd';
import Text from 'antd/es/typography/Text';
import { FC } from 'react';
import { IQuestion, QuestionTypeQuestionMap } from '@/types/question';
import { SingleQuestionFields } from './SingleQuestionFields';
import { MultipleQuestionFields } from './MultipleQuestionFields';
import { TextQuestionFields } from './TextQuestionFields';
import { LongTextQuestionFields } from './LongTextQuestionFields';

export interface IFormItemsComponent {
  question: IQuestion;
}
const FormItemsComponentDict: { [K in keyof QuestionTypeQuestionMap]: FC<{ question: QuestionTypeQuestionMap[K] }> } = {
  'single': SingleQuestionFields,
  'multiple': MultipleQuestionFields,
  'text': TextQuestionFields,
  'long-text': LongTextQuestionFields,
};

export const QuizQuestionForm = () => {
  const { data: quiz } = useGetQuizQuery();
  const dispatch = useAppDispatch();
  const step = useAppSelector(selectCurrentStep);
  const question = quiz?.questions[step];
  const answer = useAppSelector(state => selectAnswer(state, question?.id || ''));

  const onValuesChange = (values: Record<string, string | string[]>) => {
    if (!question) return;
    const answer = values[question.id];
    dispatch(quizActions.answer({ questionId: question.id, value: answer }));
  };

  if (!question) {
    return null;
  }

  const type = question.type;
  const FormItems = FormItemsComponentDict[type] as FC<{ question: IQuestion }>;

  return (
    <Form
      layout='vertical'
      onValuesChange={onValuesChange}
      key={question.id}
      initialValues={{ [question.id]: answer?.value }}
    >
      <Form.Item>
        <Text>{question.title}</Text>
      </Form.Item>
      <FormItems question={question} />
    </Form>
  );
};

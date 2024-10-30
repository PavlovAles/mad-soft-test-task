import { FC } from 'react';
import { Form, Input } from 'antd';
import { IQuestionWithText } from '@/types/question';

interface TextQuestionFieldsProps {
  question: IQuestionWithText;
}

export const TextQuestionFields: FC<TextQuestionFieldsProps> = ({ question }) => {
  return (
    <Form.Item name={question.id}>
      <Input />
    </Form.Item>
  );
};

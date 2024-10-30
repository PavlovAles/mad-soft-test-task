import { FC } from 'react';
import { Checkbox, Form, Space } from 'antd';

import { IQuestionWithMultipleOptions } from '@/types/question';

interface MultipleQuestionFieldsProps {
  question: IQuestionWithMultipleOptions;
}

export const MultipleQuestionFields: FC<MultipleQuestionFieldsProps> = ({ question }) => {
  return (
    <Form.Item name={question.id}>
      <Checkbox.Group>
        <Space direction='vertical'>
          {question.options.map(option => (
            <Checkbox key={`${question.id}${option.value}`} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </Form.Item>
  );
};

import { FC } from 'react';
import { Form, Radio, Space } from 'antd';

import { IQuestionWithOneOption } from '@/types/question';

interface SingleQuestionFieldsProps {
  question: IQuestionWithOneOption;
}

export const SingleQuestionFields: FC<SingleQuestionFieldsProps> = ({ question }) => {
  return (
    <Form.Item name={question.id}>
      <Radio.Group>
        <Space direction='vertical'>
          {question.options.map(option => (
            <Radio key={`${question.id}${option.value}`} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};

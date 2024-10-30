import { FC } from 'react';
import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import { IQuestionWithText } from '@/types/question';

interface LongTextQuestionFieldsProps {
  question: IQuestionWithText;
}

export const LongTextQuestionFields: FC<LongTextQuestionFieldsProps> = ({ question }) => {
  return (
    <Form.Item name={question.id}>
      <TextArea
        autoSize={{
          minRows: 4,
          maxRows: 6,
        }}
      />
    </Form.Item>
  );
};

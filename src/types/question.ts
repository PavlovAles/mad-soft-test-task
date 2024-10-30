import { IQuestionOption } from './questionOption';

export type QuestionTypeQuestionMap = {
  'single': IQuestionWithOneOption;
  'multiple': IQuestionWithMultipleOptions;
  'text': IQuestionWithText;
  'long-text': IQuestionWithText;
};
export type QuestionType = keyof QuestionTypeQuestionMap;

interface IBaseQuestion {
  id: string;
  title: string;
  type: QuestionType;
}

export type IQuestion = IQuestionWithOneOption | IQuestionWithMultipleOptions | IQuestionWithText;

export interface IQuestionWithOneOption extends IBaseQuestion {
  type: 'single';
  options: IQuestionOption[];
  answer: string;
}

export interface IQuestionWithMultipleOptions extends IBaseQuestion {
  type: 'multiple';
  options: IQuestionOption[];
  answer: string[];
}

export interface IQuestionWithText extends IBaseQuestion {
  type: 'text' | 'long-text';
  answer?: string;
}

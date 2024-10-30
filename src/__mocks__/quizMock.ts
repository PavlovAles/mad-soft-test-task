import { IQuiz } from '@/types/quiz';

export const fetchMockQuizList = async (): Promise<IQuiz> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(quizMock);
    }, 1000);
  });
};

const quizMock: IQuiz = {
  id: '1',
  title: 'Почему стоит нанять меня на работу?',
  timeRestriction: 60,
  questions: [
    {
      id: '1',
      title: 'Какими технологиями я владею?',
      type: 'multiple',
      options: [
        {
          label: 'Next.js',
          value: 'A',
        },
        {
          label: 'TypeScript',
          value: 'B',
        },
        {
          label: 'Слепое вязание крючком',
          value: 'C',
        },
        {
          label: 'GraphQL',
          value: 'D',
        },
      ],
      answer: ['A', 'B', 'D'],
    },
    {
      id: '2',
      title: 'Какими личным качествами, что помогают мне эффективно справляться с техническими вызовами, я обладаю?',
      type: 'multiple',
      options: [
        {
          label: 'Внимание к деталям и желание развиваться',
          value: 'A',
        },
        {
          label: 'Умение выполнять сальто назад', // да, но нет :)
          value: 'B',
        },
        {
          label: 'Склонность к одиночной работе, избегание новых задач',
          value: 'C',
        },
        {
          label: 'Ответственное отношение к работе и открытость',
          value: 'D',
        },
      ],
      answer: ['A'],
    },
    {
      id: '3',
      type: 'single',
      title: 'Сколько лет опыта я "накрутил"?',
      options: [
        {
          label: '0-1 год',
          value: 'A',
        },
        {
          label: '0',
          value: 'B',
        },
        {
          label: '3-5 лет',
          value: 'C',
        },
        {
          label: '5+ лет',
          value: 'D',
        },
      ],
      answer: 'B',
    },
    {
      id: '4',
      type: 'text',
      title: 'Можете оставить контакт, если хотите, чтобы я связался с Вами',
    },
    {
      id: '5',
      type: 'long-text',
      title: 'Хотите оставить фидбек?',
    },
  ],
};

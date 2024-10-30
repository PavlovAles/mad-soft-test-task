import { Flex, Spin } from 'antd';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';

import { useGetQuizQuery } from '@/store/quizApi';
import { QuizSteps } from './QuizSteps';
import { QuizQuestionForm } from './QuizQuestionForm';
import { QuizButtons } from './QuizButtons';
import { Timer } from '../Timer';
import styles from './Quiz.module.scss';

export const Quiz = () => {
  const { data: quiz, error, isLoading } = useGetQuizQuery();

  if (isLoading) {
    return <Spin fullscreen size='large' />;
  }

  if (error) {
    console.log('@fetchMockQuizList', error);
    return <Text>Что-то пошло не так при загрузке теста...</Text>;
  }

  if (!quiz) {
    return <Text>Тестов пока нет</Text>;
  }

  return (
    <section className={styles.quizWrapper}>
      <Flex vertical gap={20} wrap>
        <Flex gap={20} align='center'>
          <Title level={1}>{quiz.title}</Title>
          <Timer />
        </Flex>
        <QuizSteps />
        <QuizQuestionForm />
        <QuizButtons />
      </Flex>
    </section>
  );
};

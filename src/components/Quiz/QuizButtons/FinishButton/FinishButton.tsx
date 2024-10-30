import { useState } from 'react';
import { Button, message, Popconfirm } from 'antd';

import { useAppSelector } from '@/hooks/reduxHooks';
import { selectAnswers } from '@/store/quiz';
import { useGetQuizQuery } from '@/store/quizApi';
import { sendEmail } from '@/utils/sendMessage';

export const FinishButton = () => {
  const [sending, setSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const { data: quiz } = useGetQuizQuery();
  const answers = useAppSelector(selectAnswers);
  const countAnswers = Object.values(answers).filter(answer => {
    const value = answer?.value;
    const isAnswered = value !== undefined && (Array.isArray(value) ? value.length : value);
    return isAnswered;
  }).length;
  const gotAllAnswers = countAnswers === quiz?.questions.length;

  const sendAnswers = async () => {
    setSending(true);
    const result = await sendEmail(JSON.stringify(answers));
    if (result && result.status === 200) {
      messageApi.success('Ответы отправлены');
    } else {
      messageApi.error('Ошибка отправки ответов');
    }
    setSending(false);
  };

  const onConfirm = () => {
    setShowAlert(false);
    sendAnswers();
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setShowAlert(newOpen);
      return;
    }

    if (gotAllAnswers) {
      onConfirm();
    } else {
      setShowAlert(newOpen);
    }
  };

  return (
    <Popconfirm
      open={showAlert}
      title='Вы ответили не на все вопросы'
      description='Завершить тест и отправить результаты?'
      onConfirm={onConfirm}
      onOpenChange={handleOpenChange}
      okText='Да'
      cancelText='Нет'
    >
      {contextHolder}
      <Button type='primary' danger={!gotAllAnswers} loading={sending}>
        Отправить
      </Button>
    </Popconfirm>
  );
};

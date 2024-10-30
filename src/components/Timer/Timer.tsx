import { useEffect } from 'react';
import Text from 'antd/es/typography/Text';

import { useTimer } from '@/hooks/useTimer';
import { BaseType } from 'antd/es/typography/Base';
import { useGetQuizQuery } from '@/store/quizApi';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { quizActions, selectTimeRemaining } from '@/store/quiz';

const WARNING_TIME = 60;
const DANGER_TIME = 30;
export const Timer = () => {
  const dispatch = useAppDispatch();
  const { data: quiz } = useGetQuizQuery();

  const savedTimeRemaining = useAppSelector(selectTimeRemaining);
  const timeRestriction = savedTimeRemaining !== null ? savedTimeRemaining : quiz?.timeRestriction || 0;
  const secondsLeft = useTimer({ timeRestriction });

  const time = new Date(0);
  time.setSeconds(secondsLeft || 0);
  const timeLeft = time.toISOString().substring(14, 19);

  let type: BaseType | undefined;
  if (secondsLeft !== null) {
    if (secondsLeft <= DANGER_TIME) {
      type = 'danger';
    } else if (secondsLeft <= WARNING_TIME) {
      type = 'warning';
    }
  }

  useEffect(() => {
    if (secondsLeft !== null) {
      dispatch(quizActions.setTimeRemaining(secondsLeft));
    }
  }, [secondsLeft, dispatch]);

  return (
    <Text type={type} style={{ whiteSpace: 'nowrap' }}>
      {timeLeft}
    </Text>
  );
};

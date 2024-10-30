import { useEffect, useState } from 'react';

interface UseTimerProps {
  timeRestriction: number | null;
  onTimeEnd?: () => void;
  onTimeChange?: (time: number) => void;
}
export const useTimer = ({ timeRestriction, onTimeEnd, onTimeChange }: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(timeRestriction);

  useEffect(() => {
    if (timeLeft === null) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === null) return null;
        if (prevTime <= 1) {
          clearInterval(intervalId);
          if (onTimeEnd) onTimeEnd();
          return 0;
        }
        const newTime = prevTime - 1;
        if (onTimeChange) onTimeChange(newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeChange, onTimeEnd]);

  useEffect(() => {
    setTimeLeft(timeRestriction);
  }, [timeRestriction]);
  return timeLeft;
};

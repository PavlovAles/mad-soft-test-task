import { RootState } from 'store';

export const selectQuizModule = (state: RootState) => state.quiz;
export const selectCurrentStep = (state: RootState) => selectQuizModule(state).step;
export const selectAnswers = (state: RootState) => selectQuizModule(state).answers;
export const selectAnswer = (state: RootState, questionId: string) => selectAnswers(state)[questionId] || undefined;
export const selectTimeRemaining = (state: RootState) => selectQuizModule(state).timeRemaining;

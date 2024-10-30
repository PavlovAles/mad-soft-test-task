import { IAnswer } from '@/types/answer';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface QuizState {
  step: number;
  answers: Partial<Record<string, IAnswer>>;
  timeRemaining: number | null;
}

const initialState: QuizState = {
  step: 0,
  answers: {},
  timeRemaining: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion(state) {
      state.step++;
    },
    prevQuestion(state) {
      state.step--;
    },
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    answer(state, action: PayloadAction<IAnswer>) {
      state.answers[action.payload.questionId] = action.payload;
    },
    setTimeRemaining(state, action: PayloadAction<number>) {
      state.timeRemaining = action.payload;
    },
    reset(state) {
      state.step = 0;
      state.answers = {};
      state.timeRemaining = null;
    },
  },
});

export const quizReducer = quizSlice.reducer;
export const quizActions = quizSlice.actions;

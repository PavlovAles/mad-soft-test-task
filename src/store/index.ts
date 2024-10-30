import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { quizReducer } from './quiz';
import quizApi from './quizApi/quizApiService';

const persistConfig = {
  key: 'quiz',
  storage,
};

const persistedQuizReducer = persistReducer(persistConfig, quizReducer);

export const store = configureStore({
  reducer: {
    quiz: persistedQuizReducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(quizApi.middleware),
  devTools: import.meta.env.MODE === 'development',
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

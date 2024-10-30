import { fetchMockQuizList } from '@/__mocks__/quizMock';
import { IQuiz } from '@/types/quiz';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getQuiz: builder.query<IQuiz, void>({
      // используем замоканный запрос
      queryFn: async () => {
        const quizzes = await fetchMockQuizList();
        return { data: quizzes }; // Возврат данных
      },
    }),
  }),
});

export const { useGetQuizQuery } = quizApi;
export default quizApi;

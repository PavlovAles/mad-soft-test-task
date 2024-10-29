import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/api': '/src/api',
      '@/hooks': '/src/hooks',
      '@/pages': '/src/pages',
      '@/assets': '/src/assets',
      '@/slices': '/src/store/slices',
      '@/store': '/src/store',
      '@/routing': '/src/routing',
      '@/components': '/src/components',
      '@/utils': '/src/utils',
      '@/types': '/src/types',
      '@/constants': '/src/constants',
      '@/__mocks__': '/src/__mocks__',
    },
  },
});

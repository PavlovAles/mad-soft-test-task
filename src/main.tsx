import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from 'emailjs-com';
import App from './App.tsx';
import 'antd/dist/reset.css';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

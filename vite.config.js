import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  dotenv.config({ path: './env' });

  return {
    optimizeDeps: { include: ['firebase/app', 'firebase/firestore'] },
    plugins: [react()],
    root: 'client',
  };
});

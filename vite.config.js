import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.env');

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => (
      {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      }
    ),
    {},
  );

  return {
    define: envWithProcessPrefix,
    optimizeDeps: { include: ['firebase/app', 'firebase/firestore'] },
    plugins: [react()],
    root: 'client',
  };
});

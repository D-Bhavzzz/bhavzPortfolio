import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Use IPv4 instead of ::1 to avoid EACCES error
    port: 3000         // Or any free port (5173 is default but can be changed)
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Dice-Game/',  // Ensure this matches the GitHub repo name
  plugins: [react()],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Vite config for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // ✅ Optional, for faster dev builds
  },
});

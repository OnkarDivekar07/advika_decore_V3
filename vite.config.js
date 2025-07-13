import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'dist/stats.html',
      template: 'treemap',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    minify: 'esbuild',
    target: 'es2015',
    rollupOptions: {
      output: {
manualChunks(id) {
  if (id.includes('node_modules')) {
    if (id.includes('react-icons')) return 'react-icons';
    if (id.includes('react-router')) return 'react-router';
    if (id.includes('lucide-react')) return 'lucide';
    return id.toString().split('node_modules/')[1].split('/')[0];
  }
}
,
      },
    },
  },
});

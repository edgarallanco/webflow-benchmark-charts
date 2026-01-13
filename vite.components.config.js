import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite config for building Code Components only
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ScaleBenchmarkCharts',
      formats: ['es', 'umd'],
      fileName: (format) => `scale-benchmark-charts.${format}.js`
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'shared')
    }
  }
});

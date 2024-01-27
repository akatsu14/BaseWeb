import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@navigates': path.resolve(__dirname, 'src/navigates'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
    }
  }
})

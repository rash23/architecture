import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    alias: {
      '@pages': '/src/pages/*',
      '@app/*': '/src/app/*',
      '@core/*': '/src/core/*',
      '@features/*': '/src/features/*',
      '@shared/*': '/src/shared/*',
      '@pages/*': '/src/pages/*',
    },
  },
});

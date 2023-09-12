import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),    
    dts({
    insertTypesEntry: true, // 컴포넌트 타입 생성
    rollupTypes:true // dts 통합
  }),
  tsconfigPaths(),
],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'), //entry를 정확하게 지정해야 에러가 발생하지않음
      name: 'common_libs',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

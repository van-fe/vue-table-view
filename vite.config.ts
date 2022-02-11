import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin({
    jsx: true,
  })],
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "vue-table-view",
    },
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
});

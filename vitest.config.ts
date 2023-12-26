/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/test.ts?(x)'],
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8'
      // include: ['src/**/*.ts(x)?'] // todo: fix coverage paths
      // exclude: ['src/app/**']
    }
  }
})

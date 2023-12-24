/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: ['/node_modules/', '/.next/'],
    coverage: {
      enabled: true,
      include: ['src/**/*.ts(x)?']
    },
    setupFiles: ['<rootDir>/.vitest/setup.ts'],
    dir: '<rootDir>/src/'
  }
})

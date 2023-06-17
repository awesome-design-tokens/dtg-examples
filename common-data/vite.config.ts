import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/data.ts',
      name: 'Data',
      fileName: 'data'
    }
  }
})

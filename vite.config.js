import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@config': '/src/config',
      '@components': '/src/components',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@lib': '/src/lib',
      '@ui': '/src/components/ui',
      '@features': '/src/components/features',
      '@layout': '/src/components/layout',
      '@sections': '/src/sections',
      '@pages': '/src/pages',
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})

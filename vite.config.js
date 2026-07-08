import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — loaded first, cached longest
          'vendor-react': ['react', 'react-dom'],
          // Animation libs — separate so sections don't bloat main chunk
          'vendor-gsap': ['gsap'],
          'vendor-motion': ['framer-motion'],
          // UI utilities
          'vendor-ui': [
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
            'lucide-react',
          ],
          // next-themes is small but keep separate from runtime
          'vendor-themes': ['next-themes'],
        },
      },
    },
  },
})

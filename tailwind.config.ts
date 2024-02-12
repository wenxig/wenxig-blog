import type { Config } from 'tailwindcss';
module.exports = {
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/**/*.md',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false
  }
} as Config

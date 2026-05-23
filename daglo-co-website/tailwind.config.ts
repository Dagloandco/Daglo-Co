import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        daglo: {
          navy: '#0a1f3d',
          gold: '#b8945a',
          ivory: '#f5f2ec',
          dark: '#1a1a1a',
          muted: '#5f5e5a',
          border: '#e8e6e0',
          light: '#e8e6e0',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        xs: '13px',
        sm: '14px',
        base: '15px',
        lg: '16px',
        xl: '18px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '56px',
      },
      spacing: {
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
      }
    },
  },
  plugins: [],
}
export default config

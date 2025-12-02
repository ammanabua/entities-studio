import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        krona: ['Krona One', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        barrio: ['Barrio', 'sans-serif']
      },
      backgroundImage: {
        'gradient-90': 'linear-gradient(90deg, var(--tw-gradient-stops))',
        collections: "url('/collections-bg.jpg')"
      }
    }
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    }
  ]
}

export default config

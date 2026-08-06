import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        mist: '#F8F9FA',
        isroBlue: '#0A4D8C',
        isroBlueDark: '#07385F',
        signal: '#F28C28',
        signalDark: '#D8721A',
        charcoal: '#222222',
        steel: '#5B6472',
        line: '#E5E7EB',
        defence: '#3F6B45'
      },
      boxShadow: {
        panel: '0 20px 60px rgba(10, 30, 60, 0.08)',
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px rgba(15, 23, 42, 0.06)',
        glow: '0 0 0 1px rgba(10, 77, 140, 0.08), 0 12px 40px rgba(10, 77, 140, 0.12)'
      },
      backgroundImage: {
        'hero-band': 'linear-gradient(135deg, #07385F 0%, #0A4D8C 55%, #0E5FA8 100%)'
      }
    }
  },
  plugins: []
};

export default config;

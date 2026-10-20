/** Sitenin Tailwind ayarları (eskiden index.html içindeki tailwind.config idi). */
module.exports = {
  content: { relative: true, files: ['../index.html'] },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#0C0F14',
        paper: '#F5F4F0',
        accent: '#6096BA',
        steel: '#6096BA',
        steeldeep: '#3D7BA6',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
};

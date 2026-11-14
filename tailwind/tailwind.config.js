/** Sitenin Tailwind ayarları (eskiden index.html içindeki tailwind.config idi). */

// Renkler tailwind/input.css içindeki CSS değişkenlerinden gelir (DESIGN_SYSTEM.md §2.4).
// Tema değişince değişkenler değişir, class değiştirmeye gerek kalmaz.
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: { relative: true, files: ['../index.html'] },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: v('bg'), surface: v('surface'), 'surface-2': v('surface-2'),
        ink: v('text'), muted: v('text-muted'),
        line: v('border'), 'line-strong': v('border-strong'),
        accent: v('accent'), 'accent-text': v('accent-text'),
        'accent-fill': v('accent-fill'), 'on-accent': v('on-accent'),
        'accent-soft': v('accent-soft'),
        secondary: v('secondary'), 'secondary-text': v('secondary-text'),
        'secondary-soft': v('secondary-soft'),
        highlight: v('highlight'), focus: v('focus'), danger: v('danger'),
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'scale(.98)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(.2,.8,.2,1)',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
};

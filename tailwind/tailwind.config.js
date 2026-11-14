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
        // Geçiş dönemi takma adları (eski class'lar kırılmasın diye; redesign bitince silinir).
        // Not: "base" takma adı bilerek YOK. Tailwind'de "text-base" yazı boyutu class'ı;
        // "base" adında bir renk olunca text-base'e renk de ekleniyordu. index.html'deki
        // iki "dark:bg-base" kullanımı "dark:bg-bg" olarak değiştirildi.
        paper: v('bg'), steel: v('accent'), steeldeep: v('accent-fill'),
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
};

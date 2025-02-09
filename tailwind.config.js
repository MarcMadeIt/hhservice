import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#169445",
        "primary-content": "#F8FAFC",
        "secondary": "#166534",
        "accent": "#052E16",
        "neutral": "#020617",
        "neutral-content": "#F8FAFC",
        "info": "#17A2B8",
        "success": "#177E47",
        "warning": "#FCD34D",
        "error": "#F43F5E",
        "base-100": "#F8FAFC",
        "base-200": "#F2F3F5",
        "base-300": "#ECECEE",
      },
    }],
  },
  variants: {
    scrollbar: ["rounded"],
  },
};

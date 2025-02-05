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
        "info": "#4ADE80",
        "success": "#13A917",
        "warning": "#FCD34D",
        "error": "#F43F5E",
        "base-100": "#F8FAFC",
        "base-200": "#ECECEE",
        "base-300": "#E5E5E5",
      },
    }],
  },
  variants: {
    scrollbar: ["rounded"],
  },
};

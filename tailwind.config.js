/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        serif: ['"Cormorant Garamond"', "serif"],
      },
      colors: {
        forest: {
          950: "#07180f",
          900: "#0b2b1b",
          850: "#132e22",
          800: "#1e3d2f",
          700: "#2d5341",
        },
        moss: {
          muted: "#4a6b5a",
          subtle: "#628574",
        },
        emerald: {
          vibrant: "#10b981",
          dark: "#059669",
          light: "#ecfdf5",
        },
        glass: {
          card: "rgba(255, 255, 255, 0.78)",
          border: "rgba(255, 255, 255, 0.85)",
        },
      },
    },
  },
  plugins: [],
};

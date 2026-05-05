/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#08112A",
        navy2: "#0E1B3A",
        blue: "#1E56F5",
        "blue-l": "#3B73FF",
        cyan: "#00C9C8",
        "off-white": "#F5F7FF",
        muted: "#8A95B0",
      },
      fontFamily: {
        syne: ["var(--font-poppins)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        "fade-down": "fadeDown 0.8s ease both",
        float: "floatY 4s ease-in-out infinite",
        blink: "blink 1.6s infinite",
        orb: "orbPulse 7s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

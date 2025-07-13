// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626", // red-600
        primaryLight: "#ef4444", // red-500
        grayDark: "#1f2937", // gray-800
        grayMid: "#374151",  // gray-700
        grayLight: "#6b7280", // gray-500
        brandBlack: "#111827", // gray-900
      },
      fontFamily: {
        greatvibes: ["'Great Vibes'", "cursive"],
        gotham: ["Gotham", "Arial", "sans-serif"],
        sans: ["Inter", "Arial", "sans-serif"], // override default if needed
      },
      boxShadow: {
        navbar: "0 2px 4px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

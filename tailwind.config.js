// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      colors: {
        primary: 'rgb(180, 19, 208)',
        secondary: '#44027b',
        tertiary: '#5a0f9e',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        emoji: [
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "NotoColorEmoji",
          "Segoe UI Symbol",
          "Android Emoji",
          "EmojiSymbols",
        ],
      },
    },
  },
  plugins: [],
};

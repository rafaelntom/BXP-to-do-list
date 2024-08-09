/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "pj-raisin-black": "hsla(236, 18%, 19%, 1)",
        "pj-silver": "hsla(34, 15%, 73%, 1)",
        "pj-cinereous": "hsla(28, 13%, 60%, 1)",
        "pj-redwood": "hsla(14, 30%, 43%, 1)",
        "pj-steel-blue": "hsla(209, 58%, 49%, 1)",
      },
    },
  },
  plugins: [],
};

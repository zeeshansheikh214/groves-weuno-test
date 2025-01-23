/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "linear-gradient(0deg, #6552CF 0%, #4230A5 100%)",
      },
      colors: {
        themePrimary: "#40DDF7",
        themeSecondary: "#0B0E5D",
        themeSecondary: "#0B0E5D",
        themeSurface: "#DAFF17",
        themered: "#FE6C5F",
        themeAcqua: "#187B8E",
        themelayput: "#6350CD",
        themeblack: "#252525",
        themetextblack: "#898989",
      },
    },
  },
  plugins: [require("daisyui")],
};

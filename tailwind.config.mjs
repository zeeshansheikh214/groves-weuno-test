/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: "#DCBB75",
        themeSecondary: "#AD8749",
        themelight: "#c3c1c1",
      },
    },
  },
  plugins: [require("daisyui")],
};

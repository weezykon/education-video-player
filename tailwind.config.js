/** @type {import('tailwindcss').Config} */

const fontSize = {
  h1: ["60px", { lineHeight: "80px" }],
  h2: ["54px", { lineHeight: "72px" }],
  h3: ["48px", { lineHeight: "64px" }],
  h4: ["42px", { lineHeight: "68px" }],
  h5: ["36px", { lineHeight: "48px" }],
  h6: ["32px", { lineHeight: "44px" }],
  h7: ["28px", { lineHeight: "40px" }],
  h8: ["24px", { lineHeight: "36px" }],
  h9: ["20px", { lineHeight: "32px" }],
  h10: ["18px", { lineHeight: "28px" }],
  h11: ["16px", { lineHeight: "24px" }],
  base: ["16px", { lineHeight: "24px" }],
  b1: ["24px", { lineHeight: "36px" }],
  b2: ["20px", { lineHeight: "32px" }],
  b3: ["18px", { lineHeight: "28px" }],
  b4: ["16px", { lineHeight: "24px" }],
  b5: ["14px", { lineHeight: "20px" }],
  b6: ["12px", { lineHeight: "16px" }],
  b7: ["10px", { lineHeight: "12px" }],
  b8: ["9px", { lineHeight: "10px" }],
  b9: ["8px", { lineHeight: "9px" }],
};

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontSize,
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '700px',
        lg: '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    }
  },
  plugins: [],
}


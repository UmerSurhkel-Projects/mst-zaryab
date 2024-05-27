import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          xs: '100%',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          xxl: '1420px',
          xxxl: '1640px'
        },
      },
      plugins: [
        require('flowbite/plugin')
      ],
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 3s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "red": "#C8102E",
        "black": "rgba(2,0,36,1)",
        "book": "rgb(247 194 156)",
        "id": "rgb(0 0 0)",
        "greenish":"rgb(3 161 86)",
        "darkColor":"rgb(77 130 177)"
      },
      backgroundColor: {
        "bookMainBG": "#0d6533",
        "comment": "#852121",
        "dark": "#000",
        "lightGreen":"rgb(3 161 86)",
        "matGray":"#DDDBDD",
        "darkBg":"rgb(58 104 124)",
        "darkHoverBg":"rgb(77 130 177)"
      },
      padding: {
        "50": "50px",
        "30": "30px",
        "20": "20px",
        "12": "12px",
        "100": "100px",
        "180": "180px",
      },
      margin: {
        "18": "18px",
        "30": "30px",
        "40": "40px",
        "45": "45px",
        "60": "60px",
        "80": "80px",
      },
      borderRadius: {
        "5": "5px",
        "10" : "10px",
        "half": "50%",
      },
      width: {
        "19" : "19%",
        "60": "60px",
        "30": "30px",
        "140": "140px",
        
      },
      height: {
        "30": "30px",
        "48": "48px",
        "60": "60px",
        "140": "140px",
        "150": "150px",
        "300": "300px",
        "420": "420px",
        "520": "520px",
        "620": "620px",
        "fullPage": "100vh",
      },
      fontSize: {
        "40": "40px",
        "26": "26px",
        "20": "20px",
        "14": "14px",
      },
      lineHeight: {
        
      },
      minWidth: {
        
      },
      maxWidth: {
        "70": "70%"
      },
    },
  },
  
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      xxsm:"320px",
      xsm:"400px",
      sm:"401px",
      md:"700px",
      lg:"1024px",
     
      

    }
  },
  plugins: [],
}


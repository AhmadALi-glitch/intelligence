import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/*.{js,ts,tsx,jsx,mds}"
  ],

  theme: {
    extend: {
      backgroundImage: {
        'modern-background': "linear-gradient(90deg, #0473D9 0%, #003F78 60%)",
        'classic-background': "linear-gradient(90deg, #ffedbd 0%, #ffedbd 60%)"
      },
      backgroundColor: {
        'modern-foreground': "rgba(51, 51, 51, 0.5)",
        'modern-solid': "rgb(4,115,217)",
        // will change it later when finishing the classic theme
        'classic-foreground': "rgba(51, 51, 51, 0.5)",

        'classic-dilect': "#333",
        'modern-dilect': "#333"

      },
      colors: {

        'modern': { 
          main : '#0473D9',
          heading: '#EEEEEE',
          paragraph: '#FFFFFF',
          black: "#000000",
          dilect_1: '#EEE',
          dilect_2: "#EEE"
        },
      
        'classic': {
          main: '#e7dfaf',
          heading: '#333333',
          paragraph: '#333333',
          black: '#333333',
          dilect_1: '#6A994E',
          dilect_2: "#BC4B51",
        },
      
      },

      fontFamily: {
        'modern-heading': "Urbanist",
        'modern-paragraph': "Manrope",
        'classic-heading': "Grenze",
        'classic-paragraph': "Halant"
      },

      fill: {

        'modern': { 
          main : '#0473D9',
          heading: '#EEEEEE',
          paragraph: '#FFFFFF',
          black: "#000000",
          dilect_1: '#EEE',
          dilect_2: "#EEE"
        },
      
        'classic': {
          main: '#e7dfaf',
          heading: '#333333',
          paragraph: '#333333',
          black: '#333333',
          dilect_1: '#6A994E',
          dilect_2: "#BC4B51",
        },

      }

    }
  },

  plugins: [],

};

export default config;

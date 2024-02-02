import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'modern-background': "linear-gradient(90deg, #0473D9 0%, #003F78 60%)",
        'classic-background': "#F2E8CF"
      },
      backgroundColor: {
        'modern-foreground': "rgba(51, 51, 51, 0.5)",
        'modern-solid': "rgb(4,115,217)",
        // will change it later when finishing the classic theme
        'classic-foreground': "rgba(51, 51, 51, 0.5)"
      },
      colors: {

        'modern': { 
          main : '#0473D9',
          heading: '#EEEEEE',
          paragraph: '#FFFFFF',
          black: "#000000"
        },
      
        'classic': {
          main: '#F2E8CF',
          heading: '#333333',
          paragraph: '#333333',
          black: '#333333'
        },
      
        green: '#6A994E',
        wine: "#BC4B51",
      },

      fontFamily: {
        'modern-heading': "Urbanist",
        'modern-paragraph': "Manrope",
        'classic-heading': "Grenze",
        'classic-paragraph': "Halant"
      }

    }
  },

  plugins: [],

};

export default config;

import { createContext } from "react";
import { Grenze, Halant, Manrope, Urbanist } from "next/font/google";

export const urbanist = Urbanist({weight: ["100", "200", "300", "400", "500", "700", "800", "900"], subsets: ["latin"]});
export const grenze = Grenze({weight: ["100", "200", "300", "400", "500", "700", "800", "900"], subsets: ["latin"]});
export const halant = Halant({weight: ["300", "400", "500", "700"], subsets: ["latin"]});
export const manrope = Manrope({weight: ["200", "300", "400", "500", "700", "800"], subsets: ["latin"]});

export const ThemeContext = createContext({
    theme: 'modern'
})
export const ThemeDispatcherContext = createContext(null);
 
let themes = {
    modern: {
        font: {
            heading: urbanist.className,
            paragraph: manrope.className
        },
        background: {
            gradient: 'bg-modern-background',
            foreground: 'bg-modern-foreground',
            solid: 'bg-modern-solid'
        },
        color: {
            main: 'text-modern-main',
            heading: 'text-modern-heading',
            paragraph: 'text-modern-paragraph',
            black: 'text-modern-black',
            dilect_1: 'text-modern-dilect-1',
            dilect_2: 'text-modern-dilect-2'
        }
    },
    classic: {
        font: {
            heading: grenze.className,
            paragraph: halant.className
        },
        background: {
            gradient: 'bg-classic-background',
            foreground: 'bg-classic-foreground',
            solid: 'bg-classic-foreground'
        },
        color: {
            main: 'text-classic-main',
            heading: 'text-classic-heading',
            paragraph: 'text-classic-paragraph',
            black: 'text-classic-black',
            dilect_1: 'text-classic-dilect-1',
            dilect_2: 'text-classic-dilect-2'
        }
    }

}

export const themeReducerHandler =  [

    function (state, action) {

        switch(action.type) {

            case "switch_to_modern" :{
                return themes.modern 
            }
            case "switch_to_classic" :{
                return themes.classic 
            }
            default :{
                return themes.modern
            }

        }

    }
    
    ,
    
    themes.modern 

];
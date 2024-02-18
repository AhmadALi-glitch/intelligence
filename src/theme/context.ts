import { createContext } from "react";
import { Grenze, Halant, Manrope, Urbanist } from "next/font/google";

export const urbanist = Urbanist({weight: ["100", "200", "300", "400", "500", "700", "800", "900"], subsets: ["latin"]});
export const grenze = Grenze({weight: ["100", "200", "300", "400", "500", "700", "800", "900"], subsets: ["latin"]});
export const halant = Halant({weight: ["300", "400", "500", "700"], subsets: ["latin"]});
export const manrope = Manrope({weight: ["200", "300", "400", "500", "700", "800"], subsets: ["latin"]});


let themes = {
    modern: {
        name: 'modern',
        font: {
            heading: urbanist.className,
            paragraph: manrope.className
        },
        background: {
            gradient: 'bg-modern-background',
            foreground: 'bg-modern-foreground',
            solid: 'bg-modern-solid',
            main: 'bg-modern-main',
            heading: 'bg-modern-heading',
            paragraph: 'bg-modern-paragraph',
            dilect: 'bg-modern-dilect'
        },
        color: {
            main: 'text-modern-main',
            heading: 'text-modern-heading',
            paragraph: 'text-modern-paragraph',
            black: 'text-modern-black',
            dilect_1: 'text-modern-dilect_1',
            dilect_2: 'text-modern-dilect_2'
        },
        border: {
            main: 'border-modern-main',
            heading: 'border-modern-heading',
            paragraph: 'border-modern-paragraph',
            black: 'border-modern-black',
            dilect_1: 'border-modern-dilect_1',
            dilect_2: 'border-modern-dilect_2',
        },
        outline: {
            main: 'outline-modern-main',
            heading: 'outline-modern-heading',
            paragraph: 'outline-modern-paragraph',
            black: 'outline-modern-black', 
            dilect_1: 'outline-modern-dilect_1',
            dilect_2: 'outline-modern-dilect_2'
        },
        fill: { 
            main: 'fill-modern-main',
            heading: 'fill-modern-heading',
            paragraph: 'fill-modern-paragraph',
            black: 'fill-modern-black', 
            dilect_1: 'fill-modern-dilect_1',
            dilect_2: 'fill-modern-dilect_2'
        }
    },
    classic: {
        name: 'classic',
        font: {
            heading: grenze.className,
            paragraph: halant.className
        },
        background: {
            gradient: 'bg-classic-background',
            foreground: 'bg-classic-foreground',
            solid: 'bg-classic-foreground',
            main: 'bg-classic-main',
            heading: 'bg-classic-heading',
            paragraph: 'bg-classic-paragraph',
            dilect: 'bg-classic-dilect'
        },
        color: {
            main: 'text-classic-main',
            heading: 'text-classic-heading',
            paragraph: 'text-classic-paragraph',
            black: 'text-classic-black',
            dilect_1: 'text-classic-dilect_1',
            dilect_2: 'text-classic-dilect_2'
        },
        border: {
            main: 'border-classic-main',
            heading: 'border-classic-heading',
            paragraph: 'border-classic-paragraph',
            black: 'border-classic-black',
            dilect_1: 'border-classic-dilect_1',
            dilect_2: 'border-classic-dilect_2'
        },
       outline: {
            main: 'outline-classic-main',
            heading: 'outline-classic-heading',
            paragraph: 'outline-classic-paragraph',
            black: 'outline-classic-black', 
            dilect_1: 'outline-classic-dilect_1',
            dilect_2: 'outline-classic-dilect_2'
        },
        fill: { 
            main: 'fill-classic-main',
            heading: 'fill-classic-heading',
            paragraph: 'fill-classic-paragraph',
            black: 'fill-classic-black', 
            dilect_1: 'fill-classic-dilect_1',
            dilect_2: 'fill-classic-dilect_2'
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

]


export const ThemeContext = createContext( themes.modern )
export const ThemeDispatcherContext = createContext(null)

import { ThemeContext } from "@/theme/context";
import { useContext } from "react";
import "./input.css";

export default function Input({placeholder, label, type}: {placeholder: string, label: string, type: string}) {

    let theme = useContext(ThemeContext);

    return (
        <>
            <input 
                type={type}
                className={ `${theme.name} border-0 w-80 outline-2 outline-double ${theme.outline.paragraph}` }
                placeholder={placeholder}
                style={{backgroundColor: 'transparent', borderRadius: '5px' }}
            />
        </>
    )

}

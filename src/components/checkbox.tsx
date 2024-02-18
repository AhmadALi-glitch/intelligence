'use client';

import { ThemeContext } from "@/theme/context";
import { useContext, useState } from "react"

export default function CheckBox({label, value}: {label: string, value: string | number | object}) {

    let [selected, setSelected] = useState({});
    let theme = useContext(ThemeContext);

    return (
        <>
            <div>
                <button
                    onClick={() => setSelected(!selected)}
                    className={`p-1 rounded-lg text-xs font-bold uppercase ${theme.background.paragraph} ${theme.color.main} ${selected ? `outline-4 outline-double ${theme.outline.dilect_2}` : 'ouline-none'}`}
                >
                    {label}
                </button>
            </div>
        </>
    )

}

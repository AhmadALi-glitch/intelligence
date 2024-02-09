import { useState } from "react"

export default function CheckBox({label, value}: {label: string, value: string | number | object}) {

    let [selected, setSelected] = useState({});

    return (
        <>
            <div>
                <button
                    onClick={() => setSelected(!selected)}
                    className={`p-1 rounded-lg font-bold bg-modern-paragraph text-modern-black ${selected ? 'outline-4 outline-double outline-modern-main' : 'ouline-none'}`}
                >
                    {label}
                </button>
            </div>
        </>
    )

}

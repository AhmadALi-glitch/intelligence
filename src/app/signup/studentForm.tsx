'use client';

import { PlusCircle } from "@phosphor-icons/react";
import CheckBox from "../../components/checkbox";
import { useContext } from "react";
import { ThemeContext } from "@/theme/context";
import Input from "@/components/input";

export default function StudentForm() {

    let theme = useContext(ThemeContext);

    return (
        <>
            <div className={ `flex flex-col justify-center items-center gap-4 w-full h-full ${theme.font.paragraph}` }>
                
                <Input placeholder="Full Name" type="text"/>
     
                <div className="interestes flex items-end gap-3 w-80">
                    <div className={ `text-xl font-bold ${theme.color.paragraph}` }>i study</div>
                    <CheckBox label="math" value={'MATH'}/>
                    <CheckBox label="art" value={'MATH'}/>
                    <CheckBox label="history" value={'MATH'}/>
                </div>
 
                <div
                    className={ `w-80 h-52 border-2 border-dashed ${theme.border.dilect_2} p-1` }
                    style={{backgroundColor: 'transparent', borderRadius: '5px'}}
                >
                    <div className="class-badge"></div>
                    <button className={ `add-class-badge flex items-center gap-1 text-center rounded-lg w-16 ${theme.color.paragraph}` }>
                        <PlusCircle size={'20px'} className={ `${theme.color.paragraph} rounded-full` }/>
                        class
                    </button>
                </div>

            </div>

        </>
    );
}

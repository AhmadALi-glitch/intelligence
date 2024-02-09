
import { PlusCircle } from "@phosphor-icons/react";
import CheckBox from "./checkbox";

export default function StudentForm() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
                <input 
                    type="text"
                    id="name"
                    className="w-80"
                    placeholder="Full Name"
                    style={{backgroundColor: 'transparent', borderRadius: '5px' ,outline: '2px solid #eee'}}
                />

                <div className="interestes flex items-end gap-3 w-80">
                    <div className="text-xl font-bold text-modern-paragraph">i study</div>
                    <CheckBox label="math" value={'MATH'}/>
                    <CheckBox label="art" value={'MATH'}/>
                    <CheckBox label="history" value={'MATH'}/>
                </div>
 
                <div
                    className="w-80 h-52 border-dashed border-2 p-1"
                    style={{backgroundColor: 'transparent', borderRadius: '5px'}}
                >
                    <div className="class-badge"></div>
                    <button className="add-class-badge flex items-center gap-1 text-center rounded-lg w-16 bg-modern-paragraph">
                        <PlusCircle size={'20px'} className="bg-modern-paragraph rounded-full"/>
                        class
                    </button>
                </div>
            </div>
        </>
    );
}


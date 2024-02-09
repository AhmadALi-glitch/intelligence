
import "./form.css";
import CheckBox from "./checkbox";
import { useState } from "react";

export default function TeacherForm() {

    let formSteps = [

        <>

            <input 
                type="text"
                className="w-80"
                placeholder="Full Name"
                style={{backgroundColor: 'transparent', borderRadius: '5px' ,outline: '2px solid #eee'}}
            />

            <div className="interestes flex items-end gap-3 w-80">
                <div className="text-xl font-bold text-modern-paragraph">i teach</div>
                <CheckBox label="math" value={'MATH'}/>
                <CheckBox label="art" value={'MATH'}/>
                <CheckBox label="history" value={'MATH'}/>
            </div>

        </>,

        <>

             <input 
                type="text"
                className="w-80"
                placeholder="Email"
                style={{backgroundColor: 'transparent', borderRadius: '5px' ,outline: '2px solid #eee'}}
            />
            
            <input 
                type="password"
                className="w-80"
                placeholder="Password"
                style={{backgroundColor: 'transparent', borderRadius: '5px' ,outline: '2px solid #eee'}}
            />

        </>,

        <>

        </>

    ];

    let [currentStep, setStep] = useState(0);

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full">

                <div className="form basis-[90%] flex flex-col justify-center items-center gap-4 ">
                    {formSteps[currentStep]}
                </div>

                <div className="basis-[10%] w-full flex justify-between text-lg font-bold text-modern-paragraph">

                    {(currentStep > 0) ? <button onClick={() => setStep(currentStep - 1)}>Back</button> : <div></div>}

                    {
                        currentStep < 2 ?
                            <button onClick={() => setStep(currentStep + 1)}>Next</button>
                        :  
                            <button onClick={() => console.log('finish')}>Finish</button>
                    }    

                </div>

            </div>

        </>

    );

}

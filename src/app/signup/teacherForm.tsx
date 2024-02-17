
import "./form.css";
import CheckBox from "./checkbox";
import { ChangeEvent, useState } from "react";
import UploadPhoto from "./uploadPhoto";
import LoadingSpinner from "@/components/loadingSpinner";

// always take small setps and check that every thing is working
// debugging is the biggest time waster
// the best way to avoid wasting time avoid debugging

export default function TeacherForm() {

    let [currentStep, setStep] = useState(0);
    let [formSaving, setSaving] = useState(false);
    
    let form = new FormData();
    let [photoUrl, updatePhotoUrl] = useState("");
    let testChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }


    // mock the form saving api call
    let saveTeacherForm = () => {
        setSaving(true);
        setTimeout( () => {
        //     formStateDispatcher({type: 'FINISHED'});
        setSaving(false);
        }, 2000)
    }


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
            {/* upload photo component recieve emit from this component then update the photoData State*/}
            <UploadPhoto updatePhotoData={testChangeEvent} />
        </>

    ];

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full">

                {
                    !formSaving ? <div className="form basis-[90%] flex flex-col justify-center items-center gap-4 ">
                        {formSteps[currentStep]}
                    </div> : <div className="basis-[90%] flex flex-col justify-center items-center">
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                }


                <div className={`${formSaving ? 'hidden' : 'visible'} basis-[10%] w-full flex justify-between text-lg font-bold text-modern-paragraph`}>

                    {(currentStep > 0) ? <button onClick={() => setStep(currentStep - 1)}>Back</button> : <div></div>}

                    {
                        currentStep < 2 ?
                            <button onClick={() => setStep(currentStep + 1)}>Next</button>
                        : !formSaving ?
                            <button onClick={saveTeacherForm}>Finish</button>
                        : <></>
                    }    

                </div>

            </div>

        </>

    );

}

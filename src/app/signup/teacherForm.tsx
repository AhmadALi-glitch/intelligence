'use client';

import "./form.css";
import CheckBox from "../../components/checkbox";
import { ChangeEvent, useContext, useState } from "react";
import UploadPhoto from "../../components/uploadPhoto";
import LoadingSpinner from "@/components/loadingSpinner";
import { ThemeContext } from "@/theme/context";
import Input from "@/components/input";

// always take small setps and check that every thing is working
// debugging is the biggest time waster
// the best way to avoid wasting time avoid debugging

export default function TeacherForm() {

    let theme = useContext(ThemeContext);

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

            <Input
                type="text"
                placeholder="Full Name"
            />

            <div className="interestes flex items-end gap-3 w-80">
                <div className={ `text-xl font-bold ${theme.color.paragraph}` }>i teach</div>
                <CheckBox label="math" value={'MATH'}/>
                <CheckBox label="art" value={'MATH'}/>
                <CheckBox label="history" value={'MATH'}/>
            </div>

        </>,

        <>

             <Input 
                type="text"
                placeholder="Email"
            />
            
            <Input 
                type="password"
                placeholder="Password"
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


                <div className={`${formSaving ? 'hidden' : 'visible'} ${theme.color.dilect_1} basis-[10%] w-full flex justify-between text-lg font-bold`}>

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

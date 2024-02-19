'use client';

import "./signup.css";
import { useSpring, easings, animated } from "@react-spring/web";
import { useContext, useEffect } from "react";
import TeacherForm from "./teacherForm";
import { ThemeContext, ThemeDispatcherContext } from "@/theme/context";
import { GlobalContext, GlobalContextDispatcher } from "./context";

export default function StudentSide() {

    let [theme, themeChangingDispatcher] = [useContext(ThemeContext), useContext(ThemeDispatcherContext)]; 
    let [formState, formStateDispatcher] = [useContext(GlobalContext), useContext(GlobalContextDispatcher)];

    useEffect(() => {

        accountButtonApi.start({ to: formState.studentAccountButton, config: {duration: 600, easing: easings.easeInQuad} })
        accountTypePerfixApi.start({ to: formState.studentPrefixWord, config: {duration: 200, easing: easings.easeInCubic} })
        accountTypeParagraphApi.start({ to: formState.studentParagraph, config: {duration: 1000, easing: easings.easeOutQuad}, delay: 700 })
        teacherFormApi.start({ to: formState.teacherForm, config: {duration: 600, easing: easings.easeInQuad} })

    }, [formState]);

    let [teacherFormSprings, teacherFormApi] = useSpring(() => ({ from: formState.teacherForm }))
    let [accountButtonSprings, accountButtonApi] = useSpring(() => ({ from: formState.studentAccountButton }))
    let [accountTypePerfixSprings, accountTypePerfixApi] = useSpring(() => ({ from: formState.studentPrefixWord }))
    let [accountTypeParagraphSprings, accountTypeParagraphApi] = useSpring(() => ({ from: formState.studentParagraph }))
    
    return (

        <div className={` flex flex-col items-center h-full w-[100%] ${theme.font.paragraph}` }>

            {/* // the button */}

            <animated.div style={{...accountButtonSprings}} >

                <div className={ `flex flex-col gap-1 justify-center items-start h-full w-full font-bold ${theme.color.paragraph}`  }>

                        <div className="flex gap-4 text-5xl">

                            <animated.div style={{...accountTypePerfixSprings}}>

                                <span className="text-nowrap">as a</span>

                            </animated.div>

                            <button onClick={() => formStateDispatcher({ type: 'student_selected' })} className="student">student</button>

                        </div>

                        <animated.div style={{...accountTypeParagraphSprings}}>

                            <div className="relative overflow-hidden h-full w-full text-2xl font-extralight text-start">

                                <p className="absolute top-0 left-0">

                                    you will be able to enroll into courses join for live classes, collaborate and more

                                </p>

                            </div>

                        </animated.div>

                </div>

            </animated.div>

            {/* // the teacher form */}

            <animated.div style={{...teacherFormSprings}}>

               <TeacherForm /> 

            </animated.div>

        </div>

    )

}
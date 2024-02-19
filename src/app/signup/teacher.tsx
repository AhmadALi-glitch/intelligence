'use client';

import "./signup.css";
import { useSpring, easings, animated } from "@react-spring/web";
import { useContext, useEffect } from "react";
import StuduentForm from "./studentForm";
import { ThemeContext, ThemeDispatcherContext } from "@/theme/context";
import { GlobalContext, GlobalContextDispatcher } from "./context";

export default function TeacherSide() {

    let [theme, themeChangingDispatcher] = [ useContext(ThemeContext), useContext(ThemeDispatcherContext) ]
    let [formState, formStateDispatcher] = [ useContext(GlobalContext), useContext(GlobalContextDispatcher) ]

    useEffect(() => {

        accountButtonApi.start({ to: formState.teacherAccountButton, config: { duration: 1000, easing: easings.easeInQuad} })
        accountTypeParagraphApi.start({ to: formState.teacherParagraph, config: {duration: 1000, easing: easings.easeInCubic}, delay: 700 })
        accountTypePerfixApi.start({ to: formState.teacherPrefixWord, config: {duration: 200, easing: easings.easeOutQuad}})
        studentFormApi.start({ to: formState.studentForm, config: {duration: 1000, easing: easings.easeInQuad} });

    }, [formState]);

    let [studentFormSprings, studentFormApi] = useSpring(() => ({from:formState.studentForm}))
    let [accountButtonSprings, accountButtonApi] = useSpring(() => ({from: formState.teacherAccountButton }))
    let [accountTypePerfixSprings, accountTypePerfixApi] = useSpring(() => ({from: formState.teacherPrefixWord }))
    let [accountTypeParagraphSprings, accountTypeParagraphApi] = useSpring(() => ({from: formState.teacherParagraph }))

    return (

        <div className={ `flex flex-col items-center h-full w-[49%] ${theme.font.paragraph}` }>

            {/* // the button */}
            <animated.div style={{...accountButtonSprings}} >

                <div className={ `flex flex-col justify-center gap-1 items-start h-full w-full  font-bold ${theme.color.paragraph}` }>

                        <div className="flex gap-4 text-5xl">
                            <animated.div style={{...accountTypePerfixSprings}}>
                                <span className="text-nowrap">as a</span>
                            </animated.div>
                            <button onClick={() => formStateDispatcher({ type: 'teacher_selected' })} className="teacher">teacher</button>
                        </div>

                        <animated.div style={{...accountTypeParagraphSprings}}>
                            <div className="relative overflow-hidden h-full w-full text-2xl font-extralight text-start">
                                <p className="absolute top-0 left-0">
                                    You can create classes, set automatic grading system, and exams for students
                                </p>
                            </div>
                        </animated.div>

                </div>

            </animated.div>

            {/* // the student form */}
            <animated.div style={{...studentFormSprings}}>
               <StuduentForm /> 
            </animated.div>

        </div>

    )

}

'use client';

import { Student, Chalkboard } from "@phosphor-icons/react/dist/ssr";
import "./signup.css";
import { useSpring, easings, animated } from "@react-spring/web";
import { useContext, useEffect, useReducer, useState } from "react";

import TeacherSide from "./teacher";
import StudentSide from "./student";
import { ThemeContext } from "@/theme/context";
import { GlobalContext, GlobalContextDispatcher, SignUpReducer } from "./context";

export default function SingUp() {

    let [formState, formStateDispatcher] = useReducer(SignUpReducer[0], SignUpReducer[1]);
    let theme = useContext(ThemeContext);

    let [separatorStyle, separatorApi] = useSpring(() => ({
        from: formState.separator
    }));
    let [teacherSideSprings, teacherSideApi] = useSpring(() => ({
        from: formState.teacherSide
    }));
    let [studentSideSprings, studentSideApi] = useSpring(() => ({
        from: formState.studentSide
    }));

    useEffect(() => {
        teacherSideApi.start({to: formState.teacherSide, duration: 1000, easing: easings.easeInCubic})
        studentSideApi.start({to: formState.studentSide, duration: 1000, easing: easings.easeInCubic})
        separatorApi.start({to: formState.separator, duration: 1000, easing: easings.easeInCubic})
    }, [formState])

    return (
        <>

            <GlobalContext.Provider value={formState}>
                <GlobalContextDispatcher.Provider value={formStateDispatcher}>

                    <div className="flex justify-between items-center h-[100%]">
                        
                        <animated.div style={{...teacherSideSprings}}>
                            <TeacherSide />
                        </animated.div>
                        
                        <animated.div style={{...separatorStyle}}>
                            <div className={ `separator flex justify-center text-xl ${theme.color.paragraph} ${theme.name} font-thin` }>
                                <span onClick={() => formStateDispatcher( { type: formState.accountType == 'student' ? 'teacher_selected' : formState.accountType == 'teacher' ? 'student_selected' : ''  } )}>
                                    {formState.accountType == 'student' ? <Student weight="duotone"/> : formState.accountType == 'teacher' ? <Chalkboard weight="duotone"/> : 'Or'}
                                </span> 
                            </div>
                        </animated.div>

                        <animated.div style={{...studentSideSprings}}>
                            <StudentSide />
                        </animated.div>

                    </div>

                </GlobalContextDispatcher.Provider>
            </GlobalContext.Provider>

        </>
    )

}

'use client';

import { Student, Chalkboard } from "@phosphor-icons/react/dist/ssr";
import "./signup.css";
import { useSpring, easings, animated } from "@react-spring/web";
import { useContext, useReducer, useState } from "react";

import TeacherSide from "./teacher";
import StudentSide from "./student";
import { ThemeContext } from "@/theme/context";
import { GlobalContext, GlobalContextDispatcher, SignUpReducer } from "./context";

export default function SingUp() {

    let [formState, formStateDispatcher] = useReducer(SignUpReducer[0], SignUpReducer[1]);
    let theme = useContext(ThemeContext);

    let [separatorStyle, separatorApi] = useSpring(() => ({
        from: {
            x: 0
        },
        config: {
            easing: easings.easeInCubic,
            duration: 1000
        }
    }));

    let [ pageSprings, pageSpringsApi ] = useSpring(() => ({
        from: {
            height: '100%'
        }
    }));

    return (
        <>

            <GlobalContext.Provider value={formState}>
                <GlobalContextDispatcher.Provider value={formStateDispatcher}>

                    <animated.div className="flex justify-between items-center gap-5 h-[100%] pt-2">
                        <TeacherSide />
                        <animated.div style={{...separatorStyle}}>
                            <div className={ `separator text-xl ${theme.color.paragraph} ${theme.name} font-thin` }>
                                <span onClick={() => formStateDispatcher( { type: formState.accountType == 'student' ? 'teacher_selected' : formState.accountType == 'teacher' ? 'student_selected' : ''  } )}>
                                    {formState.accountType == 'student' ? <Student weight="duotone"/> : formState.accountType == 'teacher' ? <Chalkboard weight="duotone"/> : 'Or'}
                                </span> 
                            </div>
                        </animated.div>
                        <StudentSide />
                    </animated.div>

                </GlobalContextDispatcher.Provider>
            </GlobalContext.Provider>

        </>
    )

}

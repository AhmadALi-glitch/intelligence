'use client';

import { Student, Chalkboard } from "@phosphor-icons/react/dist/ssr";
import "./signup.css";
import { useSpring, easings, animated } from "@react-spring/web";
import { useState } from "react";

import TeacherSide from "./teacher";
import StudentSide from "./student";

export default function SingUp() {

    let [accountType, setAccountType] = useState('');

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
            <animated.div className="flex justify-between items-center gap-5 h-[100%] pt-2">
                <TeacherSide setAccountType={setAccountType} accountType={accountType}/>
                <animated.div style={{...separatorStyle}}>
                    <div className="separator text-xl text-modern-paragraph  font-thin">
                        <span onClick={() => setAccountType(accountType == 'student' ? 'teacher' : accountType == 'teacher' ? 'student' : '')}>
                            {accountType == 'student' ? <Student weight="duotone"/> : accountType == 'teacher' ? <Chalkboard weight="duotone"/> : 'Or'}
                        </span> 
                    </div>
                </animated.div>
                <StudentSide setAccountType={setAccountType} accountType={accountType}/>
            </animated.div>
        </>
    )
}

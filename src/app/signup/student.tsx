'use client';

import "./signup.css";
import { useSpring, easings, animated } from "@react-spring/web";
import { useEffect } from "react";
import TeacherForm from "./teacherForm";

export default function StudentSide( { setAccountType, accountType }: { setAccountType: (accountType: string) => void, accountType: string } ) {

    useEffect(() => {

        if(accountType == 'teacher') {
            // 1- move the student up 
            accountButtonApi.start({
                to: {
                    overflow: 'hidden',
                    flexBasis: '0%'
                },
                config: {duration: 600, easing: easings.easeInQuad}
            })
            // slide up the teacher form
            teacherFormApi.start({
                to: {
                    flexBasis: '100%',
                },
                config: {duration: 600, easing: easings.easeInQuad}
            })

            accountTypeParagraphApi.start({
                to: {
                    height: '0px',
                    overflow: 'hidden',
                },
                config: {duration: 1000, easing: easings.easeOutQuad},
                delay: 700
            })

        } else if(accountType == 'student') {

            teacherFormApi.start({
                to: {
                    flexBasis: '0%'
                },
                config: {duration: 600, easing: easings.easeInQuad}
            })

            // set the button width to 100%
            accountButtonApi.start({
                to: {
                    flexBasis: '100%',
                    width: '100%',
                    overflow: 'visible'
               },
               config: {
                    duration: 1000,
                    easing: easings.easeOutExpo
                }
            })

            accountTypeParagraphApi.start({
                to: {
                    height: '100px',
                    overflow: 'visible',
                },
                config: {duration: 1000, easing: easings.easeOutQuad},
                delay: 700
            })

            accountTypePerfixApi.start({
                to: {
                    overflow: 'visible',
                    width: '70px'
                },
                config: {duration: 200, easing: easings.easeInCubic}
            })

        }

    }, [accountType]);

    let [teacherFormSprings, teacherFormApi] = useSpring(() => ({
        from: {
            flexBasis: '0%',
            overflow: 'hidden',
            width: '100%'
        }
    }))

    let [accountButtonSprings, accountButtonApi] = useSpring(() => ({
        from: {
            flexBasis: '100%',
            width: '25%',
            overflow: 'hidden'
        }
    }))

    let [accountTypePerfixSprings, accountTypePerfixApi] = useSpring(() => ({
        from: {
            width: '0px',
            overflow: 'hidden'
        }
    }))

    let [accountTypeParagraphSprings, accountTypeParagraphApi] = useSpring(() => ({
        from: {
            width: '100%',
            height: '0px',
            overflow: 'hidden'
        }
    }))
 
    return (
        <div className="flex flex-col items-center h-full w-[49%]">
            
            {/* // the button */}
            <animated.div style={{...accountButtonSprings}} >

                <div className="flex flex-col justify-center items-start h-full w-full text-4xl font-bold text-modern-heading">

                        <div className="flex gap-2">
                            <animated.div style={{...accountTypePerfixSprings}}>
                                <span className="text-nowrap">as a</span>
                            </animated.div>
                            <button onClick={() => setAccountType('student')} className="student">student</button>
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

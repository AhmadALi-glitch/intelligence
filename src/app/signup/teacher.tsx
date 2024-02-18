'use client';

import "./signup.css";
import { useSpring, easings, animated } from "@react-spring/web";import { useContext, useEffect, useState } from "react";
import StuduentForm from "./studentForm";
import { ThemeContext, ThemeDispatcherContext } from "@/theme/context";

export default function TeacherSide( { setAccountType, accountType }: { setAccountType: (accountType: string) => void, accountType: string } ) {

    let [theme, themeChangingDispatcher] = [ useContext(ThemeContext), useContext(ThemeDispatcherContext) ]

    useEffect(() => {
        // if teacher apply teacher animations
        // if student slide the teacher up
        // and bring the student form from buttom
        if(accountType == 'teacher') {

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
                    width: 'fit-content'
                },
                config: {duration: 200, easing: easings.easeInCubic}
            })

            studentFormApi.start({
                to: {
                    flexBasis: '0%'
                },
                config: {duration: 1000, easing: easings.easeOutQuad},
            })


        } else if(accountType == 'student') {

            // 1- move the student up 
            accountButtonApi.start({
                to: {
                    overflow: 'hidden',
                    flexBasis: '0%'
                },
                config: {duration: 1000, easing: easings.easeOutQuad}
            })
            // slide up the teacher form
            studentFormApi.start({
                to: {
                    flexBasis: '100%',
                },
                config: {duration: 1000, easing: easings.easeOutQuad},
            })

            accountTypeParagraphApi.start({
                to: {
                    height: '0px',
                    overflow: 'visible',
                },
                config: {duration: 500, easing: easings.easeOutQuad},
                delay: 700
            })

        }

    }, [accountType]);

    let [studentFormSprings, studentFormApi] = useSpring(() => ({
        from: {
            flexBasis: '0%',
            overflow: 'hidden',
            width: '100%'
        }
    }))

    let [accountButtonSprings, accountButtonApi] = useSpring(() => ({
        from: {
            flexBasis: '100%',
            width: '30%',
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

        <div className={ `flex flex-col items-center h-full w-[49%] ${theme.font.paragraph}` }>

            {/* // the button */}
            <animated.div style={{...accountButtonSprings}} >

                <div className={ `flex flex-col justify-center gap-1 items-start h-full w-full  font-bold ${theme.color.paragraph}` }>

                        <div className="flex gap-4 text-5xl">
                            <animated.div style={{...accountTypePerfixSprings}}>
                                <span className="text-nowrap">as a</span>
                            </animated.div>
                            <button onClick={() => setAccountType('teacher')} className="teacher">teacher</button>
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
'use client';

import { ThemeContext } from "@/theme/context";
import { animated, easings, useSpring } from "@react-spring/web"
import { useContext } from "react";

export default function LoadingSpinner(){

    let theme = useContext(ThemeContext);

    let [springs, api] = useSpring(() => ({

        from: {
            rotate: '0deg'
        },

        to: {
            rotate: '360deg'
        },

        loop: true,

        config: {
            easing: easings.easeOutBack,
            duration: 3000,
            friction: 1000,
            mass: 1000000
        }

    }));

    return (
        <>
            <animated.div style={{...springs, width:'100px'}}>
                {/* <img style={{width:'100px'}} src="/loading.svg" alt="" /> */}
                    <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                        <circle className={`${theme.fill.dilect_2}`} cx="248" cy="24" r="24"/>
                        <circle  className={`${theme.fill.dilect_2}`} cx="248" cy="472" r="24"/>
                        <circle className={`${theme.fill.dilect_2}`}  cx="136" cy="53.6" r="24"/>
                        <path className={`${theme.fill.dilect_2}`}  d="M380.8,430.4c6.4,11.2,2.4,25.6-8.8,32.8c-11.2,6.4-25.6,2.4-32.8-8.8c-6.4-11.2-2.4-25.6,8.8-32.8
                            C359.2,415.2,374.4,419.2,380.8,430.4z"/>
                        <path className={`${theme.fill.dilect_2}`}  d="M65.6,115.2c11.2,6.4,15.2,20.8,8.8,32.8c-6.4,11.2-20.8,15.2-32.8,8.8c-11.2-6.4-15.2-20.8-8.8-32.8
                            S54.4,108.8,65.6,115.2z"/>
                        <path className={`${theme.fill.dilect_2}`}  d="M454.4,339.2c11.2,6.4,15.2,20.8,8.8,32.8c-6.4,11.2-20.8,15.2-32.8,8.8
                            c-11.2-6.4-15.2-20.8-8.8-32.8C428,336.8,442.4,332.8,454.4,339.2z"/>
                        <circle className={`${theme.fill.dilect_2}`}  cx="24" cy="248" r="24"/>
                        <circle  className={`${theme.fill.dilect_2}`} cx="472" cy="248" r="24"/>
                        <path className={`${theme.fill.dilect_2}`}  d="M41.6,339.2c11.2-6.4,25.6-2.4,32.8,8.8c6.4,11.2,2.4,25.6-8.8,32.8c-11.2,6.4-25.6,2.4-32.8-8.8
                            S30.4,346.4,41.6,339.2z"/>
                        <path className={`${theme.fill.dilect_2}`} d="M430.4,115.2c11.2-6.4,25.6-2.4,32.8,8.8c6.4,11.2,2.4,25.6-8.8,32.8c-11.2,6.4-25.6,2.4-32.8-8.8
                            C415.2,136.8,419.2,121.6,430.4,115.2z"/>
                        <path className={`${theme.fill.dilect_2}`}  d="M115.2,430.4c6.4-11.2,20.8-15.2,32.8-8.8c11.2,6.4,15.2,20.8,8.8,32.8c-6.4,11.2-20.8,15.2-32.8,8.8
                            C112.8,456,108.8,441.6,115.2,430.4z"/>
                        <path className={`${theme.fill.dilect_2}`}  d="M339.2,41.6c6.4-11.2,20.8-15.2,32.8-8.8c11.2,6.4,15.2,20.8,8.8,32.8c-6.4,11.2-20.8,15.2-32.8,8.8
                            C336.8,68,332.8,53.6,339.2,41.6z"/>
                    </svg>
            </animated.div>
        </>
    )
}


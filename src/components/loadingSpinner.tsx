'use client';

import { animated, easings, useSpring } from "@react-spring/web"

export default function LoadingSpinner(){

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
                <img style={{width:'100px'}} src="/loading.svg" alt="" />
            </animated.div>
        </>
    )
}


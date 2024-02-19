import { ThemeContext } from "@/theme/context";
import { easings, useTrail, animated } from "@react-spring/web"
import { animations } from "framer-motion";
import { useContext, useEffect, useState } from "react";

export default function SentenceRevealer({sentence, appearDuration, disappearDuration, delay, removeAfter, onAnimateEnd}: {sentence: string, appearDuration: number, disappearDuration: number, delay: number, removeAfter: number, onAnimateEnd: () => void}) {

    let theme = useContext(ThemeContext);
    let [animationState, setAnimationState] = useState('animating');

    let [trials, api] = useTrail(sentence.split(' ').length, () => ({
        from: {
            height: '0px',
            overflow: 'hidden',
            scale: '1.2',
            transform: 'translateY(0px)'
        },
        to: {
            height: '50px',
            overflow: 'hidden',
            scale: '1',
            transform: 'translateY(0px)'
        },
        config: {
            easing: easings.easeInOutQuart,
            appearDuration
        },
        delay
    }))

    useEffect(() => {
        if(animationState == 'animating') {
            api.start({
                to: {
                    transform: 'translateY(-90px)',
                    height: '0px',
                    overflow: 'hidden'
                },
                config: {
                    easing: easings.easeOutQuad,
                    duration: disappearDuration
                },
                delay: removeAfter + delay,
            })
            // animation finishd after each spring in the trials is finished    
            setTimeout(() => {onAnimateEnd()}, (disappearDuration * sentence.split(' ').length) + removeAfter + delay)
            setAnimationState('finished');
        }
    }, [animationState])


    return (
        <>
            <div className={ `words-wrapper flex gap-3 text-5xl font-extrabold ${theme.color.dilect_2}` }>
                {
                    trials.map((props, index) => {
                        return <animated.div key={index} style={props}>
                            <div className="word">{sentence.split(' ')[index]}</div>
                        </animated.div>
                    })
                }
            </div>
        </>
    )
}

import { ThemeContext } from "@/theme/context";
import { easings, useTrail, animated } from "@react-spring/web"
import { useContext } from "react";

export default function SentenceRevealer({sentence}: {sentence: string}) {

    let theme = useContext(ThemeContext);

    let [trials, api] = useTrail(sentence.split(' ').length, () => ({
        from: {
            height: '0px',
            overflow: 'hidden',
            scale: '1.2'
        },
        to: {
            height: '30px',
            overflow: 'hidden',
            scale: '1'
        },
        config: {
            easing: easings.easeInOutQuart,
            duration: 200
        }
    }))

    return (
        <>
            <div className={ `words-wrapper flex gap-3 text-2xl font-extrabold ${theme.color.dilect_2}` }>
                {
                    trials.map((props, index) => {
                        return <animated.div style={props}>
                            <div className="word">{sentence.split(' ')[index]}</div>
                        </animated.div>
                    })
                }
            </div>
        </>
    )
}

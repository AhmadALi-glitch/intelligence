'use client';
import "./home.css";
import { useSpring, animated } from "@react-spring/web";
import { easings } from "@react-spring/web";
import Link from "next/link";

export default function Home() {
  
  const [springs, api] = useSpring(() => {
    return {
      from: {
        x: 100
      },
      config: {
        easing: easings.easeInOutCirc,
        duration: 1000 
      }
    }
  })

  const show = () => {
    api.start({
      to: {
        x: 0
      }
    });
  }

  return (
    <main className="w-full h-[2000px]">
      <div className="text-4xl text-modern-heading">
        <div className="parent bg-modern-paragraph w-80 h-80">
          <button onClick={show} className="change">change</button>
          <Link href={'/signup'} title="Signup">sign up</Link>
          <animated.div style={{...springs, position: "absolute"}}>
            <div className="square flex text-red-400">
              <div className="1">1</div>
              <div className="2">2</div>
            </div>
          </animated.div>
        </div>
      </div>
    </main>
  );

}

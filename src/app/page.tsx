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
    </main>
  );

}

import "./Slogan.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Slogan() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".slogan-word");

      gsap.set(words, {
        y: 100,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
      });

      tl.to(words, {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="slogan-container">
      <div className="main__slogan-cont">
        <h1 className="main__slogan">
          <span className="slogan-word">Tailored</span>
          <span className="slogan-word">Web Design</span>
          <span className="slogan-word">for</span>
          <span className="slogan-word">Growing</span>
          <span className="slogan-word">Businesses.</span>
        </h1>
      </div>
    </div>
  );
}

export default Slogan;

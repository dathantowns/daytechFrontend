import "./WWD.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../../assets/dayLightBlue.jpg";

gsap.registerPlugin(ScrollTrigger);

function WWD() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".wwd__title",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wwd__title",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Cards staggered animation
      gsap.fromTo(
        ".wwd-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wwd__cards",
            start: "top 75%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wwd">
      <div className="wwd__container">
        <img src={bg} alt="Background" className="wwd__background" />
        <h2 className="wwd__title">What We Do</h2>
        <p className="wwd__subtitle">
          Your partner for professional web solutions
        </p>
        <div ref={cardsRef} className="wwd__cards">
          <div className="wwd-card">
            <div className="wwd-card__icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            <h3 className="wwd-card__title">Website Design</h3>
            <p className="wwd-card__description">
              We craft stunning, user-friendly designs that capture your brand
              identity and engage your audience. Our designs are responsive,
              modern, and optimized for conversions.
            </p>
          </div>

          <div className="wwd-card">
            <div className="wwd-card__icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            </div>
            <h3 className="wwd-card__title">Custom Built Websites</h3>
            <p className="wwd-card__description">
              From scratch to launch, we build fully custom websites tailored to
              your unique needs. No templates—just clean, efficient code
              designed specifically for your business goals.
            </p>
          </div>

          <div className="wwd-card">
            <div className="wwd-card__icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="wwd-card__title">Hosting & Deployment</h3>
            <p className="wwd-card__description">
              We handle the technical details so you can focus on your business.
              From domain setup to reliable hosting and seamless deployment, we
              ensure your website stays fast and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WWD;

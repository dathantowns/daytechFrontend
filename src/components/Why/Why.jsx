import "./Why.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../../assets/dayClouds.jpg";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "100% Custom-Built Websites",
    description:
      "Every website is uniquely crafted from scratch to match your specific business needs.",
  },
  {
    title: "No Templates or Pre-Made Themes",
    description:
      "We don't use generic templates—your site is genuinely one-of-a-kind.",
  },
  {
    title: "Designed Before Development",
    description:
      "We create detailed designs first, ensuring perfection before writing any code.",
  },
  {
    title: "Clean, User-Friendly UX",
    description:
      "Intuitive interfaces that keep visitors engaged and convert them into customers.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Built to grow with your business, handling increased traffic and features seamlessly.",
  },
  {
    title: "SEO-Optimized Foundations",
    description:
      "Every site is built with search engine optimization best practices from day one.",
  },
  {
    title: "Full-Stack Web Application Development",
    description:
      "End-to-end development for complex web applications with full functionality.",
  },
  {
    title: "Custom Internal Business Tools",
    description:
      "Tailored software solutions to streamline your internal operations and workflows.",
  },
  {
    title: "Hosting, Deployment & DevOps Included",
    description:
      "We handle everything from deployment to ongoing maintenance and optimization.",
  },
  {
    title: "Honest, Competitive Pricing",
    description:
      "Transparent pricing with no hidden fees—you get exactly what you pay for.",
  },
];

function Why() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".why__header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why__header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Cards staggered animation
      gsap.fromTo(
        ".why-card",
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why__cards",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why">
      <img src={bg} alt="Background" className="why__background" />

      <div className="why__header">
        <h2 className="why__title">Why Choose Us</h2>
        <p className="why__subtitle">
          Experience the difference of working with true professionals
        </p>
      </div>

      <div className="why__cards">
        {reasons.map((reason, index) => (
          <div key={index} className="why-card">
            <span className="why-card__number">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div className="why-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="why-card__title">{reason.title}</h3>
            <p className="why-card__description">{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="why__scroll-hint">
        <span>
          Scroll to explore{" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </section>
  );
}

export default Why;

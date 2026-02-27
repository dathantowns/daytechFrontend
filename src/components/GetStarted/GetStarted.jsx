import "./GetStarted.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../../assets/dayLightBlue.jpg";

gsap.registerPlugin(ScrollTrigger);

function GetStarted() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".getstarted__header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".getstarted__header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Steps animation
      gsap.fromTo(
        ".getstarted-step",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".getstarted__steps",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Form animation
      gsap.fromTo(
        ".getstarted__form",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".getstarted__form",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      description:
        "Tell us about your business, goals, and what you want to achieve with your website.",
    },
    {
      number: "02",
      title: "We Design & Develop",
      description:
        "Our team creates a custom design and builds your website from scratch with perfect attention to detail.",
    },
    {
      number: "03",
      title: "Launch & Grow",
      description:
        "We deploy your site and provide ongoing support to help your business grow online.",
    },
  ];

  return (
    <section ref={sectionRef} className="getstarted">
      <img src={bg} alt="Background" className="getstarted__background" />

      <div className="getstarted__header">
        <h2 className="getstarted__title">Get Started</h2>
        <p className="getstarted__subtitle">
          Ready to bring your vision online? Follow these simple steps to get
          started.
        </p>
      </div>

      <div className="getstarted__steps">
        {steps.map((step, index) => (
          <div key={index} className="getstarted-step">
            <span className="getstarted-step__number">{step.number}</span>
            <h3 className="getstarted-step__title">{step.title}</h3>
            <p className="getstarted-step__description">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="getstarted__form-container">
        <h3 className="getstarted__form-title">Let's Connect</h3>
        <p className="getstarted__form-subtitle">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        <form className="getstarted__form" onSubmit={handleSubmit}>
          <div className="getstarted__form-group">
            <label htmlFor="name" className="getstarted__label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="getstarted__input"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="getstarted__form-group">
            <label htmlFor="email" className="getstarted__label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="getstarted__input"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="getstarted__form-group">
            <label htmlFor="phone" className="getstarted__label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="getstarted__input"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="getstarted__form-group">
            <label htmlFor="message" className="getstarted__label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="getstarted__textarea"
              placeholder="Tell us about your project..."
              rows="4"
              required
            />
          </div>

          <button type="submit" className="getstarted__submit">
            Send Message
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default GetStarted;

import "./Hero.css";
import dayPic from "../../assets/dayWhite.jpg";
import logo from "../../assets/DAYTECHlogo_round_1-removebg-preview.png";

function Hero() {
  return (
    <section className="hero">
      <img src={dayPic} alt="Background" className="hero__background" />
      <img src={logo} alt="logo" className="hero__logo" />
      <div className="hero__scroll-arrow">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;

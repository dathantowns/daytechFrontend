import "./Main.css";
import { useRef } from "react";
import orangeBg from "../../assets/orangesBg.jpg";
import Hero from "../Hero/Hero";
import Slogan from "../Slogan/Slogan";
import WWD from "../WWD/WWD";
import Why from "../Why/Why";
import GetStarted from "../GetStarted/GetStarted";

function Main() {
  const mainRef = useRef(null);

  return (
    <main ref={mainRef} className="main">
      <img src={orangeBg} alt="Background" className="main__background" />
      <div id="hero">
        <Hero />
      </div>

      <Slogan />

      <div id="what-we-do">
        <WWD />
      </div>
      <div id="why-choose-us">
        <Why />
      </div>
      <div id="get-started">
        <GetStarted />
      </div>
    </main>
  );
}

export default Main;

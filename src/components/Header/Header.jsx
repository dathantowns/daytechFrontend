import "./Header.css";
import logo from "../../assets/DAYTECH_logo_alone-removebg-preview.png";
import title from "../../assets/DAYTECH1.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-cont">
        <img src={logo} alt="Daytech Logo" className="header__logo" />
        <img src={title} alt="Daytech Title" className="header__title" />
      </div>
      <nav className="header__nav">
        <a href="#what-we-do" className="header__nav-link">
          Services
        </a>
        <a href="#why-choose-us" className="header__nav-link">
          Why Us?
        </a>
        <a href="#get-started" className="header__nav-link">
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Header;

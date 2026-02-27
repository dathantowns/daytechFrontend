import "./Footer.css";
import logo from "../../assets/DAYTECH_logo_alone-removebg-preview.png";
import title from "../../assets/DAYTECH1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__background"></div>
      <div className="footer__content">
        <div className="footer__links">
          <div className="footer__column">
            <h4 className="footer__heading">Quick Links</h4>
            <a href="#what-we-do" className="footer__link">
              Services
            </a>
            <a href="#why-choose-us" className="footer__link">
              Why Us
            </a>
            <a href="#get-started" className="footer__link">
              Get Started
            </a>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Contact</h4>
            <p className="footer__contact">daytechwebdev@gmail.com</p>
            <p className="footer__contact">+1 (661) 633-4953</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Daytech Web Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

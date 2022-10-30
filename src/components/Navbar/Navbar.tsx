import "./navbar.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a className="navbar__logo-svg" href="">
          <LogoIcon />
        </a>
      </div>

      <nav className="navbar__links">
        <a href="#" className="navbar__link">
          Features
        </a>
        <a href="#" className="navbar__link">
          Partners
        </a>
        <a href="#" className="navbar__link">
          Stories
        </a>
      </nav>

      <div className="navbar__button--wrapper">
        <button className="navbar__button">Download for free</button>
      </div>

      <div className="navbar__burger">
        <button className="navbar__burger-menu"></button>
      </div>
    </div>
  );
};

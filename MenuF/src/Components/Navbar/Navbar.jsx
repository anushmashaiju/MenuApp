import { useState } from "react";
import "./NavbarHeading.css";

function NavbarHeading() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* Logo and Hamburger Menu */}
        <div className="navbar-brand-custom">
          <img
            src="images/Logo (1).png"
            alt="Logo"
            className="navbar-logo"
          />
          <button className="navbar-toggle" onClick={toggleMenu}>
            ☰
          </button>
       

        {/* Navbar Title (Hidden in Hamburger Menu) */}
        {!isMenuOpen && (
          <div className="navbar-title">
            <span className="navbar-title-line1">
              <span className="blue">DEEP</span>
              <span className="white"> NET</span>
            </span>
            <span className="navbar-title-line2">SOFT</span>
          </div>
        )}
 </div>
        {/* Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#home" className="nav-link-custom">
            Home
          </a>
          <a href="#menu" className="nav-link-custom">
            Menu
          </a>
          <a href="#reservation" className="nav-link-custom">
            Make a Reservation
          </a>
          <a href="#contact" className="nav-link-custom">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarHeading;

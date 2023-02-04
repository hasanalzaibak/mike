import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <header>
      <div onClick={handleToggle} className={toggleMenu ? "active-menu" : null}>
        <span className={toggleMenu ? "active-burger" : null}></span>
      </div>

      <nav className="navbar">
        <ul>
          <NavLink to="/" onClick={closeMenu}>
            <li>Home</li>
          </NavLink>
          <NavLink to="about" onClick={closeMenu}>
            <li to="about">About</li>
          </NavLink>
          <NavLink to="projects" onClick={closeMenu}>
            <li>My Projects</li>
          </NavLink>
          <NavLink to="contact" onClick={closeMenu}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>

      <nav className={toggleMenu ? "menu" : "menu-before"}>
        <ul>
          <Link to="/" onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link to="about" onClick={closeMenu}>
            <li>About</li>
          </Link>
          <Link to="projects" onClick={closeMenu}>
            <li>My Projects</li>
          </Link>
          <Link to="contact" onClick={closeMenu}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

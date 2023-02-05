import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

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
      <m.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleToggle}
        className={toggleMenu ? "active-menu" : null}
      >
        <span className={toggleMenu ? "active-burger" : null}></span>
      </m.div>

      <m.nav
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="navbar"
      >
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
      </m.nav>

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

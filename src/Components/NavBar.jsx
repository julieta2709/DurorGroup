import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoDuror from "../assets/LogoDuror-removebg.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="navbar-logo">
          <img className="logo" src={LogoDuror} alt="Logo Duror Group" />
          DUROR <span className="logo-group">GROUP</span>
        </Link>
      </div>
      <div className="navbar-menu" onClick={handleToggleMenu}>
        {showMenu ? (
          <FaTimes className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
      <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleToggleMenu}>
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/trabajos" className="nav-link" onClick={handleToggleMenu}>
            Trabajos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/servicios" className="nav-link" onClick={handleToggleMenu}>
            Servicios
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/clientes" className="nav-link" onClick={handleToggleMenu}>
            Clientes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link" onClick={handleToggleMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

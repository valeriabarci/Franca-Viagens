import React, { useState } from "react";
import "./Header.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>F</span>ranca
            <span>V</span>iagens
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Vôos</NavLink>
            </li>
            <li>
              <NavLink to="#">Companhias</NavLink>
            </li>
            <li>
              <NavLink to="#">Pacotes</NavLink>
            </li>
            <li>
              <NavLink to="#">Atendimento</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#" target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* Menu Hamburguer  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{ fill: 'white' }} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

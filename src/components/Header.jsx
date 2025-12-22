import React, { useState } from 'react';
import { Icons } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-top-row">
          <div className="header-left md:hidden">
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icons.Menu />
            </button>
          </div>

          <div className="header-logo-container">
            <a href="/" className="logo">LOGO</a>
          </div>

          <div className="header-actions">
            <button className="icon-btn" aria-label="Search"><Icons.Search /></button>
            <button className="icon-btn" aria-label="Wishlist"><Icons.Heart /></button>
            <button className="icon-btn" aria-label="Cart"><Icons.Bag /></button>
            <button className="icon-btn hidden md:block" aria-label="Profile"><Icons.User /></button>
            <button className="lang-btn hidden md:flex">ENG <Icons.ChevronDown /></button>
          </div>
        </div>

        <nav className="nav-desktop hidden md:block" role="navigation">
          <ul className="nav-list-centered">
            <li><a href="#" className="nav-link">SHOP</a></li>
            <li><a href="#" className="nav-link">SKILLS</a></li>
            <li><a href="#" className="nav-link">STORIES</a></li>
            <li><a href="#" className="nav-link">ABOUT</a></li>
            <li><a href="#" className="nav-link">CONTACT US</a></li>
          </ul>
        </nav>

        {isMenuOpen && (
          <div className="mobile-menu-drop md:hidden">
            <ul>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">SKILLS</a></li>
              <li><a href="#">STORIES</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

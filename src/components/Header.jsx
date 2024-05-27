import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./Pfp_hires 2.jpg" alt="Logo" className="logo-image" />
        <h1 className="logo-text">BANIME</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://pump.fun/zPb7zpyy8xv1UEtvq3bJgLtfDeG3RAXrjTytssDU9pU" className="nav-link">Pump Fun</a>
          </li>
          <li className="nav-item">
            <a href="https://t.me/BookOfAnimePortal" className="nav-link">Telegram</a>
          </li>
          <li className="nav-item">
            <a href="https://x.com/BOAonSol" className="nav-link">Twitter</a>
          </li>
          <li className="nav-item">
            <a href="https://pump.fun/board" className="nav-link">DEX Screener</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import logo from "../assets/images/logo.svg";
import bars from "../assets/images/icon-menu.svg";

const Header = ({ openSidebar }) => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="open-sidebar">
            <img
              src={bars}
              alt="bars"
              onClick={() => {
                openSidebar();
              }}
            />
          </button>
        </div>
        <div className="nav-links">
          <ul className="links-list">
            <li className="single-list-item">
              <a href="/">home</a>
            </li>
            <li className="single-list-item">
              <a href="/">new</a>
            </li>
            <li className="single-list-item">
              <a href="/">popular</a>
            </li>
            <li className="single-list-item">
              <a href="/">trending</a>
            </li>
            <li className="single-list-item">
              <a href="/">categories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React, { useState } from "react";
import image from "../../images/Untitled-1.png";
import "../../App.scss";

import {
  faBagShopping,
  faCircleUser,
  faXmark,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  // sidebar open close js code
  const navLinks = document.querySelector(".nav-links");

  const open = () => {
    navLinks.style.left = "0";
  };
  const close = () => {
    navLinks.style.left = "-100%";
  };
  // sidebar submenu open close js code
  const show1 = () => {
    navLinks.classList.toggle("show1");
  };

  const show3 = () => {
    navLinks.classList.toggle("show3");
  };

  return (
    <div>
      <nav className="nav">
        <div className="navbar">
          <FontAwesomeIcon
            onClick={open}
            className="bx bx-menu"
            icon={faBarsStaggered}
          />
          <div className="logo">
            <img src={image} alt="" />
          </div>
          <div className="nav-links">
            <div className="sidebar-logo">
              <img src={image} alt="" />
              <FontAwesomeIcon
                icon={faXmark}
                className="bx bx-x"
                onClick={close}
              />
            </div>
            <ul className="links">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#" onClick={show1}>
                  For Kindergarten
                </a>
              </li>
              <li>
                <a href="#" onClick={show3}>
                  For High School
                </a>
              </li>
              <li>
                <a href="#"> For College</a>
              </li>
              <li>
                <a href="#" onClick={show3}>
                  Courses
                </a>

                <ul className="js-sub-menu sub-menu">
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">For Kindergarten</a>
                  </li>
                  <li>
                    <a href="#">For High School</a>
                  </li>
                  <li>
                    <a href="#">For College</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                </ul>
              </li>
              <li>
                <button className="iconBtn">
                  <span>Cart({0})&nbsp;</span>
                  <FontAwesomeIcon className="icon" icon={faBagShopping} />
                </button>
              </li>
              <li>
                <button className="iconBtn">
                  <span> My Account &nbsp; </span>
                  <FontAwesomeIcon className="icon1" icon={faCircleUser} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import image from "../../images/Untitled-1.png";
import "../../App.scss";
import {
  faHome,
  faBagShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={image} alt="" />
      </div>
      <div className="item">
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">
              For Kindergarten &nbsp;
              <FontAwesomeIcon icon={faChevronDown} />
              <ul>
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
            </a>
          </li>
          <li>
            <a href="#">
              For High School &nbsp;
              <FontAwesomeIcon icon={faChevronDown} />
              <ul>
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
            </a>
          </li>
          <li>
            <a href="#">
              For College &nbsp;
              <FontAwesomeIcon icon={faChevronDown} />
              <ul>
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
            </a>
          </li>

          <li>
            <a href="#">
              Courses &nbsp;
              <FontAwesomeIcon icon={faChevronDown} />
              <ul>
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
            </a>
          </li>
        </ul>
      </div>
      <div className="log">
        <button>
          Cart({0}) <FontAwesomeIcon icon={faBagShopping} />
        </button>
        <button></button>
      </div>
    </div>
  );
};

export default Nav;

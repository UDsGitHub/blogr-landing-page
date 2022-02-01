import { useState, useEffect } from "react";
import { LinksData } from "../data/LinksData";
import logo from "../images/logo.svg";
import arrowDark from "../images/icon-arrow-dark.svg";
import arrowLight from "../images/icon-arrow-light.svg";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navmenuClasslist = `p-6 navmenu ${isOpen && 'active'} flex flex-col items-center`;

  return (
    <div>
      <nav className="flex gap-8 items-center justify-between md:justify-start">
        <img className="block" src={logo} alt="blogr logo" />
          <div className={navmenuClasslist}>
            <ul className="w-full md:w-auto flex flex-col items-center md:flex-row md:gap-6 md:items-start">
              {LinksData.map(({ id, title, links }) => {
                return (
                  <li
                    key={id}
                    className="navbar__list-item flex flex-col items-center md:text-white mb-6 font-bold md:font-medium md:text-sm lg:text-base"
                  >
                    <span className="flex items-center gap-2">
                      <p className="navbar__list-header notwhite">{title}</p>
                      <span>
                        <picture className="navbar__list-arrow block">
                          <source
                            media="(min-width: 768px)"
                            srcSet={arrowLight}
                          />
                          <img src={arrowDark} alt="dropdown arrow" />
                        </picture>
                      </span>
                    </span>
                    {true && (
                      <ul className="navbar__list-item__dropdown">
                        {links.map((link, index) => {
                          return (
                            <li key={index}>
                              <a href="#">{link}</a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col border-t-2 md:border-0 md:flex-row md:items-center md:gap-4">
              <li className="my-6 md:m-0">
                <button className="login notwhite font-bold md:font-semibold">
                  Login
                </button>
              </li>
              <li>
                <button className="signup btn-light py-3 px-8 rounded-full text-white font-bold">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import NavBarLink from "../components/NavBarLink";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-light">
      <div className="container mx-auto flex justify-between">
        {/* Name */}
        <NavLink
          className="text-gray-500 inline-flex items-center py-3 px-3 mr-4 hover:text-gray-700 text-3xl font-bold cursive tracking-widest md:whitespace-nowrap"
          to="/"
          exact
        >
          <p className="hidden xl:inline">DEVIL MULTIGAMING E-SPORT</p>
          <p className="inline xl:hidden">DEVIL</p>
        </NavLink>

        {/* Icons */}
        <div className="inline-flex py-3 px-3 my-auto">
          <SocialIcon
            url="https://twitter.com/EsportDevils"
            className="mr-4"
            target="_blank"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.twitch.tv/devil_multigaming"
            className="mr-4"
            target="_blank"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/devil_multigaming/"
            className="mr-4"
            target="_blank"
            bgColor="#dd2a7b"
            style={{ height: 35, width: 35 }}
          />
        </div>

        {/* Links */}
        <nav className="hidden lg:flex">
          <NavBarLink to="/" exact>
            ACCUEIL
          </NavBarLink>
          <NavBarLink to="/projects" exact>
            PROJETS
          </NavBarLink>
          <NavBarLink to="/services" exact>
            SERVICES
          </NavBarLink>
          <NavBarLink to="/about" exact>
            À PROPOS
          </NavBarLink>
          <NavBarLink to="/contact" exact>
            CONTACT
          </NavBarLink>
        </nav>

        {/* Menu Button */}
        <div className="flex lg:hidden">
          <div className="container my-auto">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? '' : 'hidden'} lg:hidden`} id="mobile-menu">
          <div className="px-6 pt-2 pb-3 ml-auto space-y-1 text-right sm:max-w-xs">
          <NavBarLink to="/" menu={true} exact>
            ACCUEIL
          </NavBarLink>
          <NavBarLink to="/projects" menu={true} exact>
            PROJETS
          </NavBarLink>
          <NavBarLink to="/services" menu={true} exact>
            SERVICES
          </NavBarLink>
          <NavBarLink to="/about" menu={true} exact>
            À PROPOS
          </NavBarLink>
          <NavBarLink to="/contact" menu={true} exact>
            CONTACT
          </NavBarLink>
          </div>
        </div>
    </header>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="dark:bg-gray-800">
      <div className="container mx-auto flex justify-between">
        {/* Name */}
        <NavLink
          className="text-gray-600 dark:text-gray-200 inline-flex items-center py-3 px-3 mr-4 hover:text-gray-700 text-3xl font-bold cursive tracking-widest md:whitespace-nowrap"
          to="/"
          exact
        >
          <p className="hidden xl:inline">DEVIL MULTIGAMING E-SPORT</p>
          <p className="inline xl:hidden">DEVIL</p>
        </NavLink>

        {/* Dark Mode Switch */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={`${
              darkMode ? "text-gray-600" : "text-yellow-500"
            }  w-5 h-5 fill-current`}
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              if (!darkMode) document.documentElement.classList.add("dark");
              else document.documentElement.classList.remove("dark");
            }}
            id="headlessui-switch-1"
            role="switch"
            tabindex="0"
            className={`${
              darkMode ? "dark-mod-on" : "dark-mod-off"
            } mx-2 inline-flex items-center px-0.5 rounded-full w-12 h-6 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-500 focus:outline-none`}
            aria-checked="false"
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${
                darkMode ? "translate-x-6" : "translate-x-0"
              } bg-white rounded-full w-5 h-5 transform dark-mod-off duration-200`}
            ></span>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={`${
              darkMode ? "text-gray-100" : "text-gray-400"
            } w-5 h-5 fill-current`}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
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
      <div
        className={`${isMenuOpen ? "" : "hidden"} lg:hidden`}
        id="mobile-menu"
      >
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

function NavBarLink({ to, exact, children, menu }) {
  return (
    <NavLink
      to={to}
      className={`${
        !menu
          ? "inline-flex items-center py-3 px-3 my-6 rounded whitespace-nowrap"
          : "hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
      } hover:text-gray-900 text-gray-500 dark:text-gray-100 hover:underline`}
      activeClassName={`${
        !menu ? "" : "bg-gray-100 dark:bg-gray-900"
      } text-gray-900 text-black underline`}
      exact={exact}
    >
      {children}
    </NavLink>
  );
}

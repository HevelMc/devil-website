import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import usePersistedState from "./usePersistedState";
import { Menu, Transition } from "@headlessui/react";
import { useAuth } from "../contexts/AuthContext";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = usePersistedState(true);
  const { currentUser, isAdmin } = useAuth();

  updateDarkTheme();

  return (
    <header className="dark:bg-gray-800">
      <div className="container mx-auto flex justify-between px-4">
        {/* Name */}
        <NavLink
          className="text-gray-600 dark:text-gray-200 inline-flex items-center py-3 px-3 mr-4 hover:text-gray-700 text-3xl font-bold cursive tracking-widest md:whitespace-nowrap"
          to="/"
          exact
        >
          <svg
            className="inline mr-4 fill-current text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 392.777 370.616"
          >
            <path
              id="Exclusion_1"
              data-name="Exclusion 1"
              d="M199.519,370.616h0a20.955,20.955,0,0,1-3.134-.19l-.009,0a22.177,22.177,0,0,1-3.123.187,41.5,41.5,0,0,1-12.775-2.159,55.275,55.275,0,0,1-18.561-10.649c-27.849-21.484-84.433-62.782-85-63.2-.017.045-1.935,4.986-2.893,15.568a153.847,153.847,0,0,0-.362,20.388,244.384,244.384,0,0,0,3.255,29.615A178.721,178.721,0,0,1,47.16,325.475a140.362,140.362,0,0,1-14.889-30.212,109.374,109.374,0,0,1-5.163-21.339,57.212,57.212,0,0,1-.579-8.086l-.008,0a37.436,37.436,0,0,1-11.8,2.192,18.4,18.4,0,0,1-6.688-1.124,11.449,11.449,0,0,1-5.429-4.262c-4.5-6.619-3.178-19.066,3.924-37,3.37-12.988,11-29.479,22.674-49.015,9.34-15.629,21.276-33.231,35.476-52.316C88.875,91.8,111.523,65.954,111.748,65.7c-.071.334-8.321,39.035-15.908,80.314C91.411,170.112,88.1,190.228,86,205.8c-2.626,19.463-3.356,31.839-2.172,36.784,23.009,16.894,82.951,60.621,83.542,61.052V224.813h-.023c-.793,0-19.648.244-39.338,21.487a135.385,135.385,0,0,1-2.33-28.028,219.4,219.4,0,0,1,2.767-30.727c1.581-10.1,3.871-20.98,6.806-32.336,2.679-10.364,5.972-21.418,9.788-32.855,6.441-19.306,14.387-39.884,24.293-62.909,8.44-19.619,16.809-37.521,23.533-51.906l0,0,.025-.054c1.226-2.622,2.383-5.1,3.492-7.48,1.128,2.422,2.288,4.905,3.517,7.534,6.724,14.385,15.093,32.288,23.535,51.911,9.906,23.026,17.853,43.6,24.293,62.909,3.816,11.437,7.109,22.491,9.788,32.855,2.936,11.355,5.225,22.235,6.806,32.336a219.383,219.383,0,0,1,2.767,30.727,135.386,135.386,0,0,1-2.329,28.028c-19.69-21.243-38.546-21.487-39.339-21.487H225.4v78.822c.36-.263,60.606-44.213,83.542-61.052,1.185-4.945.454-17.321-2.172-36.784-2.1-15.57-5.412-35.686-9.842-59.788C289.377,104.921,281.1,66.084,281.021,65.7l.033.035c2.382,2.728,23.939,27.548,47.035,58.591,14.2,19.085,26.136,36.687,35.476,52.316,11.675,19.536,19.3,36.027,22.675,49.015,7.1,17.927,8.421,30.374,3.923,36.993a11.451,11.451,0,0,1-5.429,4.263,18.4,18.4,0,0,1-6.688,1.125,37.456,37.456,0,0,1-11.806-2.2l0,.013a57.926,57.926,0,0,1-.58,8.073,109.365,109.365,0,0,1-5.163,21.339,140.362,140.362,0,0,1-14.889,30.212,178.713,178.713,0,0,1-29.755,34.707,244.37,244.37,0,0,0,3.255-29.615,153.845,153.845,0,0,0-.362-20.388c-.953-10.529-2.874-15.519-2.893-15.568-.534.39-57.374,41.884-85,63.2a55.279,55.279,0,0,1-18.559,10.649A41.493,41.493,0,0,1,199.519,370.616Z"
            />
          </svg>
          <p className="hidden xl:inline">DEVIL MULTIGAMING</p>
          <p className="inline xl:hidden">DEVIL</p>
        </NavLink>

        {/* Dark Mode Switch */}
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="dark:text-gray-600 text-yellow-500 w-5 h-5 fill-current">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              updateDarkTheme();
            }}
            id="headlessui-switch-1"
            role="switch"
            tabIndex="0"
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="dark:text-gray-100 text-gray-400 w-5 h-5 fill-current">
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
          <Dropdown />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "" : "hidden"} lg:hidden`} id="mobile-menu">
        <div className="px-6 pt-2 pb-3 ml-auto space-y-1 text-right sm:max-w-xs">
          <NavBarLink to="/" menu="mobile" exact>
            ACCUEIL
          </NavBarLink>
          <NavBarLink to="/projects" menu="mobile" exact>
            PROJETS
          </NavBarLink>
          <NavBarLink to="/services" menu="mobile" exact>
            SERVICES
          </NavBarLink>
          <NavBarLink to="/about" menu="mobile" exact>
            À PROPOS
          </NavBarLink>
          <NavBarLink to="/contact" menu="mobile" exact>
            CONTACT
          </NavBarLink>
          <NavBarLink to="/my-account" menu="mobile" exact>
            MON COMPTE
          </NavBarLink>
          <NavBarLink to="/sign-out" menu="mobile" exact>
            DÉCONNEXION
          </NavBarLink>
        </div>
      </div>
    </header>
  );

  function NavBarLink({ to, exact, children, menu, disabled }) {
    if (menu == "dropdown") {
      return (
        <div className="py-1">
          <Menu.Item disabled={disabled}>
            {({ active }) => (
              <a
                href={to}
                className={`${
                  active
                    ? "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
                    : disabled
                    ? "text-gray-400 dark:text-gray-100"
                    : "text-gray-700 dark:text-gray-200"
                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
              >
                {children}
              </a>
            )}
          </Menu.Item>
        </div>
      );
    }

    return (
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        to={to}
        className={`${
          menu == "mobile"
            ? "hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            : "inline-flex items-center py-3 px-3 my-6 rounded whitespace-nowrap"
        } hover:text-gray-900 text-gray-500 dark:text-gray-100 hover:underline`}
        activeClassName={`${!menu ? "" : "bg-gray-100 dark:bg-gray-900"} text-gray-900 text-black underline`}
        exact={exact}
      >
        {children}
      </NavLink>
    );
  }

  function updateDarkTheme() {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  function Dropdown() {
    return (
      <div className="flex items-center justify-center z-50">
        <div className="relative inline-block text-left">
          <Menu>
            {({ open }) => (
              <>
                <span>
                  <Menu.Button className="inline-flex w-full py-2 transition duration-150 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="inline-flex items-center py-3 px-3 rounded whitespace-nowrap fill-current text-gray-500 dark:text-white"
                      width={48}
                      height={48}
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                </span>

                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-900 divide-y divide-gray-200 dark:divide-gray-900 rounded-md shadow-lg outline-none"
                  >
                    {!currentUser && (
                      <>
                        <NavBarLink to="/log-in" menu="dropdown">
                          Connexion
                        </NavBarLink>
                        <NavBarLink to="/sign-up" menu="dropdown">
                          Inscription
                        </NavBarLink>
                      </>
                    )}

                    {currentUser && (
                      <>
                        <div className="px-4 py-3">
                          <p className="text-sm leading-5 dark:text-white">Bonjour</p>
                          <p className="text-sm font-medium leading-5 text-gray-900 truncate dark:text-gray-100">
                            <b>{isAdmin() && "[admin] "}</b>
                            {currentUser.email}
                          </p>
                        </div>

                        <NavBarLink to="/my-account" menu="dropdown" disabled>
                          Mon compte
                        </NavBarLink>
                        <NavBarLink to="/sign-out" menu="dropdown">
                          Déconnexion
                        </NavBarLink>
                      </>
                    )}
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    );
  }
}

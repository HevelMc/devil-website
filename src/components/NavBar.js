import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import NavBarLink from "../components/NavBarLink";

export default function NavBar() {
  return (
    <header className="bg-red-light">
      <div className="container mx-auto flex justify-between">

        {/* Name */}
        <NavLink className="text-gray-500 inline-flex items-center py-6 px-3 mr-4 hover:text-gray-700 text-3xl font-bold cursive tracking-widest md:whitespace-nowrap" to="/" exact>DEVIL MULTIGAMING E-SPORT</NavLink>

        {/* Icons */}
        <div className="inline-flex py-3 px-3 my-6">
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
        <nav className="flex">
          <NavBarLink to="/" exact>ACCUEIL</NavBarLink>
          <NavBarLink to="/projects" exact>PROJETS</NavBarLink>
          <NavBarLink to="/services" exact>SERVICES</NavBarLink>
          <NavBarLink to="/about" exact>À PROPOS</NavBarLink>
          <NavBarLink to="/contact" exact>CONTACT</NavBarLink>
        </nav>
        
      </div>
    </header>
  );
}

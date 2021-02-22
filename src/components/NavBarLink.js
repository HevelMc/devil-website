
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarLink({ to, exact, children }) {
    return (
        <NavLink
            to={to}
            className="text-gray-500 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800 whitespace-nowrap"
            activeClassName="text-black"
            exact = {exact}
        >
        {children}
        </NavLink>
    )
}
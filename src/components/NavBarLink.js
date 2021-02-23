
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarLink({ to, exact, children, menu }) {
    return (
        <NavLink
            to={to}
            className={`${!menu ? "inline-flex items-center py-3 px-6 my-6 rounded whitespace-nowrap" : "hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"} hover:text-gray-900 text-gray-500 hover:underline`}
            activeClassName={`${!menu ? "" : "bg-gray-100"} text-gray-900 text-black underline`}
            exact = {exact}
        >
        {children}
        </NavLink>
    )
}
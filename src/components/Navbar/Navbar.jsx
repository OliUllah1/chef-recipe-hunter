import React from 'react';
import logo from '../../../public/logo.png'
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=''>
      <div className="navbar bg-gray-700 drop-shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className='h-10' src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <Link to='login'><button className="px-5 py-1 rounded text-white border border-blue-700 hover:bg-blue-400">Log In</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
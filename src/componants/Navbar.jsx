import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative text-sm px-3 py-2 transition-colors duration-200 ${
      isActive
        ? "text-gray-900 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gray-500 after:scale-x-100 after:opacity-100 after:origin-left after:transition-all after:duration-300"
        : "text-gray-500 hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-100 after:opacity-0 after:origin-left after:transition-all after:duration-300"
    }`;

  const links = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Listed books" },
    { to: "/pages-to-read", label: "Pages to read" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 rounded-sm shadow-sm md:shadow-none">
      <div className="container mx-auto px-5 h-14 flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 lg:text-3xl cursor-pointer">
          Book Vibe
        </span>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a className="text-sm font-medium px-4 py-1.5 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors rounded-sm cursor-pointer">
            Sign in
          </a>
          <a className="text-sm font-medium px-4 py-1.5 bg-gray-900 text-white hover:bg-gray-700 transition-colors rounded-sm cursor-pointer">
            Sign up
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-500 hover:bg-gray-100 transition-colors rounded-sm cursor-pointer"
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-4 pt-2 bg-white border-t border-gray-100 rounded-sm">
          <nav className="flex flex-col gap-1 mb-3">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex gap-2 pt-3 border-gray-100">
            <a className="flex-1 text-center text-sm font-medium py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors rounded-sm cursor-pointer">
              Sign in
            </a>
            <a className="flex-1 text-center text-sm font-medium py-2 bg-gray-900 text-white hover:bg-gray-700 transition-colors rounded-sm cursor-pointer">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

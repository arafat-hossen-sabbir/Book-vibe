import React from "react";

const Navbar = () => {
  return (
    <header className="bg-base-100">
      <div className="navbar container mx-auto px-5">
        <div className="navbar-start">
          <a className="text-[28px] font-extrabold tracking-wide cursor-pointer">
            Book Vibe
          </a>
        </div>

        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 font-medium">
            <li>
              <a className="hover:text-accent transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-accent transition-colors duration-200">
                Listed Books
              </a>
            </li>
            <li>
              <a className="hover:text-accent transition-colors duration-200">
                Pages to Read
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar-end flex items-center gap-3">
          <a className="btn btn-success">Sign in</a>
          <a className="btn btn-primary">Sign up</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

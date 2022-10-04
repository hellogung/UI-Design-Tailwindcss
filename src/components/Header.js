import React from "react";

const Header = () => {
  const menus = ["Go Canvas", "Client Stories", "Resources"];

  return (
    <>
      {/* header */}
      <nav className="font-medium">
        <div className="flex flex-row items-center justify-between py-5">
          {/* Logo */}
          <div className="logo text-3xl font-bold hover:scale-125 transition-all duration-300">
            Canvas
          </div>

          {/* Humberger Menu */}
          <button className="md:hidden group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Menu */}
          <div className="menu hidden md:block  ml-16">
            <ul className="flex items-center flex-row gap-8">
              {menus.map((menu, index) => (
                <li className="group" key={index}>
                  {menu}
                  <div className="h-0.5 bg-black scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <div className="action_button hidden md:flex  items-center gap-4">
            <a
              href="/"
              className="border border-transparent hover:border-black hover:shadow-xl px-6 py-2 transition-all duration-300"
            >
              Join Canvas
            </a>
            <a
              href="/"
              className="bg-black border border-black text-white px-9 py-2 hover:shadow-xl transition-shadow duration-300"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

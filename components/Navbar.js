import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-[#141414] text-white flex items-center justify-between px-4 h16">
      <div class="logo font-bold text-2xl">GetMeaChai</div>
      <ul className="flex justify-between items-center gap-4">
        <li className="ml-4">
          <a href="/">Home</a>
        </li>
        <li className="ml-4">
          <a href="/about">About</a>
        </li>
        <li className="ml-4">
          <a href="/projects">Projects</a>
        </li>
        <li className="ml-4">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

//import React from "react";  'React' is declared but its value is never read. I remove React because our react version is higher than 17
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-evenly bg-[#9abcf3]">
      <div className=" text-base text-shadow  hover:text-[#5168be] active:text-[#09f7bc] active:text-shadow-white">
        <Link
          to="/"
          className="text-base text-white text-shadow hover:text-[#5168be] active:text-[#09f7bc] active:text-shadow-white"
        >
          Go Back to the Start{" "}
        </Link>
      </div>
    </nav>
  );
}

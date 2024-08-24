import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="font-thin text-2xl mx-10 w-22 ">
          وَمَا تَوۡفِيقِيٓ إِلَّا بِٱللَّهِۚ <br />
          <span className=" font-thin font w-10 text-sm">
            "And my success is only by Allah <b>(11:88)</b>"
          </span>
        </div>
      </div>

      <div className="m-8 flex items-center justify-center gap-4">
        <FaLinkedin size={24} />
        <FaGithub size={24} />
        <FaInstagram size={24} />
        <FaFacebookSquare size={24} />
      </div>
    </nav>
  );
};

export default Navbar;

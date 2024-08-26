"use client";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 md:px-10">
      <div className="flex items-center">
        <div className="text-2xl font-thin">
          وَمَا تَوۡفِيقِيٓ إِلَّا بِٱللَّهِۚ <br />
          <span className="text-sm font-thin">
            &quot; And my success is only by Allah <b>(11:88)</b> &quot;
          </span>
        </div>
      </div>

      {/* Icons in a row on larger screens */}
      <div className="hidden lg:flex md:flex  items-center gap-4">
        <a href="#">
          <FaLinkedin
            size={24}
            className="text-purple-800 cursor-pointer hover:text-purple-600 transition-colors duration-300 ease-in-out"
          />
        </a>
        <a href="https://github.com/ChaudhryBassamTanvir">
          <FaGithub
            size={24}
            className="text-purple-800 cursor-pointer hover:text-purple-600 transition-colors duration-300 ease-in-out"
          />
        </a>
        <a href="https://www.instagram.com/chbassamtanvir/">
          {" "}
          <FaInstagram
            size={24}
            className="text-purple-800 cursor-pointer hover:text-purple-600 transition-colors duration-300 ease-in-out"
          />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <SiGmail
            size={24}
            className="text-purple-800 cursor-pointer hover:text-purple-600 transition-colors duration-300 ease-in-out"
          />
        </a>
      </div>

      {/* Hamburger icon only for small screens */}
      <div className="md:hidden flex items-center">
        <FaBars size={24} onClick={toggleMenu} className="cursor-pointer" />
      </div>

      {/* Main menu with conditional rendering and transition */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-start bg-white py-6 px-4 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:flex md:flex-row md:translate-x-0 md:w-auto`}
        >
          {/* Close button for small screens */}
          <div className="w-full flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">
                CH. Bassam Tanvir
              </span>
              <span className="ml-2 text-purple-800">Connection Links</span>
            </h2>
            <FaTimes
              size={24}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>

          {/* Navbar links */}
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center">
            <a
              href="#"
              className="flex items-center text-gray-700 text-left w-full md:w-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <FaLinkedin
                size={24}
                className="mr-2 text-purple-800 transition-colors duration-300 ease-in-out hover:text-purple-600"
              />
              <span className="text-sm md:hidden transition-colors duration-300 ease-in-out hover:text-purple-600">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/ChaudhryBassamTanvir"
              className="flex items-center text-gray-700 text-left w-full md:w-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <FaGithub
                size={24}
                className="mr-2 text-purple-800 transition-colors duration-300 ease-in-out hover:text-purple-600"
              />
              <span className="text-sm md:hidden transition-colors duration-300 ease-in-out hover:text-purple-600">
                GitHub
              </span>
            </a>
            <a
              href="https://www.instagram.com/chbassamtanvir/"
              className="flex items-center text-gray-700 text-left w-full md:w-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <FaInstagram
                size={24}
                className="mr-2 text-purple-800 transition-colors duration-300 ease-in-out hover:text-purple-600"
              />
              <span className="text-sm md:hidden transition-colors duration-300 ease-in-out hover:text-purple-600">
                Instagram
              </span>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              className="flex items-center text-gray-700 text-left w-full md:w-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <SiGmail
                size={24}
                className="mr-2 text-purple-800 transition-colors duration-300 ease-in-out hover:text-purple-600"
              />
              <span className="text-sm md:hidden transition-colors duration-300 ease-in-out hover:text-purple-600">
                Facebook
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

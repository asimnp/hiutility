import { useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon, HiBars3 } from "react-icons/hi2";
import { Link, NavLink } from "react-router";

import { useLocalPersistedState } from "../hooks/useLocalPersistedState";
import { useState } from "react";

export default function Navbar() {
  const [lightMode, setLightMode] = useLocalPersistedState("MODE", "on");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (lightMode === "on") {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }
  }, [lightMode]);

  return (
    <header className="container mx-auto mb-3 px-3 py-4">
      <nav className="relative flex items-center justify-between">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-10" />
        </Link>

        <div className="flex items-center justify-center gap-5 text-gray-600 dark:text-gray-300">
          <div className="hidden items-center gap-7 sm:flex">
            <NavLink
              to="tools"
              className={({ isActive }) =>
                `font-medium hover:text-red-600 ${
                  isActive ? "text-red-600" : ""
                }`
              }
            >
              Tools
            </NavLink>
            <Link to="/#about" className="font-medium hover:text-red-600">
              About
            </Link>
            <Link to="/#contact" className="font-medium hover:text-red-600">
              Contact
            </Link>
          </div>

          {lightMode === "on" ? (
            <HiOutlineMoon
              onClick={() => setLightMode("off")}
              size={40}
              className="mb-1 cursor-pointer p-2 hover:rounded-full hover:bg-red-600 hover:text-white"
            />
          ) : (
            <HiOutlineSun
              onClick={() => setLightMode("on")}
              size={40}
              className="mb-1 cursor-pointer p-2 hover:rounded-full hover:bg-red-600 hover:text-white"
            />
          )}

          <HiBars3
            size={42}
            onClick={() => setShowMenu((prev) => !prev)}
            className="mb-1 cursor-pointer p-2 hover:rounded-full hover:bg-red-600 hover:text-white sm:hidden"
          />
        </div>

        {showMenu && (
          <div className="absolute top-18 z-10 flex h-50 w-full flex-col justify-center gap-5 rounded-md border border-gray-200 bg-gray-100 px-6 py-2 text-lg sm:hidden dark:border-gray-800 dark:bg-gray-700 dark:text-white">
            <NavLink
              to="tools"
              className={({ isActive }) =>
                `font-medium hover:text-red-600 ${isActive ? "text-red-600" : ""}`
              }
              onClick={() => setShowMenu(false)}
            >
              Tools
            </NavLink>
            <Link
              to="/#about"
              className="font-medium hover:text-red-600"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
            <Link
              to="/#contact"
              className="font-medium hover:text-red-600"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      <hr className="mt-3 text-gray-100 dark:text-gray-800" />
    </header>
  );
}

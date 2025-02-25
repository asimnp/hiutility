import { useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { Link, NavLink } from "react-router";

import { useLocalPersistedState } from "../hooks/useLocalPersistedState";

export default function Navbar() {
  const [lightMode, setLightMode] = useLocalPersistedState("MODE", "on");

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (lightMode === "on") {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }
  }, [lightMode]);

  return (
    <header className="container mx-auto my-3">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-10" />
        </Link>

        <div className="flex justify-center items-center gap-7 text-gray-600 dark:text-gray-300">
          <NavLink
            to="tools"
            className={({ isActive }) =>
              `font-medium hover:text-red-600 ${isActive ? "text-red-600" : ""}`
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
          {lightMode === "on" ? (
            <HiOutlineMoon
              onClick={() => setLightMode("off")}
              size={40}
              className="mb-1 p-2 hover:bg-red-600 hover:text-white hover:rounded-full cursor-pointer"
            />
          ) : (
            <HiOutlineSun
              onClick={() => setLightMode("on")}
              size={40}
              className="mb-1 p-2 hover:bg-red-600 hover:text-white hover:rounded-full cursor-pointer"
            />
          )}
        </div>
      </nav>

      <hr className="text-gray-100 mt-3 dark:text-gray-800" />
    </header>
  );
}

import { LuMoon } from "react-icons/lu";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="container mx-auto my-3">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-10" />
        </Link>

        <div className="flex justify-center items-center gap-7 text-gray-600">
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
          <LuMoon
            size={40}
            className="mb-1 p-2 hover:bg-red-600 hover:text-white hover:rounded-full cursor-pointer"
          />
        </div>
      </nav>

      <hr className="text-gray-100 mt-3" />
    </header>
  );
}

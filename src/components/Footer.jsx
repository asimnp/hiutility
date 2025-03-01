import { Link, NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-gray-800 bg-black">
      <div className="sm:container mx-5 grid grid-cols-1 gap-12 py-10 sm:mx-auto sm:grid-cols-3">
        <div>
          <img src="/logo.svg" alt="Logo" className="mb-5 h-10" />
          <p className="mb-5 text-white">
            Making everyday tasks simpler and faster with powerful utility
            tools.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-2 font-medium text-white">Quick links</div>
          <NavLink
            to="tools"
            className={({ isActive }) =>
              `hover:text-red-600 ${
                isActive ? "text-red-600" : "text-gray-500"
              }`
            }
          >
            Tools
          </NavLink>
          <Link to="/#about" className="text-gray-500 hover:text-red-600">
            About
          </Link>
          <Link to="/#contact" className="text-gray-500 hover:text-red-600">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-2 font-medium text-white">Legal</div>
          <a href="#" className="text-gray-500 hover:text-red-600">
            Privacy policy
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            Terms of service
          </a>
        </div>
      </div>
      <p className="py-3 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Hiutility. All rights reserved.
      </p>
    </footer>
  );
}

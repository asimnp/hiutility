import { Link, NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-auto bg-black border-t-2 border-gray-800">
      <div className="grid grid-cols-3 gap-12 container mx-auto py-10">
        <div>
          <img src="/logo.svg" alt="Logo" className="h-10 mb-5" />
          <p className="text-white mb-5">
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

        <div className="flex flex-col gap-3 ">
          <div className="mb-2 font-medium text-white">Legal</div>
          <a href="#" className="text-gray-500 hover:text-red-600">
            Privacy policy
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            Terms of service
          </a>
        </div>
      </div>
      <p className="text-white text-center text-sm py-3">
        &copy; 2025 Hiutility. All rights reserved.
      </p>
    </footer>
  );
}

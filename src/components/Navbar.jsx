import { LuMoon } from "react-icons/lu";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <img src="/logo.svg" alt="logo" className="h-10" />
      <div className="flex justify-center items-center gap-7 text-gray-600">
        <a href="#" className="font-medium hover:text-red-600">
          Tools
        </a>
        <a href="#" className="font-medium hover:text-red-600">
          About
        </a>
        <a href="#" className="font-medium hover:text-red-600">
          Contact
        </a>
        <LuMoon
          size={40}
          className="mb-1 p-2 hover:bg-red-600 hover:text-white hover:rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
}

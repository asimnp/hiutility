import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src="/404.svg" alt="404 page not found" className="w-xl" />
      <Link
        to="/"
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
      >
        Go Home
      </Link>
    </div>
  );
}

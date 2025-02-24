import { Link, useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-3">
      <Link>
        <img src="/logo.svg" alt="Hiutility logo" className="h-10" />
      </Link>

      <div className="min-h-screen flex flex-col justify-center items-center">
        <img src="/404.svg" alt="404 page not found" className="w-xl" />

        <button
          onClick={() => navigate(-1)}
          className="border-2 border-gray-800 rounded-md px-6 py-2 hover:bg-gray-800 hover:text-white cursor-pointer"
        >
          Go back
        </button>
      </div>
    </div>
  );
}

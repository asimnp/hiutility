import { Link } from "react-router";

export default function ToolCard({ tool, url = "" }) {
  return (
    <div className="shadow-md dark:shadow-gray-400 dark:hover:shadow-red-500 rounded-md px-8 py-4">
      <div className="mb-1">
        <Link
          to={`${url}${tool.path}`}
          className="font-semibold text-lg hover:text-red-600 hover:underline dark:text-gray-300"
        >
          {tool.name}
        </Link>
      </div>
      <p className="text-gray-800 dark:text-gray-400">{tool.description}</p>
    </div>
  );
}

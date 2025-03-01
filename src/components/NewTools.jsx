import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router";

import ToolCard from "./ToolCard";
import { useTools } from "../context/tools";

export default function NewTools() {
  const { tools } = useTools();

  return (
    <div className="mx-5 mt-32 max-w-3xl sm:mx-auto">
      <div className="mb-6 flex items-center justify-between dark:text-gray-300">
        <div className="text-2xl font-medium">New Tools</div>
        <Link to="tools" className="hover:text-red-600">
          Show all tools <LuMoveRight className="inline pl-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
        {[...tools]
          .reverse()
          .slice(0, 3)
          .map((tool) => (
            <ToolCard key={tool.path} tool={tool} url={"tools/"} />
          ))}
      </div>
    </div>
  );
}

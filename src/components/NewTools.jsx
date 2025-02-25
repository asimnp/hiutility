import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router";

import ToolCard from "./ToolCard";
import { useTools } from "../context/tools";

export default function NewTools() {
  const { tools } = useTools();

  return (
    <div className="max-w-3xl mx-auto mt-32">
      <div className="flex justify-between items-center mb-6 dark:text-gray-300">
        <div className="text-2xl font-medium">New Tools</div>
        <Link to="tools" className="hover:text-red-600">
          Show all tools <LuMoveRight className="inline pl-1" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-7">
        {[...tools]
          .reverse()
          .slice(0, 3)
          .map((tool) => (
            <ToolCard key={tool.path} tool={tool} />
          ))}
      </div>
    </div>
  );
}

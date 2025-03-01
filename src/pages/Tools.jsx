import { useState, useMemo } from "react";

import SearchBar from "../components/SearchBar";
import ToolCard from "../components/ToolCard";
import { useTools } from "../context/tools";

export default function Tools() {
  const { tools } = useTools();
  const [search, setSearch] = useState("");

  let sortedTools = tools.toSorted((a, b) => a.name.localeCompare(b.name));

  const filteredTools = useMemo(() => {
    return sortedTools.filter(
      (todo) =>
        search === "" || todo.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedTools]);

  return (
    <div className="mx-5 sm:container sm:mx-auto">
      <div className="mt-32 flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl font-bold dark:text-gray-300">
          Explore <span className="text-red-600">utility</span> tools
        </h1>
        <SearchBar value={search} setValue={setSearch} />
      </div>

      <div className="mt-18 mb-52 grid grid-cols-1 gap-7 sm:grid-cols-3">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.path} tool={tool} />
        ))}
      </div>
    </div>
  );
}

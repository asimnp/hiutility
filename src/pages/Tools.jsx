import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import ToolCard from "../components/ToolCard";
import { useTools } from "../context/tools";
import { useMemo } from "react";

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
    <div className="container mx-auto">
      <div className="flex flex-col gap-5 items-center justify-center mt-32">
        <h1 className="font-bold text-2xl">
          Explore <span className="text-red-600">utility</span> tools
        </h1>
        <SearchBar value={search} setValue={setSearch} />
      </div>

      <div className="grid grid-cols-3 gap-7 mt-18 mb-52">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.path} tool={tool} />
        ))}
      </div>
    </div>
  );
}

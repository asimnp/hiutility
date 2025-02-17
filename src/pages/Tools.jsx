import SearchBar from "../components/SearchBar";
import ToolCard from "../components/ToolCard";
import { useTools } from "../context/tools";

export default function Tools() {
  const { tools } = useTools();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-5 items-center justify-center mt-32">
        <h1 className="font-bold text-2xl">
          Explore <span className="text-red-600">utility</span> tools
        </h1>
        <SearchBar />
      </div>

      <div className="grid grid-cols-3 gap-7 mt-18 mb-52">
        {tools.map((tool) => (
          <ToolCard key={tool.path} tool={tool} />
        ))}
      </div>
    </div>
  );
}

import { LuMoveRight } from "react-icons/lu";
import ToolCard from "./ToolCard";

export default function NewTools() {
  return (
    <div className="max-w-3xl mx-auto mt-32">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-medium">New Tools</div>
        <a href="#" className="hover:text-red-600">
          Show all tools <LuMoveRight className="inline pl-1" />
        </a>
      </div>

      <div className="grid grid-cols-3 gap-7">
        <ToolCard
          title="Password Generator"
          description="Create, strong, secure passwords"
        />

        <ToolCard
          title="Currency Converter"
          description="Convert between currencies"
        />

        <ToolCard
          title="Unit Converter"
          description="Convert between different units"
        />
      </div>
    </div>
  );
}

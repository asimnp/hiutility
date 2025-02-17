export default function ToolCard({ tool }) {
  return (
    <div className="shadow-md rounded-md px-8 py-4">
      <div className="mb-1">
        <a
          href={`tools/${tool.path}`}
          className="font-semibold text-lg hover:text-red-600 hover:underline"
        >
          {tool.name}
        </a>
      </div>
      <p className="text-gray-800">{tool.description}</p>
    </div>
  );
}

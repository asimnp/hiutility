export default function ToolCard({ title, description }) {
  return (
    <div className="shadow-md rounded-md px-8 py-4">
      <div className="mb-1">
        <a href="#" className="font-semibold text-lg hover:text-red-600 hover:underline">{title}</a>
      </div>
      <p className="text-gray-800">{description}</p>
    </div>
  );
}

export default function ToolHeader({ name, description }) {
  return (
    <section className="mt-10 mb-5">
      <h1 className="text-3xl font-medium mb-2">{name}</h1>
      <p className="text-gray-700">{description}</p>
    </section>
  );
}

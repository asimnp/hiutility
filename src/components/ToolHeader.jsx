export default function ToolHeader({ name, description }) {
  return (
    <section className="mt-10 mb-5">
      <h1 className="text-3xl font-medium mb-2 dark:text-gray-300">{name}</h1>
      <p className="text-gray-700 dark:text-gray-400">{description}</p>
    </section>
  );
}

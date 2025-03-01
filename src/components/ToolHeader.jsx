export default function ToolHeader({ name, description }) {
  return (
    <section className="mt-10 mb-5">
      <h1 className="mb-2 text-3xl font-medium dark:text-gray-300">{name}</h1>
      <p className="hidden text-gray-700 sm:block dark:text-gray-400">
        {description}
      </p>
    </section>
  );
}

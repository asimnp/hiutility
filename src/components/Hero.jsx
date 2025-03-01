export default function Hero() {
  return (
    <main className="mx-5 mt-25 flex flex-col items-center justify-center">
      <div className="sm:rounded-lg sm:border-2 sm:border-red-600 sm:p-20 sm:shadow-lg sm:dark:shadow-red-500">
        <div className="text-4xl font-bold text-red-600 sm:text-6xl">
          Your Ultimate{" "}
          <span className="text-black dark:text-gray-500">Utility Toolkit</span>
        </div>
        <p className="my-5 text-xl text-gray-800 dark:text-gray-300">
          Discover a comprehensive collection of utility tools designed to
          simplify your daily tasks.
        </p>
      </div>
    </main>
  );
}

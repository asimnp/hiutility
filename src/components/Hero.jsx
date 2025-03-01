export default function Hero() {
  return (
    <main className="mt-25 flex flex-col items-center justify-center">
      <div className="rounded-lg border-2 border-red-600 p-20 shadow-lg dark:shadow-red-500">
        <div className="text-6xl font-bold text-red-600">
          Your Ultimate <span className="text-black">Utility Toolkit</span>
        </div>
        <p className="my-5 text-xl text-gray-800 dark:text-gray-300">
          Discover a comprehensive collection of utility tools designed to
          simplify your daily tasks.
        </p>
      </div>
    </main>
  );
}

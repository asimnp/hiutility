export default function Hero() {
  return (
    <main className="flex flex-col justify-center items-center mt-25">
      <div className="border-2 border-red-600 rounded-lg shadow-lg dark:shadow-red-500 p-20">
        <div className="text-6xl font-bold text-red-600">
          Your Ultimate <span className="text-black">Utility Toolkit</span>
        </div>
        <p className="text-xl my-5 text-gray-800 dark:text-gray-300">
          Discover a comprehensive collection of utility tools designed to
          simplify your daily tasks.
        </p>
      </div>
    </main>
  );
}

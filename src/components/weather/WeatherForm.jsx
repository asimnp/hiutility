import { HiOutlineMapPin } from "react-icons/hi2";

export default function WeatherForm({ city, setCity, onSearch }) {
  return (
    <form
      className="relative my-6 flex w-full gap-3 sm:w-6xl"
      onSubmit={onSearch}
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter your city..."
        className="w-full rounded-md border border-gray-200 p-3 pl-12 dark:text-gray-300"
      />

      <HiOutlineMapPin
        className="absolute top-2 left-3 text-gray-300"
        size={30}
      />

      <button
        type="submit"
        className="hover:gray-950 cursor-pointer rounded-md bg-gray-800 px-6 py-2 text-white"
      >
        Search
      </button>
    </form>
  );
}

import { HiOutlineMapPin } from "react-icons/hi2";

export default function WeatherForm({ city, setCity, onSearch }) {
  return (
    <form className="w-6xl flex gap-3 my-6 relative" onSubmit={onSearch}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter your city..."
        className="p-3 border rounded-md border-gray-200 w-full dark:text-gray-300 pl-12"
      />

      <HiOutlineMapPin
        className="absolute text-gray-300 left-3 top-2"
        size={30}
      />

      <button
        type="submit"
        className="bg-gray-800 text-white px-6 py-2 rounded-md cursor-pointer hover:gray-950"
      >
        Search
      </button>
    </form>
  );
}

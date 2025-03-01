import { LuSearch } from "react-icons/lu";

export default function SearchBar({ value, setValue }) {
  return (
    <form className="flex items-center justify-center">
      <label className="relative">
        <LuSearch size={25} className="absolute top-3 left-2.5 text-gray-200" />

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for utilities..."
          className="h-12 w-full rounded-md border-2 border-gray-100 pl-14 outline-none focus:border-red-600 dark:text-gray-300 dark:placeholder:text-gray-300"
        />
      </label>
    </form>
  );
}

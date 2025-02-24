import { LuSearch } from "react-icons/lu";

export default function SearchBar({ value, setValue }) {
  return (
    <form className="flex justify-center items-center ">
      <label htmlFor="" className="relative">
        <LuSearch
          size={25}
          className="text-gray-200 absolute top-3 left-2.5 "
        />

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for utilities..."
          className="border-2 border-gray-100 h-12 rounded-md w-xl pl-14 focus:outline-red-600"
        />
      </label>
    </form>
  );
}

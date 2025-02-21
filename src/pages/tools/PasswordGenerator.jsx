import { useState } from "react";
import {
  HiOutlineDocumentDuplicate,
  HiOutlineArrowPath,
} from "react-icons/hi2";

import ToolHeader from "../../components/ToolHeader";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("ask3932323");
  const [length, setLength] = useState(8);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  return (
    <div className="container mx-auto mt-3">
      <ToolHeader
        name="Password Generator"
        description="Generates strong, random passwords with customizable options for enhanced security."
      />

      <div className="flex my-5 max-w-4xl gap-1 ">
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border rounded-md border-gray-200 w-full"
        />
        <button className="bg-gray-800 text-white px-3 py-2 text-xl rounded-md">
          <HiOutlineDocumentDuplicate />
        </button>
        <button className="bg-gray-800 text-white px-3 py-2 text-xl rounded-md">
          <HiOutlineArrowPath />
        </button>
      </div>

      <div className="bg-gray-50 py-5 px-8  rounded-md max-w-4xl mb-10">
        <div className="text-xl font-medium border-b-2 border-gray-100 py-2">
          Customize your password
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div className="flex flex-col">
            <input
              type="number"
              value={length}
              min={8}
              max={90}
              onChange={(e) => setLength(e.target.value)}
              className="shadow-sm p-5 w-20 my-5"
            />
            <input
              type="range"
              min={8}
              max={90}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex flex-col py-5 text-lg gap-4 text-gray-600">
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="upper-case"
                value={upperCase}
                onClick={(e) => setUpperCase(e.target.value)}
                className="w-5 h-5 cursor-pointer"
              />
              <label htmlFor="upper-case" className="cursor-pointer">
                Uppercase
              </label>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="lower-case"
                value={lowerCase}
                onClick={(e) => setLowerCase(e.target.value)}
                className="w-5 h-5 cursor-pointer"
              />
              <label htmlFor="lower-case" className="cursor-pointer">
                Lowercase
              </label>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="numbers"
                value={numbers}
                onClick={(e) => setNumbers(e.target.value)}
                className="w-5 h-5 cursor-pointer"
              />
              <label htmlFor="numbers" className="cursor-pointer">
                Numbers
              </label>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="symbols"
                value={symbols}
                onClick={(e) => setSymbols(e.target.value)}
                className="w-5 h-5 cursor-pointer"
              />
              <label htmlFor="symbols" className="cursor-pointer">
                Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

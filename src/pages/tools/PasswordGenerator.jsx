import { useState, useEffect, useCallback, useRef } from "react";
import {
  HiOutlineDocumentDuplicate,
  HiOutlineArrowPath,
} from "react-icons/hi2";

import ToolHeader from "../../components/ToolHeader";

export default function PasswordGenerator() {
  const passwordInputRef = useRef(null);
  const [password, setPassword] = useState("ask3932323");
  const [length, setLength] = useState(8);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbersChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const generatePassword = useCallback(() => {
    let newPasswordChars = "";
    let newPassword = "";

    if (upperCase) newPasswordChars += upperCaseChars;
    if (lowerCase) newPasswordChars += lowerCaseChars;
    if (numbers) newPasswordChars += numbersChars;
    if (symbols) newPasswordChars += symbolsChars;

    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * newPasswordChars.length);
      newPassword += newPasswordChars.charAt(charIndex);
    }

    setPassword(newPassword);
  }, [upperCase, lowerCase, numbers, symbols, length]);

  useEffect(() => {
    generatePassword();
  }, [upperCase, lowerCase, numbers, symbols, length, generatePassword]);

  const handlePasswordCopy = () => {
    passwordInputRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  const handleChangeUpperCase = () => {
    if (lowerCase || numbers || symbols) {
      setUpperCase(!upperCase);
    }
  };

  const handleChangeLowerCase = () => {
    if (upperCase || numbers || symbols) {
      setLowerCase(!lowerCase);
    }
  };

  const handleChangeNumbers = () => {
    if (lowerCase || upperCase || symbols) {
      setNumbers(!numbers);
    }
  };

  const handleChangeSymbols = () => {
    if (lowerCase || numbers || upperCase) {
      setSymbols(!symbols);
    }
  };

  return (
    <div className="container mx-auto mt-3">
      <ToolHeader
        name="Password Generator"
        description="Generates strong, random passwords with customizable options for enhanced security."
      />

      <div className="flex my-5 max-w-4xl gap-1">
        <input
          type="text"
          ref={passwordInputRef}
          readOnly
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border rounded-md border-gray-200 w-full outline-none cursor-not-allowed bg-gray-50"
        />
        <button
          onClick={handlePasswordCopy}
          className="bg-gray-800 text-white px-3 py-2 text-xl rounded-md cursor-pointer hover:bg-gray-950"
          title="Copy"
        >
          <HiOutlineDocumentDuplicate />
        </button>
        <button
          onClick={generatePassword}
          className="bg-gray-800 text-white px-3 py-2 text-xl rounded-md cursor-pointer hover:bg-gray-950"
          title="Generate"
        >
          <HiOutlineArrowPath />
        </button>
      </div>

      <div className="bg-gray-50 py-5 px-8  rounded-md max-w-4xl mb-10 border border-gray-200">
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
              className="accent-red-600"
            />
          </div>

          <div className="flex flex-col py-5 text-lg gap-4 text-gray-600">
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="upper-case"
                checked={upperCase}
                onChange={handleChangeUpperCase}
                className="w-5 h-5 cursor-pointer accent-red-600"
              />
              <label htmlFor="upper-case" className="cursor-pointer">
                Uppercase
              </label>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="lower-case"
                checked={lowerCase}
                onChange={handleChangeLowerCase}
                className="w-5 h-5 cursor-pointer accent-red-600"
              />
              <label htmlFor="lower-case" className="cursor-pointer">
                Lowercase
              </label>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="numbers"
                checked={numbers}
                onChange={handleChangeNumbers}
                className="w-5 h-5 cursor-pointer accent-red-600"
              />
              <label htmlFor="numbers" className="cursor-pointer">
                Numbers
              </label>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="symbols"
                checked={symbols}
                onChange={handleChangeSymbols}
                className="w-5 h-5 cursor-pointer accent-red-600"
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

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
    <div className="mx-5 mt-3 sm:container sm:mx-auto">
      <ToolHeader
        name="Password Generator"
        description="Generates strong, random passwords with customizable options for enhanced security."
      />

      <div className="my-5 flex max-w-4xl gap-2">
        <input
          type="text"
          ref={passwordInputRef}
          readOnly
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full cursor-not-allowed rounded-md border border-gray-200 bg-gray-50 p-3 outline-none dark:bg-gray-900 dark:text-gray-300"
        />
        <button
          onClick={handlePasswordCopy}
          className="cursor-pointer rounded-md bg-gray-800 px-3 py-2 text-xl text-white hover:bg-gray-950 dark:hover:bg-gray-700"
          title="Copy"
        >
          <HiOutlineDocumentDuplicate />
        </button>
        <button
          onClick={generatePassword}
          className="cursor-pointer rounded-md bg-gray-800 px-3 py-2 text-xl text-white hover:bg-gray-950 dark:hover:bg-gray-700"
          title="Generate"
        >
          <HiOutlineArrowPath />
        </button>
      </div>

      <div className="mb-10 max-w-4xl rounded-md border border-gray-200 bg-gray-50 px-8 py-5 dark:bg-gray-900 dark:text-gray-300">
        <div className="border-b-2 border-gray-100 py-2 text-xl font-medium">
          Customize your password
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16">
          <div className="flex flex-col">
            <input
              type="number"
              value={length}
              min={8}
              max={90}
              onChange={(e) => setLength(e.target.value)}
              className="my-5 w-20 rounded-md p-5 shadow-sm dark:border"
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

          <div className="flex flex-col gap-4 text-lg text-gray-500 sm:py-5">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="upper-case"
                checked={upperCase}
                onChange={handleChangeUpperCase}
                className="h-5 w-5 cursor-pointer accent-red-600"
              />
              <label htmlFor="upper-case" className="cursor-pointer">
                Uppercase
              </label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="lower-case"
                checked={lowerCase}
                onChange={handleChangeLowerCase}
                className="h-5 w-5 cursor-pointer accent-red-600"
              />
              <label htmlFor="lower-case" className="cursor-pointer">
                Lowercase
              </label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="numbers"
                checked={numbers}
                onChange={handleChangeNumbers}
                className="h-5 w-5 cursor-pointer accent-red-600"
              />
              <label htmlFor="numbers" className="cursor-pointer">
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="symbols"
                checked={symbols}
                onChange={handleChangeSymbols}
                className="h-5 w-5 cursor-pointer accent-red-600"
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

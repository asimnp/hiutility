import { useState } from "react";
import { HiArrowsRightLeft } from "react-icons/hi2";

import ToolHeader from "../../components/ToolHeader";
import InputCurrency from "../../components/currency-converter/InputCurrency";
import { useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("npr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);
  const [isConverted, setIsConverted] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json`
      );
      const data = await response.json();
      setCurrencyList(data);
    };

    fetchCurrencies();
  }, []);

  const handleCurrencyConvert = async () => {
    setIsConverted(false);

    const response = await fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`
    );
    const data = await response.json();
    const rateList = data[fromCurrency];
    const newAmount = (amount * rateList[toCurrency]).toFixed(2);

    setConvertedAmount(newAmount);
    setIsConverted(true);
  };

  const handleCurrencySwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setIsConverted(false);
  };

  return (
    <div className="container mx-auto mt-3">
      <ToolHeader
        name="Currency Converter"
        description="A simple and efficient currency converter that provides real-time exchange rates, allowing you to convert between multiple currencies instantly. "
      />

      <div className="border border-gray-200 p-5 rounded-md mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <InputCurrency
            label="From"
            currencyList={currencyList}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
          />

          <button
            onClick={handleCurrencySwap}
            className="flex justify-center text-3xl hover:text-4xl cursor-pointer hover:text-red-600"
          >
            <HiArrowsRightLeft />
          </button>

          <InputCurrency
            label="To"
            currencyList={currencyList}
            currency={toCurrency}
            setCurrency={setToCurrency}
          />
        </div>

        <Input
          type="number"
          placeholder="Enter amount"
          state={amount}
          setState={setAmount}
        />

        <Button type="button" onCurrencyConvert={handleCurrencyConvert}>
          Convert
        </Button>

        {isConverted && (
          <div className="my-5 text-xl ">
            Converted amount:{" "}
            <strong>
              {amount} {fromCurrency.toUpperCase()} is {convertedAmount}{" "}
              {toCurrency.toUpperCase()}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
}

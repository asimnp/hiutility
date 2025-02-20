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

  useEffect(() => {
    const fetchFromCurrencies = async () => {
      const response = await fetch(
        `https://latest.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`
      );
      const data = await response.json();
      const rateList = data[fromCurrency];
      const newAmount = (amount * rateList[toCurrency]).toFixed(2);
      setConvertedAmount(newAmount);
    };

    fetchFromCurrencies();
  }, [fromCurrency, toCurrency, amount]);

  const handleCurrencyConvert = () => {};

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

          <button className="flex justify-center text-3xl hover:text-4xl cursor-pointer hover:text-red-600">
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
          amount={amount}
          setAmount={setAmount}
        />

        <Button type="button" onCurrencyConvert={handleCurrencyConvert}>
          Convert
        </Button>

        <div className="my-5 text-xl ">
          Converted amount:{" "}
          <strong>
            {amount} {fromCurrency.toUpperCase()} is {convertedAmount}{" "}
            {toCurrency.toUpperCase()}
          </strong>
        </div>
      </div>
    </div>
  );
}

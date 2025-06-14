export default function InputCurrency({
  label,
  currencyList,
  currency,
  setCurrency,
}) {
  return (
    <div className="flex min-w-60 flex-col gap-1 dark:text-gray-300">
      <label htmlFor={label} className="text-lg font-medium">
        {label}
      </label>
      <select
        id={label}
        value={currency}
        min={1}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full rounded-md border border-gray-200 p-3"
      >
        {Object.keys(currencyList)?.map((currency) => (
          <option
            key={currency}
            value={currency}
            className="dark:bg-black dark:text-gray-300"
          >
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

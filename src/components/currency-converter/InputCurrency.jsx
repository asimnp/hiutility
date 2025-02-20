export default function InputCurrency({
  label,
  currencyList,
  currency,
  setCurrency,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-lg font-medium">{label}</label>
      <select
        id={label}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border border-gray-200 rounded-md p-3"
      >
        {Object.keys(currencyList)?.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

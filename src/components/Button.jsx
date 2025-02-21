export default function Button({
  children,
  onCurrencyConvert,
  type = "submit",
}) {
  return (
    <button
      type={type}
      onClick={onCurrencyConvert}
      className="bg-red-600 px-8 py-2 rounded-md text-white text-lg font-medium hover:bg-red-700 cursor-pointer w-full outline-none focus:ring-2 focus:ring-red-700"
    >
      {children}
    </button>
  );
}

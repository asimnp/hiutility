export default function Input({
  type = "text",
  placeholder,
  amount,
  setAmount,
}) {
  return (
    <input
      type={type}
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder={placeholder}
      className="p-3 border rounded-md my-5 border-gray-200 w-full"
    />
  );
}

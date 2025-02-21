export default function Input({ type = "text", placeholder, state, setState }) {
  return (
    <input
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      className="p-3 border rounded-md my-5 border-gray-200 w-full"
    />
  );
}

export default function Button({ children }) {
  return (
    <button className="bg-red-600 px-8 py-2 rounded-md text-white text-lg font-medium hover:bg-red-700 cursor-pointer w-full">
      {children}
    </button>
  );
}

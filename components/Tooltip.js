export default function Tooltip({ text, children }) {
  return (
    <span className="relative group">
      {children}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 w-max z-50">
        {text}
      </span>
    </span>
  );
}

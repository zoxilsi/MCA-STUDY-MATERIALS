function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle-btn p-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.9)] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.9)] transition-all duration-200 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.1)] dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,0.2)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <div className="icon-sun text-lg text-yellow-500 dark:text-yellow-400"></div>
      ) : (
        <div className="icon-moon text-lg text-gray-700 dark:text-gray-300"></div>
      )}
    </button>
  );
}

function Header({
  searchTerm,
  onSearchChange,
  selectedSemester,
  onSemesterChange,
  onQuestionPapersClick,
  showAdvancedFilters,
  onToggleAdvancedFilters,
}) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  try {
    return (
      <header
        className="border-b-3 p-4 transition-colors duration-200 bg-[#f0f0f0] dark:bg-gray-900 border-black dark:border-gray-600 text-black dark:text-white"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-28 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-graduation-cap text-2xl text-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-black dark:text-white">
                  MCA Notes | KTU
                </h1>
                <p className="text-base mt-1 text-gray-600 dark:text-gray-300">
                  RAJIV GANDHI INSTITUTE OF TECHNOLOGY, KOTTAYAM
                </p>
              </div>
            </div>

            {/* Search + Action Buttons */}
            <div className="w-full flex flex-wrap items-center gap-3 px-2 sm:px-4">
              {/* Responsive Search Box */}
              <div className="relative flex-grow max-w-[100%] sm:max-w-[450px] lg:max-w-[400px]">
                <input
                  type="text"
                  placeholder="Search all courses..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm sm:text-base lg:text-sm rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.9)] focus:shadow-[3px_3px_0px_rgba(0,0,0,0.9)] transition-all bg-white dark:bg-gray-800 dark:text-white"
                />

                {/* Icon / Clear button */}
                {searchTerm ? (
                  <button
                    onClick={() => onSearchChange("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 text-lg"
                  >
                    ×
                  </button>
                ) : (
                  <div className="icon-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base lg:text-sm"></div>
                )}
              </div>

              {/* Buttons Container */}
              <div className="flex flex-1 gap-3 max-[1152px]:basis-full sm:max-w-[450px] lg:max-w-[400px]">
                {/* Advanced Search Toggle */}
                <button
                  onClick={onToggleAdvancedFilters}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-bold rounded-lg border-2 transition-all whitespace-nowrap ${
                    showAdvancedFilters
                      ? "bg-blue-500 text-white border-blue-700 dark:bg-blue-600 dark:border-blue-500 shadow-[2px_2px_0px_rgba(0,0,0,0.9)]"
                      : "bg-white dark:bg-gray-700 text-black dark:text-white border-black dark:border-gray-600 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.9)] shadow-[2px_2px_0px_rgba(0,0,0,0.9)]"
                  }`}
                >
                  <div className="icon-filter text-sm"></div>
                  Filters
                </button>

                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-bold rounded-lg border-2 transition-all whitespace-nowrap bg-gray-800 dark:bg-yellow-500 text-white dark:text-black border-gray-900 dark:border-yellow-600 hover:bg-gray-700 dark:hover:bg-yellow-400 shadow-[2px_2px_0px_rgba(0,0,0,0.9)] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.9)]"
                >
                  <div
                    className={`text-sm ${
                      isDarkMode ? "icon-sun" : "icon-moon"
                    }`}
                  ></div>
                  {isDarkMode ? "Light" : "Dark"}
                </button>

                {/* GitHub Star Button */}
                <a
                  href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-lg border-2 transition-all whitespace-nowrap bg-gray-900 dark:bg-gray-800 text-white border-black dark:border-gray-700 hover:bg-gray-700 dark:hover:bg-gray-700 shadow-[2px_2px_0px_rgba(0,0,0,0.9)] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.9)]"
                >
                  <div className="icon-github text-sm"></div>
                  <div className="icon-star text-sm"></div>
                  Star
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Semester I", "Semester II", "Semester III", "Semester IV"].map(
              (sem, index) => (
                <button
                  key={sem}
                  onClick={() => onSemesterChange(sem)}
                  className={`relative p-4 rounded-xl border-3 border-black font-black text-sm transition-all transform hover:scale-105 ${
                    selectedSemester === sem
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]"
                      : "bg-white dark:bg-gray-800 text-black dark:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs opacity-75">SEM</span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-xs font-black ${
                        selectedSemester === sem
                          ? "bg-white text-blue-500"
                          : "bg-gray-100 dark:bg-gray-700"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-base">{sem.split(" ")[1]}</div>
                    <div className="text-xs opacity-75 mt-1">
                      {curriculumData.getCoursesBySemester(sem).length} courses
                    </div>
                  </div>
                </button>
              )
            )}

            {/* Question Papers Tab */}
            <button
              onClick={onQuestionPapersClick}
              className="relative p-4 rounded-xl border-3 border-black font-black text-sm transition-all transform hover:scale-105 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs opacity-75">QP</span>
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-black bg-white text-red-500">
                  <div className="icon-file-text text-xs"></div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-base">Question Papers</div>
                <div className="text-xs opacity-75 mt-1">Previous Years</div>
              </div>
            </button>

            {/* RIT Internal Exam Question Papers Tab */}
            <button
              className="relative p-4 rounded-xl border-3 border-black font-black text-sm bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] cursor-not-allowed opacity-75"
              disabled
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs opacity-75">RIT</span>
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs font-black bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400">
                  <div className="icon-clock text-xs"></div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-base mb-1">
                  <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded font-extrabold border-2 border-gray-300 dark:border-gray-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
                    Internal Exam
                  </span>
                </div>
                <div className="text-xs opacity-75">
                  <span className="bg-red-500 text-white px-1 py-0.5 rounded font-bold text-xs border border-red-600">
                    Coming Soon
                  </span>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    RIT Kottayam
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error("Header component error:", error);
    return null;
  }
}

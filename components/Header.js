function Header({
  searchTerm,
  onSearchChange,
  selectedSemester,
  onSemesterChange,
  onQuestionPapersClick,
  currentTheme,
  onThemeToggle,
}) {
  try {
    return (
      <header
        className="border-b-3 border-theme-primary p-4 bg-theme-secondary"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)] flex items-center justify-center">
                <div className="icon-graduation-cap text-2xl text-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-theme-primary">
                  MCA Notes | KTU
                </h1>
                <p className="text-base text-theme-secondary mt-1">
                  RAJIV GANDHI INSTITUTE OF TECHNOLOGY, KOTTAYAM
                </p>
              </div>
            </div>

            <div className="w-full flex flex-nowrap items-center justify-end gap-3 px-2 sm:px-4">
              {/* Theme Toggle Button */}
              <button
                onClick={onThemeToggle}
                className="theme-toggle flex-shrink-0"
                title={currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {currentTheme === 'dark' ? (
                  <div className="icon-sun text-lg"></div>
                ) : (
                  <div className="icon-moon text-lg"></div>
                )}
              </button>

              {/* Responsive Search Box */}
              <div className="relative flex-grow max-w-[350px] sm:max-w-[450px] lg:max-w-[400px]">
                <input
                  type="text"
                  placeholder="Search all courses..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm sm:text-base lg:text-sm rounded-lg border-2 border-theme-primary shadow-[2px_2px_0px_var(--shadow-primary)] focus:shadow-[3px_3px_0px_var(--shadow-primary)] transition-all bg-theme-secondary text-theme-primary placeholder-theme-muted"
                />
                <div className="icon-search absolute right-3 top-1/2 transform -translate-y-1/2 text-theme-muted text-sm sm:text-base lg:text-sm"></div>
              </div>

              {/* Responsive Star Button */}
              <a
                href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 bg-gray-900 text-white text-sm sm:text-base lg:text-sm font-bold rounded-lg border-2 border-theme-primary shadow-[2px_2px_0px_var(--shadow-primary)] hover:shadow-[3px_3px_0px_var(--shadow-primary)] hover:bg-gray-700 transition-all whitespace-nowrap"
              >
                <div className="icon-github text-sm sm:text-base lg:text-sm"></div>
                <div className="icon-star text-sm sm:text-base lg:text-sm"></div>
                Star
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Semester I", "Semester II", "Semester III", "Semester IV"].map(
              (sem, index) => (
                <button
                  key={sem}
                  onClick={() => onSemesterChange(sem)}
                  className={`relative p-4 rounded-xl border-3 border-theme-primary font-black text-sm transition-all transform hover:scale-105 ${
                    selectedSemester === sem
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[4px_4px_0px_0px_var(--shadow-primary)]"
                      : "bg-theme-secondary text-theme-primary shadow-[3px_3px_0px_0px_var(--shadow-primary)] hover:shadow-[5px_5px_0px_0px_var(--shadow-primary)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs opacity-75">SEM</span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-theme-primary flex items-center justify-center text-xs font-black ${
                        selectedSemester === sem
                          ? "bg-white text-blue-500"
                          : "bg-theme-tertiary"
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
              className="relative p-4 rounded-xl border-3 border-theme-primary font-black text-sm transition-all transform hover:scale-105 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[4px_4px_0px_0px_var(--shadow-primary)] hover:shadow-[6px_6px_0px_0px_var(--shadow-primary)]"
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
              className="relative p-4 rounded-xl border-3 border-theme-secondary font-black bg-theme-tertiary text-theme-muted shadow-[3px_3px_0px_0px_var(--shadow-primary)] cursor-not-allowed opacity-75"
              disabled
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs opacity-75">RIT</span>
                <div className="w-6 h-6 rounded-full border-2 border-theme-secondary flex items-center justify-center text-xs font-black bg-theme-secondary text-theme-muted">
                  <div className="icon-clock text-xs"></div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-base mb-1">
                  <span className="bg-theme-secondary text-theme-muted px-2 py-1 rounded font-extrabold border-2 border-theme-secondary shadow-[2px_2px_0px_var(--shadow-secondary)]">
                    Internal Exam
                  </span>
                </div>
                <div className="text-xs opacity-75">
                  <span className="bg-red-500 text-white px-1 py-0.5 rounded font-bold text-xs border border-red-600">
                    Coming Soon
                  </span>
                  <div className="text-xs text-theme-muted mt-1">RIT Kottayam</div>
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

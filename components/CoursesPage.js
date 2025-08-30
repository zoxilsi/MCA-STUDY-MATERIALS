function CoursesPage() {
  const [selectedSemester, setSelectedSemester] = React.useState('Semester I');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCourse, setSelectedCourse] = React.useState(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);
  const [filters, setFilters] = React.useState({
    type: '',
    credits: '',
    hasNotes: ''
  });

  const { isDarkMode } = useTheme();
  const allCourses = curriculumData.getAllCourses();

  // Make semester change function globally available
  React.useEffect(() => {
    window.handleSemesterChange = setSelectedSemester;
  }, []);

  // Make handleCourseDetails globally available
  window.handleCourseDetails = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  // Function to check if course has notes available
  const hasNotes = (courseCode) => {
    const coursesWithNotes = [
      '20MCA102', // Database Management
      '20MCA103', // Digital Fundamentals
      '20MCA104', // Computer Networks
      '20MCA107', // Advanced Software Engineering
      '20MCA131', // Programming Lab
      '20MCA133', // Web Programming Lab
      '20MCA188'  // Artificial Intelligence
    ];
    return coursesWithNotes.includes(courseCode);
  };

  const filteredCourses = React.useMemo(() => {
    let courses;
    
    if (searchTerm) {
      // Search across all courses when user is searching
      courses = allCourses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // Show selected semester courses when not searching
      courses = curriculumData.getCoursesBySemester(selectedSemester);
    }
    
    // Apply advanced filters
    if (filters.type) {
      courses = courses.filter(course => course.type === filters.type);
    }
    
    if (filters.credits) {
      courses = courses.filter(course => course.credits.toString() === filters.credits);
    }
    
    if (filters.hasNotes) {
      if (filters.hasNotes === 'yes') {
        courses = courses.filter(course => hasNotes(course.code));
      } else if (filters.hasNotes === 'no') {
        courses = courses.filter(course => !hasNotes(course.code));
      }
    }
    
    return courses;
  }, [selectedSemester, searchTerm, allCourses, filters]);

  const categorizedCourses = React.useMemo(() => {
    const theory = filteredCourses.filter(course => course.type === 'Theory');
    const lab = filteredCourses.filter(course => course.type === 'Lab');
    const electiveI = filteredCourses.filter(course => course.type === 'Elective I');
    const electiveII = filteredCourses.filter(course => course.type === 'Elective II');
    const electiveIII = filteredCourses.filter(course => course.type === 'Elective III');
    const electiveIV = filteredCourses.filter(course => course.type === 'Elective IV');
    const project = filteredCourses.filter(course => course.type === 'Project');
    return { theory, lab, electiveI, electiveII, electiveIII, electiveIV, project };
  }, [filteredCourses]);

  if (selectedCourse) {
    return (
      <CourseDetailPage 
        course={selectedCourse} 
        onBack={handleBackToCourses}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-black dark:text-white mb-2">
            MCA Courses
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore comprehensive study materials for all MCA semesters
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Search Box */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.9)] focus:shadow-[3px_3px_0px_rgba(0,0,0,0.9)] transition-all bg-white dark:bg-gray-800 dark:text-white font-bold"
              />
              {searchTerm ? (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 text-lg"
                >
                  ×
                </button>
              ) : (
                <Icon name="search" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              )}
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className={`px-4 py-3 rounded-lg border-2 font-bold transition-all ${
                showAdvancedFilters
                  ? "bg-blue-500 text-white border-blue-700 shadow-[2px_2px_0px_rgba(0,0,0,0.9)]"
                  : "bg-white dark:bg-gray-800 text-black dark:text-white border-black dark:border-gray-600 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.9)] shadow-[2px_2px_0px_rgba(0,0,0,0.9)]"
              }`}
            >
              <Icon name="filter" className="mr-2" />
              Filters
            </button>
          </div>

          {/* Advanced Search Filters */}
          <AdvancedSearchFilters 
            filters={filters}
            onFiltersChange={setFilters}
            isVisible={showAdvancedFilters}
            onToggle={() => setShowAdvancedFilters(!showAdvancedFilters)}
          />
        </div>

        {/* Semester Tabs */}
        {!searchTerm && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Semester I", "Semester II", "Semester III", "Semester IV"].map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`p-4 rounded-xl border-3 border-black font-black text-sm transition-all transform hover:scale-105 ${
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
                    {sem.split(" ")[1].charAt(0)}
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-base">{sem.split(" ")[1]}</div>
                  <div className="text-xs opacity-75 mt-1">
                    {curriculumData.getCoursesBySemester(sem).length} courses
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Progress Stats */}
        <ProgressStats 
          courses={allCourses}
          selectedSemester={selectedSemester}
        />

        {/* Search Results Header */}
        {searchTerm && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
              Search results for "{searchTerm}"
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found across all semesters
            </p>
          </div>
        )}

        {/* Semester Header */}
        {!searchTerm && (
          <div className="mb-6">
            <h2 className="text-2xl font-black mb-2 text-black dark:text-white">{selectedSemester}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore {filteredCourses.length} courses organized by categories
            </p>
          </div>
        )}

        {/* Course Content */}
        {searchTerm ? (
          filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.code} course={course} onViewDetails={setSelectedCourse} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-4">
                <Icon name="search" className="text-xl text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">No courses found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try searching with different keywords</p>
            </div>
          )
        ) : (
          <div>
            <CategorySection 
              title="Theory Courses" 
              courses={categorizedCourses.theory} 
              icon="book-open" 
              color="bg-blue-500" 
            />
            <CategorySection 
              title="Laboratory Courses" 
              courses={categorizedCourses.lab} 
              icon="flask-conical" 
              color="bg-green-500" 
            />
            {selectedSemester === 'Semester II' && (
              <>
                <CategorySection 
                  title="Elective I" 
                  courses={categorizedCourses.electiveI} 
                  icon="layers" 
                  color="bg-yellow-500" 
                />
                <CategorySection 
                  title="Elective II" 
                  courses={categorizedCourses.electiveII} 
                  icon="layers" 
                  color="bg-yellow-500" 
                />
              </>
            )}
            {selectedSemester === 'Semester III' && (
              <>
                <CategorySection 
                  title="Elective III" 
                  courses={categorizedCourses.electiveIII} 
                  icon="layers" 
                  color="bg-yellow-500" 
                />
                <CategorySection 
                  title="Elective IV" 
                  courses={categorizedCourses.electiveIV} 
                  icon="layers" 
                  color="bg-yellow-500" 
                />
              </>
            )}
            <CategorySection 
              title="Project Work" 
              courses={categorizedCourses.project} 
              icon="folder-open" 
              color="bg-purple-500" 
            />
          </div>
        )}
      </div>
    </div>
  );
}
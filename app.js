class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [selectedSemester, setSelectedSemester] = React.useState('Semester I');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCourse, setSelectedCourse] = React.useState(null);
    const [showQuestionPapers, setShowQuestionPapers] = React.useState(false);
    const [selectedQuestionPaperSemester, setSelectedQuestionPaperSemester] = React.useState(null);
    const [selectedQuestionPaperSubject, setSelectedQuestionPaperSubject] = React.useState(null);
    
    // Advanced search filters state
    const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);
    const [filters, setFilters] = React.useState({
      type: '',
      credits: '',
      hasNotes: ''
    });
    
    const { isDarkMode } = useTheme();
    
    const allCourses = curriculumData.getAllCourses();
    
    // Make handleCourseDetails globally available
    window.handleCourseDetails = (course) => {
      setSelectedCourse(course);
    };
    
    const handleBackToCourses = () => {
      setSelectedCourse(null);
    };

    const handleQuestionPapersClick = () => {
      setShowQuestionPapers(true);
      setSelectedCourse(null);
      setSelectedQuestionPaperSemester(null);
    };

    const handleBackFromQuestionPapers = () => {
      setShowQuestionPapers(false);
      setSelectedQuestionPaperSemester(null);
    };

    const handleShowQuestionPapersForSemester = (semester) => {
      setSelectedQuestionPaperSemester(semester);
      setSelectedQuestionPaperSubject(null);
    };

    const handleShowQuestionPapersForSubject = (subject) => {
      setSelectedQuestionPaperSubject(subject);
    };

    const handleBackFromQuestionPapersSubject = () => {
      setSelectedQuestionPaperSubject(null);
    };

    // Toggle advanced filters
    const handleToggleAdvancedFilters = () => {
      setShowAdvancedFilters(!showAdvancedFilters);
    };
    
    // Function to check if course has notes available
    const hasNotes = (courseCode) => {
      const coursesWithNotes = [
        // '20MCA101', // Mathematical Foundations for Computing
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
    
    // Make the semester navigation function globally available
    window.showQuestionPapersForSemester = handleShowQuestionPapersForSemester;
    
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

    if (showQuestionPapers && selectedQuestionPaperSemester && selectedQuestionPaperSubject) {
      return (
        <QuestionPapersYear 
          selectedSemester={selectedQuestionPaperSemester}
          selectedSubject={selectedQuestionPaperSubject}
          onBack={handleBackFromQuestionPapersSubject}
        />
      );
    }

    if (showQuestionPapers && selectedQuestionPaperSemester) {
      return (
        <QuestionPapers 
          selectedSemester={selectedQuestionPaperSemester}
          onBack={handleBackFromQuestionPapers}
          onSelectSubject={handleShowQuestionPapersForSubject}
        />
      );
    }

    if (showQuestionPapers) {
      return (
        <QuestionPapers 
          onBack={handleBackFromQuestionPapers}
        />
      );
    }
    
    return (
      <div className="min-h-screen transition-colors duration-200 bg-[#f0f0f0] dark:bg-gray-900" data-name="app" data-file="app.js">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedSemester={selectedSemester}
          onSemesterChange={setSelectedSemester}
          onQuestionPapersClick={handleQuestionPapersClick}
          showAdvancedFilters={showAdvancedFilters}
          onToggleAdvancedFilters={handleToggleAdvancedFilters}
        />
        
        <main className="max-w-6xl mx-auto p-6">
          {/* Advanced Search Filters */}
          <AdvancedSearchFilters 
            filters={filters}
            onFiltersChange={setFilters}
            isVisible={showAdvancedFilters}
            onToggle={handleToggleAdvancedFilters}
          />
          <ProgressStats 
            courses={allCourses}
            selectedSemester={selectedSemester}
          />
          
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
          
          {!searchTerm && (
            <div className="mb-6">
              <h2 className="text-2xl font-black mb-2 text-black dark:text-white">{selectedSemester}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explore {filteredCourses.length} courses organized by categories
              </p>
            </div>
          )}
          
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
                  <div className="icon-search text-xl text-gray-400"></div>
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
          
          {/* Maintainer Section */}
          <div className="mt-16 mb-8" data-name="maintainer-section">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-user text-white text-lg"></div>
              </div>
              <div>
                <h3 className="text-xl font-black text-black dark:text-white">Developer & Maintainer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">BrainFuel by zoxilsi</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <img src="assets/abhi.jpg" alt="ABHIJITH T" className="w-16 h-16 object-cover rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)]" />
                  <div>
                    <h3 className="text-xl font-black text-black dark:text-white">ABHIJITH T</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-bold">Vibe Coder</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">MCA 2024-2026</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/zoxilsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 hover:bg-gray-700 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <div className="icon-github text-white text-lg"></div>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/zoxilsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <div className="icon-linkedin text-white text-lg"></div>
                  </a>
                  
                  <a
                    href="https://twitter.com/zoxilsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sky-500 hover:bg-sky-400 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <div className="icon-twitter text-white text-lg"></div>
                  </a>
                  
                  <a
                    href="mailto:24mp2275@rit.ac.in"
                    className="w-12 h-12 bg-green-600 hover:bg-green-500 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <div className="icon-mail text-white text-lg"></div>
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t-2 border-gray-200 dark:border-gray-700 text-center">
                <p className="text-gray-600 dark:text-gray-300 font-bold">
                  © 2025 MCA study materials. Made for students, by students.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Empowering MCA students with comprehensive study materials and resources
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-black"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ErrorBoundary>
);

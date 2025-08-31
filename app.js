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
    const [currentPage, setCurrentPage] = React.useState('home');
    const [showQuestionPapers, setShowQuestionPapers] = React.useState(false);
    const [selectedQuestionPaperSemester, setSelectedQuestionPaperSemester] = React.useState(null);
    const [selectedQuestionPaperSubject, setSelectedQuestionPaperSubject] = React.useState(null);
    
    const { isDarkMode } = useTheme();

    // Make page change function globally available
    window.handlePageChange = (page) => {
      setCurrentPage(page);
      // Reset question papers state when changing pages
      if (page !== 'question-papers') {
        setShowQuestionPapers(false);
        setSelectedQuestionPaperSemester(null);
        setSelectedQuestionPaperSubject(null);
      }
    };

    const handleQuestionPapersClick = () => {
      setShowQuestionPapers(true);
      setSelectedQuestionPaperSemester(null);
      setCurrentPage('question-papers');
    };

    const handleBackFromQuestionPapers = () => {
      if (selectedQuestionPaperSemester) {
        // If we're viewing a specific semester, go back to semester selection
        setSelectedQuestionPaperSemester(null);
      } else {
        // If we're on the main question papers page, go back to home
        setCurrentPage('home');
      }
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

    // Make the semester navigation function globally available
    window.showQuestionPapersForSemester = handleShowQuestionPapersForSemester;

    // Handle Question Papers navigation
    if (currentPage === 'question-papers' && selectedQuestionPaperSemester && selectedQuestionPaperSubject) {
      return (
        <div>
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          <QuestionPapersYear 
            selectedSemester={selectedQuestionPaperSemester}
            selectedSubject={selectedQuestionPaperSubject}
            onBack={handleBackFromQuestionPapersSubject}
          />
        </div>
      );
    }

    if (currentPage === 'question-papers' && selectedQuestionPaperSemester) {
      return (
        <div>
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          <QuestionPapers 
            selectedSemester={selectedQuestionPaperSemester}
            onBack={handleBackFromQuestionPapers}
            onSelectSubject={handleShowQuestionPapersForSubject}
          />
        </div>
      );
    }

    if (currentPage === 'question-papers') {
      return (
        <div>
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          <QuestionPapers 
            onBack={handleBackFromQuestionPapers}
          />
        </div>
      );
    }
    
    // Render different pages based on currentPage state
    const renderPage = () => {
      switch (currentPage) {
        case 'home':
          return <HomePage />;
        case 'courses':
          return <CoursesPage />;
        case 'syllabus':
          return <SyllabusPage />;
        case 'about':
          return <AboutPage />;
        case 'contact':
          return <ContactPage />;
        case 'feedback':
          return <FeedbackPage onBack={() => setCurrentPage('home')} />;
        default:
          return <HomePage />;
      }
    };

    return (
      <div>
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        {renderPage()}
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

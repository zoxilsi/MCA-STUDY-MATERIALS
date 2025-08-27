// Loading component for lazy-loaded components
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  </div>
);

// Lazy load major components
const HomePage = React.lazy(() => {
  return new Promise(resolve => {
    // Add artificial delay to demonstrate loading (remove in production)
    setTimeout(() => {
      resolve({ default: window.HomePage });
    }, 100);
  });
});

const CoursesPage = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: window.CoursesPage });
    }, 100);
  });
});

const AboutPage = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: window.AboutPage });
    }, 100);
  });
});

const ContactPage = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: window.ContactPage });
    }, 100);
  });
});

const QuestionPapers = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: window.QuestionPapers });
    }, 100);
  });
});

const QuestionPapersYear = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: window.QuestionPapersYear });
    }, 100);
  });
});

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
      setShowQuestionPapers(false);
      setSelectedQuestionPaperSemester(null);
      setCurrentPage('question-papers');
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

    // Handle Question Papers navigation with Suspense
    if (currentPage === 'question-papers' && selectedQuestionPaperSemester && selectedQuestionPaperSubject) {
      return (
        <div>
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          <React.Suspense fallback={<LoadingSpinner />}>
            <QuestionPapersYear 
              selectedSemester={selectedQuestionPaperSemester}
              selectedSubject={selectedQuestionPaperSubject}
              onBack={handleBackFromQuestionPapersSubject}
            />
          </React.Suspense>
        </div>
      );
    }

    if (currentPage === 'question-papers' && selectedQuestionPaperSemester) {
      return (
        <div>
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          <React.Suspense fallback={<LoadingSpinner />}>
            <QuestionPapers 
              selectedSemester={selectedQuestionPaperSemester}
              onBack={handleBackFromQuestionPapers}
              onSelectSubject={handleShowQuestionPapersForSubject}
            />
          </React.Suspense>
        </div>
      );
    }

    if (currentPage === 'question-papers') {
      return (
        <div>
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          <React.Suspense fallback={<LoadingSpinner />}>
            <QuestionPapers 
              onBack={handleBackFromQuestionPapers}
            />
          </React.Suspense>
        </div>
      );
    }
    
    // Render different pages based on currentPage state with Suspense
    const renderPage = () => {
      switch (currentPage) {
        case 'home':
          return (
            <React.Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </React.Suspense>
          );
        case 'courses':
          return (
            <React.Suspense fallback={<LoadingSpinner />}>
              <CoursesPage />
            </React.Suspense>
          );
        case 'about':
          return (
            <React.Suspense fallback={<LoadingSpinner />}>
              <AboutPage />
            </React.Suspense>
          );
        case 'contact':
          return (
            <React.Suspense fallback={<LoadingSpinner />}>
              <ContactPage />
            </React.Suspense>
          );
        default:
          return (
            <React.Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </React.Suspense>
          );
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

const Navigation = React.memo(function Navigation({ currentPage, onPageChange }) {
  const { isDarkMode } = useTheme();
  
  // Memoize nav items to prevent recreation on every render
  const navItems = React.useMemo(() => [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'courses', label: 'Courses', icon: 'book-open' },
    { id: 'question-papers', label: 'Question Papers', icon: 'file-text' },
    { id: 'about', label: 'About', icon: 'info' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ], []);

  // Memoize click handlers
  const handleHomeClick = React.useCallback(() => {
    onPageChange('home');
  }, [onPageChange]);

  const handleNavClick = React.useCallback((pageId) => {
    onPageChange(pageId);
  }, [onPageChange]);

  // Add mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b-3 border-black dark:border-gray-600 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleHomeClick}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
              <div className="icon-graduation-cap text-white text-lg"></div>
            </div>
            <div>
              <h1 className="text-xl font-black text-black dark:text-white">MCA Notes</h1>
              <p className="text-xs text-gray-600 dark:text-gray-300">KTU</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]'
                    : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className={`icon-${item.icon} text-sm`}></div>
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]"
            >
              <div className="icon-menu text-black dark:text-white"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-2">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-bold text-xs transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]'
                    : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className={`icon-${item.icon} text-xs`}></div>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
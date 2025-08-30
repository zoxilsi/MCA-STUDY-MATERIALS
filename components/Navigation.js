function Navigation({ currentPage, onPageChange }) {
   const { isDarkMode, toggleDarkMode } = useTheme();
   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

   const navItems = [
     { id: 'home', label: 'Home', icon: 'home' },
     { id: 'courses', label: 'Courses', icon: 'book-open' },
     { id: 'syllabus', label: 'Syllabus', icon: 'clipboard-list' },
     { id: 'question-papers', label: 'Question Papers', icon: 'file-text' },
     { id: 'about', label: 'About', icon: 'info' },
     { id: 'contact', label: 'Contact', icon: 'mail' }
   ];

  return (
    <nav className="bg-white dark:bg-gray-800 border-b-3 border-black dark:border-gray-600 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 md:gap-3 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
              <Icon name="graduation-cap" className="text-white text-sm md:text-lg" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-black text-black dark:text-white">MCA Notes</h1>
              <p className="text-xs text-gray-600 dark:text-gray-300 hidden sm:block">KTU</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]'
                    : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className={`w-6 h-6 ${currentPage === item.id ? 'bg-white/20' : 'bg-gradient-to-r from-blue-500 to-purple-500'} rounded border ${currentPage === item.id ? 'border-white/30' : 'border-black'} shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                  <Icon name={item.icon} className={`text-xs ${currentPage === item.id ? 'text-white' : 'text-white'}`} />
                </div>
                {item.label}
              </button>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <Icon name={isDarkMode ? 'sun' : 'moon'} className="text-xs text-white" />
              </div>
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Icon name={isDarkMode ? 'sun' : 'moon'} className="text-black dark:text-white text-sm" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]"
            >
              <Icon name={mobileMenuOpen ? 'times' : 'menu'} className="text-black dark:text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-sm transition-all ${
                    currentPage === item.id
                      ? 'bg-blue-500 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]'
                      : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className={`w-8 h-8 ${currentPage === item.id ? 'bg-white/20' : 'bg-gradient-to-r from-blue-500 to-purple-500'} rounded border ${currentPage === item.id ? 'border-white/30' : 'border-black'} shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                    <Icon name={item.icon} className={`text-sm ${currentPage === item.id ? 'text-white' : 'text-white'}`} />
                  </div>
                  {item.label}
                </button>
              ))}

              {/* Mobile Theme Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                  <Icon name={isDarkMode ? 'sun' : 'moon'} className="text-sm text-white" />
                </div>
                {isDarkMode ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
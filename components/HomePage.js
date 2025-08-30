function HomePage() {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: 'book-open',
      title: 'Comprehensive Notes',
      description: 'Complete study materials for all MCA semesters',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'file-text',
      title: 'Question Papers',
      description: 'Previous year question papers from 2020-2025',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: 'flask-conical',
      title: 'Lab Resources',
      description: 'Programming labs and practical exercises',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'users',
      title: 'Community Driven',
      description: 'Built by students, for students',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Total Courses', value: '22+', icon: 'book' },
    { label: 'Semesters', value: '4', icon: 'calendar' },
    { label: 'Question Papers', value: '100+', icon: 'file-text' },
    { label: 'Lab Exercises', value: '50+', icon: 'code' }
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Main Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-6 transform hover:scale-105 transition-transform">
              <Icon name="graduation-cap" className="text-white text-5xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-black dark:text-white mb-4">
              MCA Notes
            </h1>
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] font-bold text-lg">
              KTU • 2020 Curriculum
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive resource for Master of Computer Applications study materials, 
            notes, and question papers from APJ Abdul Kalam Technological University.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => window.handlePageChange('courses')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black text-lg rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <Icon name="book-open" className="text-lg text-white" />
              </div>
              Explore Courses
            </button>
            <button
              onClick={() => window.handlePageChange('question-papers')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-black dark:text-white font-black text-lg rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <Icon name="file-text" className="text-lg text-white" />
              </div>
              Question Papers
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
                <div className={`w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-2`}>
                  <Icon name={stat.icon} className="text-white text-sm" />
                </div>
                <div className="text-2xl font-black text-black dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black dark:text-white mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive resources designed to help MCA students succeed in their academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#f0f0f0] dark:bg-gray-900 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mb-4`}>
                  <Icon name={feature.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black dark:text-white mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Jump directly to what you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Semester I', 'Semester II', 'Semester III', 'Semester IV'].map((semester, index) => (
              <button
                key={semester}
                onClick={() => {
                  window.handlePageChange('courses');
                  // Small delay to ensure page change happens first
                  setTimeout(() => {
                    if (window.handleSemesterChange) {
                      window.handleSemesterChange(semester);
                    }
                  }, 100);
                }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                    <span className="text-white font-black text-lg">{index + 1}</span>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-r from-gray-400 to-gray-500 rounded border border-gray-300 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                    <Icon name="arrow-right" className="text-xs text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-black text-black dark:text-white mb-2">
                  {semester}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {curriculumData.getCoursesBySemester(semester).length} courses available
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of MCA students who trust our resources for their academic success
          </p>
          <button
            onClick={() => window.handlePageChange('courses')}
            className="px-8 py-4 bg-white text-blue-600 font-black text-lg rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
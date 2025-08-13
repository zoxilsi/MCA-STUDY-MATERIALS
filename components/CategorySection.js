function CategorySection({ title, courses, icon, color }) {
  try {
    if (courses.length === 0) return null;

    // Sort: active electives first
    const sortedCourses = [...courses].sort((a, b) => (b.active === true) - (a.active === true));
    
    return (
      <div className="mb-8" data-name="category-section" data-file="components/CategorySection.js">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 ${color} rounded-xl border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)] flex items-center justify-center`}>
            <div className={`icon-${icon} text-white text-lg`}></div>
          </div>
          <div>
            <h3 className="text-xl font-black text-theme-primary">{title}</h3>
            <p className="text-sm text-theme-secondary">{courses.length} course{courses.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedCourses.map(course => (
            course.active !== false ? (
              course.code === '20MCA245' ? (
                <div
                  key={course.code}
                  className="bg-purple-50 border-2 border-purple-400 rounded-xl p-6 flex flex-col items-center justify-center shadow-[2px_2px_0px_0px_var(--shadow-secondary)] select-none"
                  style={{ minHeight: 200 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-purple-600 rounded-full flex items-center justify-center mb-2">
                    <span className="icon-lightbulb text-2xl text-white"></span>
                  </div>
                  <div className="text-xl font-black text-purple-700 mb-1">Mini Project Coming Soon</div>
                  <div className="text-xs font-bold text-theme-muted mb-2">20MCA245</div>
                  <div className="text-purple-700 font-semibold mb-2 text-center">Want to showcase your Mini Project? <br/> Email: <a href='mailto:24mp2275@rit.ac.in' className='underline text-blue-600'>24mp2275@rit.ac.in</a></div>
                  <a
                    href="https://github.com/zoxilsi/MCA_MINI_PROJECT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 bg-purple-500 text-white font-bold rounded border-2 border-theme-primary shadow-[1px_1px_0px_0px_var(--shadow-primary)] hover:bg-purple-600 transition-all mt-2"
                  >
                    Upload or View Mini Projects on GitHub
                  </a>
                </div>
              ) : course.code === '20MCA246' ? (
                <div
                  key={course.code}
                  className="bg-indigo-50 border-2 border-indigo-400 rounded-xl p-6 flex flex-col items-center justify-center shadow-[2px_2px_0px_0px_var(--shadow-secondary)] select-none"
                  style={{ minHeight: 200 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 border-2 border-indigo-600 rounded-full flex items-center justify-center mb-2">
                    <span className="icon-award text-2xl text-white"></span>
                  </div>
                  <div className="text-xl font-black text-indigo-700 mb-1">Main Project Coming Soon</div>
                  <div className="text-xs font-bold text-theme-muted mb-2">20MCA246</div>
                  <div className="text-indigo-700 font-semibold mb-2 text-center">Want to showcase your Main Project? <br/> Email: <a href='mailto:24mp2275@rit.ac.in' className='underline text-blue-600'>24mp2275@rit.ac.in</a></div>
                  <a
                    href="https://github.com/zoxilsi/MCA_MAIN_PROJECT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 bg-indigo-500 text-white font-bold rounded border-2 border-theme-primary shadow-[1px_1px_0px_0px_var(--shadow-primary)] hover:bg-indigo-600 transition-all mt-2"
                  >
                    Upload or View Main Projects on GitHub
                  </a>
                </div>
              ) : (
                <CourseCard key={course.code} course={course} onViewDetails={window.handleCourseDetails} />
              )
            ) : (
              <div
                key={course.code}
                className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-6 flex flex-col items-center justify-center shadow-[2px_2px_0px_0px_var(--shadow-secondary)] opacity-80 select-none"
                style={{ minHeight: 180 }}
              >
                <div className="w-10 h-10 bg-yellow-300 border-2 border-yellow-500 rounded-full flex items-center justify-center mb-2">
                  <span className="icon-hourglass text-xl text-yellow-700"></span>
                </div>
                <div className="text-lg font-black text-yellow-700 mb-1">{course.name}</div>
                <div className="text-xs font-bold text-theme-muted mb-2">{course.code}</div>
                <div className="text-yellow-700 font-semibold mb-2">Coming Soon</div>
                <a
                  href="https://github.com/your-repo/contribute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 bg-yellow-500 text-white font-bold rounded border-2 border-theme-primary shadow-[1px_1px_0px_0px_var(--shadow-primary)] hover:bg-yellow-600 transition-all"
                >
                  Want to help students? <span className="underline">Share your notes!</span>
                </a>
              </div>
            )
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('CategorySection component error:', error);
    return null;
  }
}
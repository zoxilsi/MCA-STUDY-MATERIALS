function ProgressStats({ courses, selectedSemester }) {
  try {
    const filteredCourses = selectedSemester === 'All' 
      ? courses 
      : courses.filter(course => course.semester === selectedSemester);
    
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    const theoryCourses = filteredCourses.filter(course => course.type === 'Theory').length;
    const labCourses = filteredCourses.filter(course => course.type === 'Lab').length;
    const electiveCourses = filteredCourses.filter(course => course.type === 'Elective').length;
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6" data-name="progress-stats" data-file="components/ProgressStats.js">
        <div className="bg-theme-secondary p-4 rounded-xl border-2 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg border border-theme-primary flex items-center justify-center">
              <div className="icon-book text-white text-xs"></div>
            </div>
            <span className="text-sm font-bold text-theme-secondary">Total Courses</span>
          </div>
          <div className="text-2xl font-black text-theme-primary">{filteredCourses.length}</div>
        </div>
        
        <div className="bg-theme-secondary p-4 rounded-xl border-2 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg border border-theme-primary flex items-center justify-center">
              <div className="icon-award text-white text-xs"></div>
            </div>
            <span className="text-sm font-bold text-theme-secondary">Total Credits</span>
          </div>
          <div className="text-2xl font-black text-theme-primary">{totalCredits}</div>
        </div>
        
        <div className="bg-theme-secondary p-4 rounded-xl border-2 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg border border-theme-primary flex items-center justify-center">
              <div className="icon-cpu text-white text-xs"></div>
            </div>
            <span className="text-sm font-bold text-theme-secondary">Theory</span>
          </div>
          <div className="text-2xl font-black text-theme-primary">{theoryCourses}</div>
        </div>
        
        <div className="bg-theme-secondary p-4 rounded-xl border-2 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg border border-theme-primary flex items-center justify-center">
              <div className="icon-flask-conical text-white text-xs"></div>
            </div>
            <span className="text-sm font-bold text-theme-secondary">Labs</span>
          </div>
          <div className="text-2xl font-black text-theme-primary">{labCourses}</div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProgressStats component error:', error);
    return null;
  }
}
function SemesterCard({ semester, onSelectSemester }) {
  try {
    const totalCredits = semester.courses.reduce((sum, course) => sum + course.credits, 0);
    
    return (
      <div 
        className="bg-theme-secondary rounded-xl p-6 border-3 border-theme-primary shadow-[6px_6px_0px_0px_var(--shadow-primary)] hover:shadow-[8px_8px_0px_0px_var(--shadow-primary)] transition-all duration-200 cursor-pointer transform hover:scale-105"
        onClick={() => onSelectSemester(semester.name)}
        data-name="semester-card" 
        data-file="components/SemesterCard.js"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-black text-theme-primary">{semester.name}</h3>
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)] flex items-center justify-center">
            <span className="text-white font-black text-sm">{semester.number}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-theme-secondary font-bold">Total Courses:</span>
            <span className="font-black text-theme-primary">{semester.courses.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-theme-secondary font-bold">Total Credits:</span>
            <span className="font-black text-theme-primary">{totalCredits}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {semester.courses.slice(0, 3).map((course, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-theme-tertiary text-theme-secondary text-xs font-bold rounded border border-theme-primary"
            >
              {course.code}
            </span>
          ))}
          {semester.courses.length > 3 && (
            <span className="text-xs text-theme-muted px-2 py-1">+{semester.courses.length - 3} more</span>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('SemesterCard component error:', error);
    return null;
  }
}
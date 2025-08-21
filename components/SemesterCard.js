function SemesterCard({ semester, onSelectSemester }) {
  try {
    const totalCredits = semester.courses.reduce((sum, course) => sum + course.credits, 0);
    
    return (
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transition-all duration-200 cursor-pointer transform hover:scale-105"
        onClick={() => onSelectSemester(semester.name)}
        data-name="semester-card" 
        data-file="components/SemesterCard.js"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-black text-black dark:text-white">{semester.name}</h3>
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
            <span className="text-white font-black text-sm">{semester.number}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300 font-bold">Total Courses:</span>
            <span className="font-black text-black dark:text-white">{semester.courses.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300 font-bold">Total Credits:</span>
            <span className="font-black text-black dark:text-white">{totalCredits}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {semester.courses.slice(0, 3).map((course, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-bold rounded border border-black"
            >
              {course.code}
            </span>
          ))}
          {semester.courses.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">+{semester.courses.length - 3} more</span>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('SemesterCard component error:', error);
    return null;
  }
}
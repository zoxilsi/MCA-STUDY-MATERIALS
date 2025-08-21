function CourseCard({ course, onViewDetails }) {
  try {
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

    const getTypeColor = (type) => {
      switch (type) {
        case 'Theory': return 'bg-blue-500';
        case 'Lab': return 'bg-green-500';
        case 'Project': return 'bg-purple-500';
        case 'Elective':
        case 'Elective I':
        case 'Elective II':
        case 'Elective III':
        case 'Elective IV':
          return 'bg-yellow-500';
        default: return 'bg-gray-500';
      }
    };
    
    const handleCardClick = () => {
      if (
        course.type === 'Theory' ||
        course.type === 'Lab' ||
        course.type === 'Elective' ||
        course.type === 'Elective I' ||
        course.type === 'Elective II' ||
        course.type === 'Elective III' ||
        course.type === 'Elective IV'
      ) {
        onViewDetails(course);
      }
    };
    
    const isClickable =
      course.type === 'Theory' ||
      course.type === 'Lab' ||
      course.type === 'Elective' ||
      course.type === 'Elective I' ||
      course.type === 'Elective II' ||
      course.type === 'Elective III' ||
      course.type === 'Elective IV';
    
    const courseHasNotes = hasNotes(course.code);
    
    return (
      <div 
        className={`rounded-xl p-6 border-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transition-all duration-200 relative bg-white dark:bg-gray-800 border-black dark:border-gray-600 text-black dark:text-white ${
          isClickable ? 'cursor-pointer transform hover:scale-105' : ''
        }`}
        onClick={handleCardClick}
        data-name="course-card" 
        data-file="components/CourseCard.js"
      >
        {/* Coming Soon Badge */}
        {isClickable && !courseHasNotes && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] animate-pulse flex items-center gap-1">
              <span className="icon-clock text-xs"></span>
              Coming Soon
            </div>
          </div>
        )}

        {/* Notes Available Badge */}
        {isClickable && courseHasNotes && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center gap-1">
              <span className="icon-check text-xs"></span>
              Notes Ready
            </div>
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 ${getTypeColor(course.type)} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
            <div className="icon-book-open text-white text-sm"></div>
          </div>
          
          <div className="text-right">
            <div className="text-xs font-bold mb-1 text-gray-500 dark:text-gray-400">{course.code}</div>
            <div className="px-2 py-1 text-xs font-bold rounded border bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-black dark:border-gray-600">
              {course.credits} Credits
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-black mb-2 line-clamp-2 text-black dark:text-white">
          {course.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="font-bold text-gray-600 dark:text-gray-400">Type:</span>
            <span className="font-black text-black dark:text-white">{course.type}</span>
          </div>
          
          {course.hours && (
            <div className="flex justify-between text-sm">
              <span className="font-bold text-gray-600 dark:text-gray-400">Hours/Week:</span>
              <span className="font-black text-black dark:text-white">
                L:{course.hours.lecture} T:{course.hours.tutorial} P:{course.hours.practical}
              </span>
            </div>
          )}
          
          {course.marks && (
            <div className="flex justify-between text-sm">
              <span className="font-bold text-gray-600 dark:text-gray-400">Marks:</span>
              <span className="font-black text-black dark:text-white">IA:{course.marks.ia} ESE:{course.marks.ese}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          {course.examSlot && (
            <span className="text-xs text-gray-500 dark:text-gray-400">Exam Slot: {course.examSlot}</span>
          )}
          <div className="flex items-center gap-2">
            {isClickable && (
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Click to view →</span>
            )}
            <span className={`px-2 py-1 text-xs font-bold rounded border border-black dark:border-gray-600 ${getTypeColor(course.type)} text-white`}>
              {course.semester}
            </span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CourseCard component error:', error);
    return null;
  }
}
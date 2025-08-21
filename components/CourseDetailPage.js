function CourseDetailPage({ course, onBack }) {
  try {
    if (!course) return null;
    
    const isTheoryOrElective =
      course.type === 'Theory' ||
      course.type === 'Elective' ||
      course.type === 'Elective I' ||
      course.type === 'Elective II' ||
      course.type === 'Elective III' ||
      course.type === 'Elective IV';
    const isLabCourse = course.type === 'Lab';
    
    return (
      <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900 transition-colors duration-200" data-name="course-detail" data-file="components/CourseDetailPage.js">
        <div className="max-w-4xl mx-auto p-6">
          <button
            onClick={onBack}
            className="btn-secondary mb-6 flex items-center gap-2"
          >
            <div className="icon-arrow-left text-sm"></div>
            Back to Courses
          </button>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 ${course.type === 'Theory' ? 'bg-blue-500' : course.type.startsWith('Elective') ? 'bg-yellow-500' : 'bg-green-500'} rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                <div className="icon-book-open text-white text-lg"></div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-black text-black dark:text-white mb-1">{course.name}</h1>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-black rounded font-bold">{course.code}</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 border-2 border-black rounded font-bold">{course.credits} Credits</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 dark:text-green-200 border-2 border-black rounded font-bold">{course.type}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 border-2 border-black rounded-lg">
                <span className="icon-clock text-base text-blue-500"></span>
                <span>Hrs/Wk:</span>
                <span className="text-black dark:text-white">L:{course.hours.lecture} T:{course.hours.tutorial} P:{course.hours.practical}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 border-2 border-black rounded-lg">
                <span className="icon-award text-base text-green-500"></span>
                <span>Marks:</span>
                <span className="text-black dark:text-white">IA:{course.marks.ia} ESE:{course.marks.ese}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 border-2 border-black rounded-lg">
                <span className="icon-calendar text-base text-purple-500"></span>
                <span>Slot:</span>
                <span className="text-black dark:text-white">{course.examSlot}</span>
              </div>
            </div>
          </div>
          {isTheoryOrElective && <h2 className="text-lg font-bold text-black dark:text-white mb-4">Modules & Notes</h2>}
          {isTheoryOrElective && <TheoryModules courseCode={course.code} />}
          {isLabCourse && <LabQuestions course={course} />}
        </div>
      </div>
    );
  } catch (error) {
    console.error('CourseDetailPage component error:', error);
    return null;
  }
}
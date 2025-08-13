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
      <div className="min-h-screen bg-theme-primary" data-name="course-detail" data-file="components/CourseDetailPage.js">
        <div className="max-w-4xl mx-auto p-6">
          <button
            onClick={onBack}
            className="btn-secondary mb-6 flex items-center gap-2"
          >
            <div className="icon-arrow-left text-sm"></div>
            Back to Courses
          </button>
          
          <div className="bg-theme-secondary rounded-xl p-6 border-3 border-theme-primary shadow-[6px_6px_0px_0px_var(--shadow-primary)] mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 ${course.type === 'Theory' ? 'bg-blue-500' : course.type.startsWith('Elective') ? 'bg-yellow-500' : 'bg-green-500'} rounded-xl border-2 border-theme-primary shadow-[3px_3px_0px_0px_var(--shadow-primary)] flex items-center justify-center`}>
                <div className="icon-book-open text-white text-lg"></div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-black text-theme-primary mb-1">{course.name}</h1>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-theme-tertiary border-2 border-theme-primary rounded font-bold text-theme-secondary">{course.code}</span>
                  <span className="contrast-badge bg-blue-100">{course.credits} Credits</span>
                  <span className="contrast-badge bg-green-100">{course.type}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 text-sm font-bold text-theme-secondary mb-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-theme-tertiary border-2 border-theme-primary rounded-lg">
                <span className="icon-clock text-base text-blue-500"></span>
                <span>Hrs/Wk:</span>
                <span className="text-theme-primary">L:{course.hours.lecture} T:{course.hours.tutorial} P:{course.hours.practical}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-theme-tertiary border-2 border-theme-primary rounded-lg">
                <span className="icon-award text-base text-green-500"></span>
                <span>Marks:</span>
                <span className="text-theme-primary">IA:{course.marks.ia} ESE:{course.marks.ese}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-theme-tertiary border-2 border-theme-primary rounded-lg">
                <span className="icon-calendar text-base text-purple-500"></span>
                <span>Slot:</span>
                <span className="text-theme-primary">{course.examSlot}</span>
              </div>
            </div>
          </div>
          {isTheoryOrElective && <h2 className="text-lg font-bold text-theme-primary mb-4">Modules & Notes</h2>}
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
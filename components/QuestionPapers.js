function QuestionPapers({ onBack, selectedSemester, onSelectSubject }) {
  try {
    const semesters = [
      { name: 'Semester I', number: 'I', icon: 'book-open' },
      { name: 'Semester II', number: 'II', icon: 'layers' },
      { name: 'Semester III', number: 'III', icon: 'flask-conical' },
      { name: 'Semester IV', number: 'IV', icon: 'folder-open' }
    ];
    if (selectedSemester) {
      const allSubjects = curriculumData.getCoursesBySemester(selectedSemester);
      const theorySubjects = allSubjects.filter(subject => subject.type === 'Theory');
      const electiveISubjects = allSubjects.filter(subject => subject.type === 'Elective I');
      const electiveIISubjects = allSubjects.filter(subject => subject.type === 'Elective II');
      const electiveIIISubjects = allSubjects.filter(subject => subject.type === 'Elective III');
      const electiveIVSubjects = allSubjects.filter(subject => subject.type === 'Elective IV');
      return (
        <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900" data-name="question-papers-subjects" data-file="components/QuestionPapers.js">
          <div className="max-w-6xl mx-auto p-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white font-bold text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] transition-all mb-4"
            >
              <div className="icon-arrow-left text-sm"></div>
              Back to Semesters
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-file-text text-2xl text-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-black dark:text-white">{selectedSemester} Subjects</h1>
                <p className="text-base text-gray-600 dark:text-gray-300 mt-1">Select a subject to view question papers</p>
              </div>
            </div>
            {/* Theory Courses */}
            {theorySubjects.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black dark:text-white mb-4">Theory Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {theorySubjects.map(subject => (
                    <div
                      key={subject.code}
                      className="bg-white dark:bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all transform hover:scale-105 cursor-pointer"
                      onClick={() => onSelectSubject(subject)}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                            <div className="icon-book-open text-white text-lg"></div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400">{subject.code}</div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-lg font-black text-black dark:text-white mb-2">{subject.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">View question papers from 2020-2025</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Elective I Courses */}
            {electiveISubjects.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black dark:text-white mb-4">Elective I</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {electiveISubjects.map(subject => (
                    <div
                      key={subject.code}
                      className="bg-white dark:bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all transform hover:scale-105 cursor-pointer"
                      onClick={() => onSelectSubject(subject)}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                            <div className="icon-book-open text-white text-lg"></div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400">{subject.code}</div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-lg font-black text-black dark:text-white mb-2">{subject.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">View question papers from 2020-2025</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Elective II Courses */}
            {electiveIISubjects.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black dark:text-white mb-4">Elective II</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {electiveIISubjects.map(subject => (
                    <div
                      key={subject.code}
                      className="bg-white dark:bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all transform hover:scale-105 cursor-pointer"
                      onClick={() => onSelectSubject(subject)}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                            <div className="icon-book-open text-white text-lg"></div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400">{subject.code}</div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-lg font-black text-black dark:text-white mb-2">{subject.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">View question papers from 2020-2025</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Elective III Courses */}
            {electiveIIISubjects.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black dark:text-white mb-4">Elective III</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {electiveIIISubjects.map(subject => (
                    <div
                      key={subject.code}
                      className="bg-white dark:bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all transform hover:scale-105 cursor-pointer"
                      onClick={() => onSelectSubject(subject)}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                            <div className="icon-book-open text-white text-lg"></div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400">{subject.code}</div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-lg font-black text-black dark:text-white mb-2">{subject.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">View question papers from 2020-2025</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Elective IV Courses */}
            {electiveIVSubjects.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black dark:text-white mb-4">Elective IV</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {electiveIVSubjects.map(subject => (
                    <div
                      key={subject.code}
                      className="bg-white dark:bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all transform hover:scale-105 cursor-pointer"
                      onClick={() => onSelectSubject(subject)}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                            <div className="icon-book-open text-white text-lg"></div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400">{subject.code}</div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-lg font-black text-black dark:text-white mb-2">{subject.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">View question papers from 2020-2025</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    if (selectedSemester === 'Semester III' || selectedSemester === 'Semester IV') {
      return (
        <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900 flex items-center justify-center" data-name="question-papers-coming-soon" data-file="components/QuestionPapers.js">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] flex flex-col items-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-3 border-purple-600 flex items-center justify-center mb-4">
              <span className="icon-hourglass text-3xl text-white"></span>
            </div>
            <h2 className="text-2xl font-black text-purple-700 dark:text-purple-300 mb-2 text-center">Question Papers Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-2">We're preparing comprehensive question papers for {selectedSemester}. Stay tuned!</p>
          </div>
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900" data-name="question-papers" data-file="components/QuestionPapers.js">
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white font-bold text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] transition-all mb-4"
            >
              <div className="icon-arrow-left text-sm"></div>
              Back to Courses
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-file-text text-2xl text-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-black dark:text-white">Previous Year Question Papers</h1>
                <p className="text-base text-gray-600 dark:text-gray-300 mt-1">Select a semester to view question papers</p>
              </div>
            </div>
          </div>

          {/* Uploading Soon Notice */}
          <div className="mb-8 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border-3 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-upload text-white text-lg"></div>
              </div>
              <div>
                <h3 className="text-lg font-black text-yellow-800 dark:text-yellow-200 mb-1">Uploading Soon!</h3>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">We're preparing comprehensive question papers for all semesters. Stay tuned!</p>
              </div>
            </div>
          </div>

          {/* Semesters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {semesters.map((semester, index) => (
              <div
                key={semester.name}
                className="bg-white dark:bg-gray-800 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => window.showQuestionPapersForSemester(semester.name)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                      <div className={`icon-${semester.icon} text-white text-lg`}></div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-gray-500 dark:text-gray-400">SEM</div>
                      <div className="text-lg font-black text-black dark:text-white">{semester.number}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-black text-black dark:text-white mb-2">
                      {semester.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      View question papers from 2020-2025
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="icon-calendar text-xs"></div>
                      <span>6 years available</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
                      <div className="icon-arrow-right text-xs"></div>
                      <span>View</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-info text-white text-lg"></div>
              </div>
              <div>
                <h3 className="text-lg font-black text-black dark:text-white mb-2">About Question Papers</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Access previous year question papers from APJ Abdul Kalam Technological University. 
                  Each semester contains question papers from 2020 to 2025.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Complete Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Marking Scheme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Topic Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('QuestionPapers component error:', error);
    return null;
  }
} 
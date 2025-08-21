function QuestionPapersYear({ selectedSemester, selectedSubject, onBack }) {
  try {
    const years = [2020, 2021, 2022, 2023, 2024, 2025];
    
    const handleDownload = (year) => {
      // Create a dummy PDF content for demonstration
      const content = `Previous Year Question Paper - ${selectedSemester} - ${year}\n\nThis is a sample question paper for ${selectedSemester} from the year ${year}.\n\nNote: This is a placeholder file for demonstration purposes.`;
      
      // Create blob and download
      const blob = new Blob([content], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob); 
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedSemester.replace(' ', '_')}_${year}_question_paper.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    };

    return (
      <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900" data-name="question-papers-year" data-file="components/QuestionPapersYear.js">
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white font-bold text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] transition-all mb-4"
            >
              <div className="icon-arrow-left text-sm"></div>
              Back to Subjects
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-file-text text-2xl text-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-black dark:text-white">{selectedSubject?.name} ({selectedSubject?.code}) Papers</h1>
                <p className="text-base text-gray-600 dark:text-gray-300 mt-1">Select a year to download the question paper</p>
              </div>
            </div>
          </div>

          {/* Years Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {years.map((year) => {
              const filePath = questionPapersData.getQuestionPaperPath(selectedSemester, selectedSubject.code, year);
              let available = false;
              if (selectedSemester === 'Semester I') {
                if (selectedSubject?.code === '20MCA105') {
                  available = [2020, 2022, 2023, 2024].includes(year);
                } else if (selectedSubject?.code === '20MCA101') {
                  available = [2020].includes(year);
                } else if (selectedSubject?.code === '20MCA103') {
                  available = [2020, 2021].includes(year);
                } else if (selectedSubject?.code === '20MCA107') {
                  available = [2020].includes(year);
                }
              } else if (selectedSemester === 'Semester II') {
                if (selectedSubject?.code === '20MCA102') {
                  available = [2021, 2022, 2023, 2024].includes(year);
                } else if (selectedSubject?.code === '20MCA104') {
                  available = [2021, 2023, 2024].includes(year);
                }
              }
              return (
                <div
                  key={year}
                  className={`rounded-xl border-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] ${available ? 'bg-white dark:bg-gray-800 border-green-400 cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]' : 'bg-gray-100 dark:bg-gray-700 border-gray-400 cursor-not-allowed opacity-75'}`}
                  onClick={() => {
                    if (available) {
                      window.open(filePath, '_blank');
                    }
                  }}
                >
                  <div className="p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-3">
                      <div className="icon-clock text-white text-sm"></div>
                    </div>
                    
                    <div className="mb-2">
                      <div className="text-lg font-black text-gray-700 dark:text-gray-200">{year}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Question Paper</div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      {available ? (
                        <span className="bg-green-500 text-white px-2 py-1 rounded font-bold text-xs border border-green-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">Download</span>
                      ) : (
                        <span className="bg-red-500 text-white px-2 py-1 rounded font-bold text-xs border border-red-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">Uploading Soon</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Info */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
                <div className="icon-info text-white text-sm"></div>
              </div>
              <div>
                <h3 className="text-sm font-black text-black dark:text-white">Quick Download</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">Click any year to download the question paper instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('QuestionPapersYear component error:', error);
    return null;
  }
} 
function CourseCard({ course, onViewDetails }) {
   try {
     // Function to get appropriate icon for course
     const getCourseIcon = (course) => {
       // Icon mapping based on course code and name
       const iconMap = {
         // Mathematics & Foundations
         '20MCA101': 'calculator', // Mathematical Foundations for Computing

         // Computer Architecture & Digital Systems
         '20MCA103': 'microchip', // Digital Fundamentals & Computer Architecture

         // Data Structures & Algorithms
         '20MCA105': 'code-branch', // Advanced Data Structures
         '20MCA203': 'project-diagram', // Design & Analysis of Algorithms

         // Software Engineering
         '20MCA107': 'laptop-code', // Advanced Software Engineering

         // Database Systems
         '20MCA102': 'database', // Advanced Database Management Systems
         '20MCA134': 'database', // Advanced DBMS Lab

         // Networks
         '20MCA104': 'network-wired', // Advanced Computer Networks
         '20MCA136': 'network-wired', // Networking & System Administration Lab

         // Programming Labs
         '20MCA131': 'code', // Programming Lab
         '20MCA132': 'code', // Object Oriented Programming Lab
         '20MCA135': 'code', // Data Structures Lab

         // Web Development
         '20MCA133': 'globe', // Web Programming Lab
         '20MCA243': 'mobile-alt', // Mobile Application Development Lab

         // Data Science & AI
         '20MCA201': 'chart-bar', // Data Science & Machine Learning
         '20MCA241': 'chart-bar', // Data Science Lab
         '20MCA188': 'brain', // Artificial Intelligence
         '20MCA283': 'brain', // Deep Learning

         // Security & Cyber
         '20MCA263': 'shield-alt', // Cyber Security & Cryptography
         '20MCA267': 'lock', // Cyber Forensics

         // Cloud & Infrastructure
         '20MCA265': 'cloud', // Cloud Computing
         '20MCA168': 'server', // Virtualisation and Containers

         // Graphics & Multimedia
         '20MCA186': 'image', // Computer Graphics
         '20MCA285': 'image', // Digital Image Processing

         // Business & Management
         '20MCA164': 'users-cog', // Organizational Behaviour
         '20MCA182': 'users-cog', // Business Management

         // Statistics & Research
         '20MCA162': 'chart-bar', // Applied Statistics
         '20MCA261': 'calculator', // Operations Research

         // IoT & Embedded
         '20MCA184': 'microchip', // Embedded Systems
         '20MCA281': 'microchip', // Internet of Things

         // Legal & IPR
         '20MCA192': 'shield-alt', // IPR and Cyber Laws

         // Programming Paradigms
         '20MCA166': 'code-branch', // Functional Programming

         // Operating Systems
         '20MCA172': 'desktop', // Advanced Operating Systems

         // Compiler Design
         '20MCA269': 'cogs', // Compiler Design

         // Bioinformatics
         '20MCA287': 'dna', // Bioinformatics

         // Social Network Analysis
         '20MCA289': 'chart-network', // Social Network Analysis

         // Projects & Viva
         '20MCA245': 'folder', // Mini Project
         '20MCA246': 'folder', // Main Project
         '20MCA242': 'graduation-cap', // Comprehensive Viva
         '20MCA244': 'presentation', // Seminar
       };

       // Check by course code first
       if (iconMap[course.code]) {
         return iconMap[course.code];
       }

       // Fallback based on course type
       switch (course.type) {
         case 'Lab':
           return 'laptop-code';
         case 'Project':
           return 'folder';
         case 'Elective':
         case 'Elective I':
         case 'Elective II':
         case 'Elective III':
         case 'Elective IV':
           return 'layers';
         default:
           return 'book-open';
       }
     };

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
              <Icon name="clock" className="text-xs" />
              Coming Soon
            </div>
          </div>
        )}

        {/* Notes Available Badge */}
        {isClickable && courseHasNotes && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-black px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center gap-1">
              <Icon name="check" className="text-xs" />
              Notes Ready
            </div>
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 ${getTypeColor(course.type)} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
            <Icon name={getCourseIcon(course)} className="text-white text-sm" />
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
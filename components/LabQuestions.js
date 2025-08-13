function LabQuestions({ course }) {
  // Special design for Laboratory courses with programming language themes
  const labCourses = {
    '20MCA131': {
      name: 'Programming Lab',
      language: 'Python',
      icon: '🐍',
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      description: 'Master Python programming with hands-on projects and real-world applications',
      githubRepo: 'https://github.com/mca-website/python-lab-exercises',
      gitlabRepo: 'https://gitlab.com/zoxilsi/PYTHON-LAB'
    },
    '20MCA133': {
      name: 'Web Programming Lab',
      language: 'HTML/CSS/JS',
      icon: '🌐',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      description: 'Build stunning websites with modern web technologies and frameworks',
      githubRepo: 'https://github.com/mca-website/web-programming-lab',
      gitlabRepo: 'https://gitlab.com/zoxilsi/WEB-LAB'
    },
    '20MCA135': {
      name: 'Data Structures Lab',
      language: 'C++',
      icon: '⚡',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      description: 'Implement advanced data structures and algorithms in C++',
      githubRepo: 'https://github.com/mca-website/data-structures-lab',
      gitlabRepo: 'https://gitlab.com/zoxilsi/ds-lab'
    },
    '20MCA132': {
      name: 'Object Oriented Programming Lab',
      language: 'Java',
      icon: '☕',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      description: 'Learn OOP concepts with Java programming and design patterns',
      githubRepo: 'https://github.com/mca-website/oop-java-lab',
      gitlabRepo: 'https://gitlab.com/zoxilsi/OOP'
    },
    '20MCA134': {
      name: 'Advanced DBMS Lab',
      language: 'SQL',
      icon: '🗄️',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-300',
      description: 'Master database management with SQL queries and optimization',
      githubRepo: 'https://github.com/mca-website/dbms-lab-exercises',
      gitlabRepo: 'https://gitlab.com/zoxilsi/dbms'
    },
    '20MCA136': {
      name: 'Networking & System Administration Lab',
      language: 'Linux/Bash',
      icon: '🐧',
      color: 'from-gray-400 to-black',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      description: 'Configure networks and manage systems with Linux commands',
      githubRepo: 'https://github.com/mca-website/networking-lab',
      gitlabRepo: 'https://gitlab.com/zoxilsi/computer-network-and-system-administrtion'
    }
  };

  // Check if it's a lab course
  if (labCourses[course.code]) {
    const lab = labCourses[course.code];
    return (
      <div className={`min-h-screen bg-theme-secondary py-16`}>
        <div className={`max-w-4xl mx-auto px-6 pt-12 pb-6`}>
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 bg-gradient-to-r ${lab.color} rounded-lg border-3 border-theme-primary shadow-[3px_3px_0px_0px_var(--shadow-primary)] flex items-center justify-center`}>
              <span className="text-3xl">{lab.icon}</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-theme-primary mb-1">{lab.name} <span className="text-base font-bold text-theme-muted">({course.code})</span></h1>
              <p className="text-sm text-theme-secondary">{lab.description}</p>
            </div>
          </div>
        </div>

        {/* Minimal Contribution Section */}
        <div className="bg-theme-secondary rounded-xl p-4 border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)] mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded-lg border-2 border-theme-primary shadow-[3px_3px_0px_0px_var(--shadow-primary)] hover:bg-blue-700 transition-all"
              onClick={() => window.open('https://github.com/zoxilsi/KTU_MCA_LAB_WORK', '_blank')}
            >
              <div className="icon-upload text-sm"></div>
              Submit Code
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-bold text-sm rounded-lg border-2 border-theme-primary shadow-[3px_3px_0px_0px_var(--shadow-primary)] hover:bg-green-700 transition-all"
              onClick={() => window.open('mailto:24mp2275@rit.ac.in?subject=Lab Notes for ' + course.code, '_blank')}
            >
              <div className="icon-file-text text-sm"></div>
              Submit Notes
            </button>
          </div>
        </div>

        {/* Repository Links Section */}
        <div className="bg-theme-secondary rounded-xl p-8 border-3 border-theme-primary shadow-[6px_6px_0px_0px_var(--shadow-primary)] mb-8">
          <h2 className="text-2xl font-black text-theme-primary mb-6 text-center">
            <span className="icon-book text-xl mr-2"></span>Repository Links
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-black text-theme-primary mb-4">GitHub Repository</h3>
              <a 
                href={lab.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)] hover:shadow-[6px_6px_0px_0px_var(--shadow-primary)] transition-all`}
              >
                <span className="icon-github text-xl"></span>
                View on GitHub
              </a>
              <p className="text-sm text-theme-secondary mt-2">Find all lab exercises, solutions, and code examples</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-black text-theme-primary mb-4">GitLab Repository</h3>
              <a 
                href={lab.gitlabRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)] hover:shadow-[6px_6px_0px_0px_var(--shadow-primary)] transition-all`}
              >
                <span className="icon-gitlab text-xl"></span>
                View on GitLab
              </a>
              <p className="text-sm text-theme-secondary mt-2">Alternative repository with CI/CD pipelines</p>
            </div>
          </div>
        </div>

        {/* Additional Repository Links */}
        <div className="flex flex-col gap-2 mt-8">
          <a
            href="https://github.com/zoxilsi/KTU_MCA_LAB_WORK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-bold text-sm rounded-lg border-2 border-theme-primary shadow-[3px_3px_0px_0px_var(--shadow-primary)] hover:bg-gray-700 transition-all"
          >
            <div className="icon-github text-base"></div>
            Lab Work Repository
          </a>
        </div>
      </div>
    );
  }

  // Default case for non-lab courses or courses without specific lab data
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Animated Coming Soon Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-yellow-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center animate-pulse">
          <span className="icon-hourglass text-4xl text-white animate-spin"></span>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <span className="icon-clock text-sm text-white"></span>
        </div>
      </div>
      
      {/* Main Heading */}
      <h2 className="text-3xl font-black text-yellow-700 mb-4 text-center">
        Lab Questions Coming Soon!
      </h2>
      
      {/* Subtitle */}
      <p className="text-lg text-theme-secondary mb-6 text-center max-w-md">
        We're working hard to bring you comprehensive lab questions for <span className="font-bold text-theme-primary">{course.code}</span>. 
        Stay tuned for amazing content!
      </p>
      
      {/* Progress Bar */}
      <div className="w-64 bg-theme-tertiary rounded-full h-3 border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)] mb-6">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full animate-pulse" style={{width: '75%'}}></div>
      </div>
      
      {/* Status Badge */}
      <div className="px-4 py-2 bg-yellow-100 border-2 border-yellow-500 rounded-lg text-yellow-700 font-bold mb-6 shadow-[2px_2px_0px_0px_var(--shadow-primary)]">
        <span className="icon-trending-up text-sm mr-2"></span>
        In Development - 75% Complete
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button 
          className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg border-2 border-theme-primary shadow-[3px_3px_0px_0px_var(--shadow-primary)] hover:shadow-[5px_5px_0px_0px_var(--shadow-primary)] hover:bg-yellow-600 transition-all flex items-center gap-2"
          onClick={() => window.open('https://github.com/mca-website/contribute', '_blank')}
        >
          <span className="icon-github text-lg"></span>
          Contribute Questions
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg border-2 border-theme-primary shadow-[3px_3px_0px_0px_var(--shadow-primary)] hover:shadow-[5px_5px_0px_0px_var(--shadow-primary)] hover:bg-blue-600 transition-all flex items-center gap-2"
          onClick={() => window.open('mailto:contact@mca-website.com?subject=Lab Questions Request for ' + course.code, '_blank')}
        >
          <span className="icon-mail text-lg"></span>
          Request Questions
        </button>
      </div>
      
      {/* Fun Facts */}
      <div className="mt-8 p-4 bg-theme-tertiary rounded-lg border-2 border-theme-secondary max-w-md">
        <h4 className="font-bold text-theme-primary mb-2 flex items-center gap-2">
          <span className="icon-lightbulb text-yellow-500"></span>
          Did You Know?
        </h4>
        <p className="text-sm text-theme-secondary">
          Our lab questions are created by students, for students! Each question is carefully crafted to make learning easier and more engaging.
        </p>
      </div>
    </div>
  );
}

export default LabQuestions;
function LabQuestions({ course }) {
  // Special design for Laboratory courses with programming language themes
  const labCourses = {
    '20MCA131': {
      name: 'Programming Lab',
      language: 'Python',
      icon: '🐍',
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-50',
      darkBgColor: 'dark:bg-gray-900',
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
      darkBgColor: 'dark:bg-gray-900',
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
      darkBgColor: 'dark:bg-gray-900',
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
      darkBgColor: 'dark:bg-gray-900',
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
      darkBgColor: 'dark:bg-gray-900',
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
      darkBgColor: 'dark:bg-gray-900',
      borderColor: 'border-gray-300',
      description: 'Configure networks and manage systems with Linux commands',
      githubRepo: 'https://github.com/mca-website/networking-lab',
      gitlabRepo: 'https://gitlab.com/zoxilsi/computer-network-and-system-administrtion'
    }
  };
  
 ///ADDED Lab Notes for Semester 1 (Programming Lab , Web Programming Lab)
  if (course && course.code ==='20MCA131') {
  const modules = [
    {
      name: 'Programming Lab',
     files: [
        { name: 'Python.pdf', path: 'https://drive.google.com/uc?export=download&id=1xYNbAFwheESwjtMx84u5KaPIjO1Eac9A' },
        { name: 'Tuples and Dictionary.pdf', path: 'https://drive.google.com/uc?export=download&id=1cTlqwN1Kw9fFHDSuIvUZ3_3bY-UFylQd' },
        { name: 'OOPs Intro.pdf', path: 'https://drive.google.com/uc?export=download&id=1ssR5CCVWX2VslkubHE7qJzdIZHUyGsuD' },
        { name: 'Class Part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1UJhXTiZS9g13-uVzUiwc7Nlfr6mCtmI6' },
        { name: 'Class Part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=16DsmJlEMQFzGzWb8QkLaDPJ63O4V8xX5' },
        { name: 'Polymorphism.pdf', path: 'https://drive.google.com/uc?export=download&id=1d1mNjSC9vt-5ufo3qNABInNnMvVHkJCT' },
        { name: 'Abstract Class.pdf', path: 'https://drive.google.com/uc?export=download&id=1502AadJB_t1HJmnb0JZTlJ3A-RyGvK0X' },
        { name: 'File Handling.pdf', path: 'https://drive.google.com/uc?export=download&id=1yfe2C4x4KbBr6aN3ULd62ZnD9tsMRoTa' },
        { name: 'Regular Expression.pdf', path: 'https://drive.google.com/uc?export=download&id=1Jtm3Fl4UDkt9UJGYak2TGXZe9dGBhyz_' },
        { name: 'CSV.pdf', path: 'https://drive.google.com/uc?export=download&id=1Agog0G6UphqWLlxcqzDhm6RcArmOmEAT' },
      ],
    },
  ];
  return (
      <div className="space-y-8">
        {modules.map((module) => (
          <div key={module.name}>
            <h3 className="font-bold text-lg mb-2 dark:text-white">{module.name}</h3>
            <div className="space-y-2">
              {module.files.map((file) => (
                <a
                  key={file.name}
                  href={file.path}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition-all text-blue-700 dark:text-blue-400 font-semibold"
                >
                  <span className="icon-download text-lg"></span>
                  <span>{file.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (course && course.code === '20MCA133') {
  const modules = [
    {
      name: 'Web Programming Lab',
      files: [
        { name: 'HTML Introduction', path: 'https://drive.google.com/uc?export=download&id=1wAlQC_SGj6nfCb6SVTOg9fhT00RdkHlv' },
        { name: 'HTML Hyperlink', path: 'https://drive.google.com/uc?export=download&id=1qS_ZmCGpUBkpn4z3xB-VFhaIYShbrg4M' },
        { name: 'HTML Part 3', path: 'https://drive.google.com/uc?export=download&id=1LiN9yQHuo8QA2pGcLGmUAjMTTwWOtqWH' },
        { name: 'Font & Background', path: 'https://drive.google.com/uc?export=download&id=16T9jerIfXaZ8aalMcgJC4_IstNIYZTIg' },
        { name: 'HTML Forms', path: 'https://drive.google.com/uc?export=download&id=1P2qeERTX8wGzRdDOUui_VAXrngh1bPMK' },
        { name: 'Iframes', path: 'https://drive.google.com/uc?export=download&id=15mMHZWFzw5tnhQil3yvBluZGwnTID-zg' },
        { name: 'CSS Introduction', path: 'https://drive.google.com/uc?export=download&id=1ak1rvNMlOF63mG1r_ZlpEeADwChC-3x6' },
        { name: 'JavaScript Introduction', path: 'https://drive.google.com/uc?export=download&id=1wtUxI9fNBgl-Fb65YL1INcgW9JX9VOp_' },
        { name: 'JavaScript Objects', path: 'https://drive.google.com/uc?export=download&id=1PHLMlizgIyWFxYMwCm8-iVyGb8zOqF1-' },
        { name: 'JavaScript Validation', path: 'https://drive.google.com/uc?export=download&id=1uj33PMjtTUL-upiCQSZZkgsi1A0Ac0MA' },
        { name: 'PHP Basics', path: 'https://drive.google.com/uc?export=download&id=1L0nJ2TWS49hL0Ee9N-hSCSCn6sSd-HsB' },
        { name: 'PHP Operators', path: 'https://drive.google.com/uc?export=download&id=1JH_3mndp5y2Cii87JSthW7HQ1TqT5MxW' },
        { name: 'Array', path: 'https://drive.google.com/uc?export=download&id=1cif-lW1lF5betGA_ADX8sSFxyC9gEiNq' },
        { name: 'MySQL', path: 'https://drive.google.com/uc?export=download&id=1LA9iXIzbCPNi8UlK9MCnoQTZ8D40nwF2' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {modules.map((module) => (
        <div key={module.name}>
          <h3 className="font-bold text-lg mb-2 dark:text-white">{module.name}</h3>
          <div className="space-y-2">
            {module.files.map((file) => (
              <a
                key={file.name}
                href={file.path}
                download
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition-all text-blue-700 dark:text-blue-400 font-semibold"
              >
                <span className="icon-download text-lg"></span>
                <span>{file.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
///
  // Check if it's a lab course
  if (labCourses[course.code] ) { ////
    const lab = labCourses[course.code];
    return (
      <div className={`min-h-screen ${lab.bgColor} ${lab.darkBgColor} py-16`}>
        <div className={`max-w-4xl mx-auto px-6 pt-12 pb-6`}>
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 bg-gradient-to-r ${lab.color} rounded-lg border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
              <span className="text-3xl">{lab.icon}</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-black dark:text-white mb-1">{lab.name} <span className="text-base font-bold text-gray-500 dark:text-gray-400">({course.code})</span></h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">{lab.description}</p>
            </div>
          </div>
        </div>

        {/* Minimal Contribution Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:bg-blue-700 transition-all"
              onClick={() => window.open('https://github.com/zoxilsi/KTU_MCA_LAB_WORK', '_blank')}
            >
              <div className="icon-upload text-sm"></div>
              Submit Code
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-bold text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:bg-green-700 transition-all"
              onClick={() => window.open('mailto:24mp2275@rit.ac.in?subject=Lab Notes for ' + course.code, '_blank')}
            >
              <div className="icon-file-text text-sm"></div>
              Submit Notes
            </button>
          </div>
        </div>

        {/* Repository Links Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] mb-8">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6 text-center">
            <span className="icon-book text-xl mr-2"></span>Repository Links
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-black text-gray-800 dark:text-white mb-4">GitHub Repository</h3>
              <a 
                href={lab.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all`}
              >
                <span className="icon-github text-xl"></span>
                View on GitHub
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Find all lab exercises, solutions, and code examples</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-black text-gray-800 dark:text-white mb-4">GitLab Repository</h3>
              <a 
                href={lab.gitlabRepo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all`}
              >
                <span className="icon-gitlab text-xl"></span>
                View on GitLab
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Alternative repository with CI/CD pipelines</p>
            </div>
          </div>
        </div>

        {/* Additional Repository Links */}
        <div className="flex flex-col gap-2 mt-8">
          <a
            href="https://github.com/zoxilsi/KTU_MCA_LAB_WORK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white font-bold text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:bg-gray-700 dark:hover:bg-gray-600 transition-all"
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
      <h2 className="text-3xl font-black text-yellow-700 dark:text-yellow-300 mb-4 text-center">
        Lab Questions Coming Soon!
      </h2>
      
      {/* Subtitle */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">
        We're working hard to bring you comprehensive lab questions for <span className="font-bold text-black dark:text-white">{course.code}</span>. 
        Stay tuned for amazing content!
      </p>
      
      {/* Progress Bar */}
      <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] mb-6">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full animate-pulse" style={{width: '75%'}}></div>
      </div>
      
      {/* Status Badge */}
      <div className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/20 border-2 border-yellow-500 rounded-lg text-yellow-700 dark:text-yellow-300 font-bold mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
        <span className="icon-trending-up text-sm mr-2"></span>
        In Development - 75% Complete
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button 
          className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] hover:bg-yellow-600 transition-all flex items-center gap-2"
          onClick={() => window.open('https://github.com/mca-website/contribute', '_blank')}
        >
          <span className="icon-github text-lg"></span>
          Contribute Questions
        </button>
        
        <button 
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.9)] hover:bg-blue-600 transition-all flex items-center gap-2"
          onClick={() => window.open('mailto:contact@mca-website.com?subject=Lab Questions Request for ' + course.code, '_blank')}
        >
          <span className="icon-mail text-lg"></span>
          Request Questions
        </button>
      </div>
      
      {/* Fun Facts */}
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-700 max-w-md">
        <h4 className="font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
          <span className="icon-lightbulb text-yellow-500"></span>
          Did You Know?
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Our lab questions are created by students, for students! Each question is carefully crafted to make learning easier and more engaging.
        </p>
      </div>
    </div>
  );
}
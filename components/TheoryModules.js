function TheoryModules({ courseCode }) {
  // Special design for Laboratory courses
  const labCourses = {
    // '20MCA131': {
    //   name: 'Programming Lab',
    //   language: 'Python',
    //   icon: '🐍',
    //   color: 'from-green-400 to-blue-500',
    //   bgColor: 'bg-green-50',
    //   darkBgColor: 'dark:bg-gray-900',
    //   borderColor: 'border-green-300',
    //   description: 'Master Python programming with hands-on projects and real-world applications'
    // },
    // '20MCA133': {
    //   name: 'Web Programming Lab',
    //   language: 'HTML/CSS/JS',
    //   icon: '🌐',
    //   color: 'from-blue-400 to-purple-500',
    //   bgColor: 'bg-blue-50',
    //   darkBgColor: 'dark:bg-gray-900',
    //   borderColor: 'border-blue-300',
    //   description: 'Build stunning websites with modern web technologies and frameworks'
    // },
    '20MCA135': {
      name: 'Data Structures Lab',
      language: 'C++',
      icon: '⚡',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      darkBgColor: 'dark:bg-gray-900',
      borderColor: 'border-purple-300',
      description: 'Implement advanced data structures and algorithms in C++'
    },
    '20MCA132': {
      name: 'Object Oriented Programming Lab',
      language: 'Java',
      icon: '☕',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      darkBgColor: 'dark:bg-gray-900',
      borderColor: 'border-orange-300',
      description: 'Learn OOP concepts with Java programming and design patterns'
    },
    '20MCA134': {
      name: 'Advanced DBMS Lab',
      language: 'SQL',
      icon: '🗄️',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50',
      darkBgColor: 'dark:bg-gray-900',
      borderColor: 'border-indigo-300',
      description: 'Master database management with SQL queries and optimization'
    },
    '20MCA136': {
      name: 'Networking & System Administration Lab',
      language: 'Linux/Bash',
      icon: '🐧',
      color: 'from-gray-400 to-black',
      bgColor: 'bg-gray-50',
      darkBgColor: 'dark:bg-gray-900',
      borderColor: 'border-gray-300',
      description: 'Configure networks and manage systems with Linux commands'
    }
  };

  // Check if it's a lab course
  if (labCourses[courseCode]) {
    const lab = labCourses[courseCode];
    return (
      <div className={`min-h-screen ${lab.bgColor} ${lab.darkBgColor} py-16`}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className={`w-32 h-32 bg-gradient-to-r ${lab.color} rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center animate-pulse`}>
                <span className="text-6xl">{lab.icon}</span>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full border-3 border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center animate-bounce">
                <span className="icon-code text-white text-lg"></span>
              </div>
            </div>
            
            <h1 className="text-4xl font-black text-gray-800 dark:text-white mb-4">
              {lab.name} Coming Soon!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {lab.description}
            </p>
            
            {/* Language Badge */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]`}>
              <span className="text-2xl">{lab.icon}</span>
              <span className="text-lg">{lab.language}</span>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] mb-8">
            <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6 text-center">Development Progress</h2>
            
            <div className="space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                  <span>Lab Setup</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                  <span>Project Development</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                  <span>Documentation</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${lab.color} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                  <span className="icon-play text-white text-lg"></span>
                </div>
                <h3 className="text-lg font-black text-gray-800 dark:text-white">Hands-on Projects</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Real-world projects that will build your portfolio and practical skills</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${lab.color} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center`}>
                  <span className="icon-users text-white text-lg"></span>
                </div>
                <h3 className="text-lg font-black text-gray-800 dark:text-white">Expert Guidance</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Step-by-step tutorials and expert tips to master the concepts</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                className={`px-8 py-4 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all flex items-center gap-2`}
                onClick={() => window.open('https://github.com/zoxilsi/MCA-KTU-STUDY-MATERIAL', '_blank')}
              >
                <span className="icon-github text-xl"></span>
                Contribute Code
              </button>
              
              <button 
                className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all flex items-center gap-2"
                onClick={() => window.open('mailto:24mp2275@rit.ac.in?subject=Lab Request for ' + courseCode, '_blank')}
              >
                <span className="icon-mail text-xl"></span>
                Request Lab
              </button>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Be the first to know when this lab is ready! 🎯
            </p>
          </div>
        </div>
      </div>
    );
  }
  // Custom structure for 20MCA102
  if (courseCode === '20MCA102') {
    const modules = [
      {
        name: 'MODULE 1',
        files: [
          { name: 'M1.2_ER_model.pdf', path: 'notes/semester_ii/20MCA102/M1.2_ER_model.pdf' },
          { name: 'M1.3_er_diagram_to_table.pdf', path: 'notes/semester_ii/20MCA102/M1.3_er_diagram_to_table.pdf' },
          { name: 'M1.4_relational_algebra.pdf', path: 'notes/semester_ii/20MCA102/M1.4_relational_algebra.pdf' },
        ],
      },
      {
        name: 'MODULE 2',
        files: [
          { name: 'M2.1_database_design.pdf', path: 'notes/semester_ii/20MCA102/M2.1_database_design.pdf' },
          { name: 'M2.2_examp_minimal_set_fd.pdf', path: 'notes/semester_ii/20MCA102/M2.2_examp_minimal_set_fd.pdf' },
          { name: 'M2.3_equivalence_of_fd.pdf', path: 'notes/semester_ii/20MCA102/M2.3_equivalence_of_fd.pdf' },
          { name: 'M2.4_Normal_forms__module_2.pdf', path: 'notes/semester_ii/20MCA102/M2.4_Normal_forms__module_2.pdf' },
          { name: 'M2.5_surrogate_key.pdf', path: 'notes/semester_ii/20MCA102/M2.5_surrogate_key.pdf' },
          { name: 'M2.6_keys.pdf', path: 'notes/semester_ii/20MCA102/M2.6_keys.pdf' },
          { name: 'M2.7_steps_for_minimal_cover.pdf', path: 'notes/semester_ii/20MCA102/M2.7_steps_for_minimal_cover.pdf' },
        ],
      },
      {
        name: 'MODULE 3',
        files: [
          { name: 'M3.1_Transactions.pdf', path: 'notes/semester_ii/20MCA102/M3.1_Transactions.pdf' },
          { name: 'M3_TEXT_BOOK.pdf', path: 'notes/semester_ii/20MCA102/M3_TEXT_BOOK.pdf' },
        ],
      },
      {
        name: 'MODULE 4',
        files: [
          { name: 'M4.1_RAID-1.pdf', path: 'notes/semester_ii/20MCA102/M4.1_RAID-1.pdf' },
          { name: 'M4.2_File_Organization_compressed.pdf', path: 'notes/semester_ii/20MCA102/M4.2_File_Organization_compressed.pdf' },
          { name: 'M4.3_organization_of_records_in_files.pdf', path: 'notes/semester_ii/20MCA102/M4.3_organization_of_records_in_files.pdf' },
          { name: 'M4.4_indexing_.pdf', path: 'notes/semester_ii/20MCA102/M4.4_indexing_.pdf' },
          { name: 'M4.5_indexing-1.pdf', path: 'notes/semester_ii/20MCA102/M4.5_indexing-1.pdf' },
          { name: 'M4.6_B_tree_and_B_tree_part_1.pdf', path: 'notes/semester_ii/20MCA102/M4.6_B_tree_and_B_tree_part_1.pdf' },
          { name: 'M4.7_Indexing_-_Part_2-2.pdf', path: 'notes/semester_ii/20MCA102/M4.7_Indexing_-_Part_2-2.pdf' },
          { name: 'M4.8_B__tree_part_-2.pdf', path: 'notes/semester_ii/20MCA102/M4.8_B__tree_part_-2.pdf' },
          { name: 'M4.9_hashing.pdf', path: 'notes/semester_ii/20MCA102/M4.9_hashing.pdf' },
          { name: 'M4.10_query_processing.pdf', path: 'notes/semester_ii/20MCA102/M4.10_query_processing.pdf' },
          { name: 'M4.11_selection_operation_compressed.pdf', path: 'notes/semester_ii/20MCA102/M4.11_selection_operation_compressed.pdf' },
        ],
      },
      {
        name: 'MODULE 5',
        files: [
          { name: 'M5.1_Distributed_Databases.pdf', path: 'notes/semester_ii/20MCA102/M5.1_Distributed_Databases.pdf' },
          { name: 'M5.2_NoSQL_Databases.pdf', path: 'notes/semester_ii/20MCA102/M5.2_NoSQL_Databases.pdf' },
          { name: 'M5.3_Distributed_text_book.pdf', path: 'notes/semester_ii/20MCA102/M5.3_Distributed_text_book.pdf' },
          { name: 'M5.5_application_of_xml.pdf', path: 'notes/semester_ii/20MCA102/M5.5_application_of_xml.pdf' },
          { name: 'M5.6_mongoDB.pdf', path: 'notes/semester_ii/20MCA102/M5.6_mongoDB.pdf' },
          { name: 'M5.7_Object_Database-2.pdf', path: 'notes/semester_ii/20MCA102/M5.7_Object_Database-2.pdf' },
          { name: 'M5.8_Next_Generation_Databases-HBASE-1.pdf', path: 'notes/semester_ii/20MCA102/M5.8_Next_Generation_Databases-HBASE-1.pdf' },
          { name: 'M5.9_Cassandra-1.pdf', path: 'notes/semester_ii/20MCA102/M5.9_Cassandra-1.pdf' },
          { name: 'M5.10_Next_Generation_Databases_NoSQL_NewSQL_a.pdf', path: 'notes/semester_ii/20MCA102/M5.10_Next_Generation_Databases_NoSQL_NewSQL_a.pdf' },
          { name: 'M5.11_DDISTRIBUTED_NON_RELATIONAL_DISTRIBUTED.pdf', path: 'notes/semester_ii/20MCA102/M5.11_DDISTRIBUTED_NON_RELATIONAL_DISTRIBUTED.pdf' },
          { name: 'M5.12_selection_operation_compressed.pdf', path: 'notes/semester_ii/20MCA102/M5.12_selection_operation_compressed.pdf' },
        ],
      },
    ];
    return (
      <div className="space-y-8">
        {modules.map((module, idx) => (
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

  // Custom structure for 20MCA107 Advanced Software Engineering
if (courseCode === '20MCA107') {
  const modules = [
    {
      name: 'MODULE 1',
      files: [
        { name: 'Module 1 part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1duMz6xZZOsuGbl2gL6t9vXWt3gU3mfKQ' },
        { name: 'Module 1 part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1Jeba2OgTFSwygKRmdvVTsx75c_RszH3p' },
        { name: 'Module 1 part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=1T0TotHjvokkiKYP54EwY6bd9ps4UFV2E' },
        { name: 'Module 1 part 4.pdf', path: 'https://drive.google.com/uc?export=download&id=1GHxAn2LvmMd84MKgL_ZfPIiObmaZElVL' },
        { name: 'Module 1 part 5.pdf', path: 'https://drive.google.com/uc?export=download&id=1qu4J4oiQN5ESMUClPwfThuoMyzA24EtA' },
        { name: 'Module 1 part 6.pdf', path: 'https://drive.google.com/uc?export=download&id=1-kacF2DSxDo44idmyn3FGMgbdDg4DgYV' },
      ],
    },
    {
      name: 'MODULE 2',
      files: [
        { name: 'Module 2 part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1TwlUg_EEJAV9jZG60BUTJMiJ33Ng4Fr2' },
        { name: 'Module 2 part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1Nvr7JitzyXIjJ9oj6CQnPa3mANlE2dEG' },
        { name: 'Module 2 part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=1CLoIIzh3lTmkRpIyyMFEgbUhNuXzHTWy' },
        { name: 'Module 2 part 4.pdf', path: 'https://drive.google.com/uc?export=download&id=1QbQ2i0y94cWX4xZ6OwZKo9RiEzPMIBE8' },
      ],
    },
    {
      name: 'MODULE 3',
      files: [
        { name: 'Module 3 part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1TBYMlxtRRGsWL7wueW8NqvSoFkAOkeR-' },
        { name: 'Module 3 part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1jPsI43Wr1aK5Ms-2axurGIW2jqMqCE4M' },
        { name: 'Module 3 part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=1q9yZgOZIaGIpTg15O2Xd9NO4Pd0SiNGi' },
        { name: 'Module 3 part 4.pdf', path: 'https://drive.google.com/uc?export=download&id=1s2p6C1q5uXqaWd0g8aVcoVxF-GNxVKNh' },
        { name: 'Module 3 part 5.pdf', path: 'https://drive.google.com/uc?export=download&id=1nuDsmNi2G1h-77jxwdtFiq8q52CBjoqY' },
        { name: 'Module 3 part 6.pdf', path: 'https://drive.google.com/uc?export=download&id=1S3BUnCl-pyxTqPaQdsrxyjh29xX9gmkw' },
      ],
    },
    {
      name: 'MODULE 4',
      files: [
        { name: 'Module 4 part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1qRlJktmvhZ8bUdLx-9r5njqwwWStO6IH' },
        { name: 'Module 4 part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=17sri11kdse-2qgUzyZ3FsKwMT9HmTqTe' },
      ],
    },
    {
      name: 'MODULE 5',
      files: [
        { name: 'Module 5 part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1tRru-CxN_G4sISex-C4okaFk7KZzvNRe' },
        { name: 'Module 5 part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1YuMlJUkvLo67bxv_EG_qGrBVfLBDQeHv' },
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

  // Custom structure for 20MCA188 Artificial Intelligence
if (courseCode === '20MCA188') {
  const modules = [
    {
      name: 'MODULE 1',
      files: [
        { name: 'M1.pdf', path: 'https://drive.google.com/uc?export=download&id=1D00BZ752JeYD21ENUbLGWRjGR6D0A2IV' },
      ],
    },
    {
      name: 'MODULE 2',
      files: [
        { name: 'M2.pdf', path: 'https://drive.google.com/uc?export=download&id=1sXBo4vPS6Ql5Do7BktXdhi2PsVM2vMWo' },
      ],
    },
    {
      name: 'MODULE 3',
      files: [
        { name: 'M3.1_Game_theory.pdf', path: 'https://drive.google.com/uc?export=download&id=10zOt6BBD3N5ptzvuRf7ritLge1jTRgmc' },
      ],
    },
    {
      name: 'MODULE 4',
      files: [
        { name: 'M4.1_FOPL_and_Inference_Rules.pdf', path: 'https://drive.google.com/uc?export=download&id=1C-zEwXw5qINy9v8tXkarhXCzQIhByk5L' },
        { name: 'M4.2_FOPL.pdf', path: 'https://drive.google.com/uc?export=download&id=1CUrcjaH2qz-StC8pefpqLk4Y8Qg8AXep' },
        { name: 'M4.3_Planning.pdf', path: 'https://drive.google.com/uc?export=download&id=1UWn70-0K7f3sPRR4LtIR9ZCee1e49dJO' },
        { name: 'M4.4_BlocksWorld-Goal_Stack.pdf', path: 'https://drive.google.com/uc?export=download&id=1WJKEGhnoenOnYh2gbTj0JSL70dxAf73n' },
        { name: 'M4.5Learning.pdf', path: 'https://drive.google.com/uc?export=download&id=1lRxXyrY0O2uYL-uGLJk6wgGARa-FhVmz' },
      ],
    },
    {
      name: 'MODULE 5',
      files: [
        { name: 'M5.1_Expert_Systems.pdf', path: 'https://drive.google.com/uc?export=download&id=188rlDKmOmTB_HWUcRA6WVpg2nBYpU6Wg' },
        { name: 'M5.2_Fuzzy_Logic.pdf', path: 'https://drive.google.com/uc?export=download&id=1nzyzoR7XSsWwEvS5PeoHXgstlShNbjWd' },
      ],
    },
    {
      name: 'Text Book',
      files: [
        { name: 'Text Book- Elaine Rich.pdf', path: 'notes/semester_ii/20MCA188/Text Book- Elaine Rich.pdf', copyrighted: true },
      ],
    },
  ];

    const hasNotes = modules.some(module => module.files && module.files.length > 0);
    if (!hasNotes) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/20 border-4 border-yellow-500 rounded-full flex items-center justify-center mb-4">
            <span className="icon-hourglass text-3xl text-yellow-500"></span>
          </div>
          <h2 className="text-2xl font-black text-yellow-700 dark:text-yellow-300 mb-2">Notes Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Notes for this subject will be available soon. Want to help?</p>
          <a href="https://github.com/zoxilsi/MCA-KTU-STUDY-MATERIAL" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:bg-yellow-600 transition-all">Contribute Notes</a>
        </div>
      );
    }
    return (
      <div className="space-y-8">
        {modules.map((module, idx) => (
          <div key={module.name}>
            <h3 className="font-bold text-lg mb-2 dark:text-white">{module.name}</h3>
            <div className="space-y-2">
              {module.files.length === 0 ? (
                <div className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/20 border-2 border-yellow-500 rounded-lg text-yellow-700 dark:text-yellow-300 font-semibold inline-block">Coming Soon</div>
              ) : (
                module.files.map((file) => (
                  file.copyrighted ? (
                    <div
                      key={file.name}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg text-gray-500 dark:text-gray-400 italic font-medium"
                    >
                      <span className="icon-lock text-lg"></span>
                      <span>{file.name} – Copyrighted Material (Not Available for Download)</span>
                    </div>
                  ) : (
                    <a
                      key={file.name}
                      href={file.path}
                      download
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition-all text-blue-700 dark:text-blue-400 font-semibold"
                    >
                      <span className="icon-download text-lg"></span>
                      <span>{file.name}</span>
                    </a>
                  )
                ))
              )}
            </div>
          </div>
        ))}
        <div className="mt-8 flex justify-center">
          <a href="https://github.com/zoxilsi/MCA-KTU-STUDY-MATERIAL" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:bg-yellow-600 transition-all">Contribute Notes</a>
        </div>
      </div>
    );
  }

if (courseCode === '20MCA103') {
  const modules = [
    {
      name: 'MODULE 1',
      files: [
        { name: 'Module 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1S1LfaUv75YM4Shk__-WuCBZPXm6GYkLO' },
      ],
    },
    {
      name: 'MODULE 2',
      files: [
        { name: 'Module 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1Hp8yevPAKEzUeBNwnqYL5sZxp7D-yjlu' },
      ],
    },
    {
      name: 'MODULE 3',
      files: [
        { name: 'Module 3 Part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1bX7dAYQw3KPlPqLHsNiumVaYj0WB074a' },
        { name: 'Module 3 Part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1aEyaf2jUXCi9DasBMDgDRsH5_GT8uwT4' },
        { name: 'Module 3 Part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=10RlyIB09UYti9fE0FAxLJEbzY-PFCnmR' },
        { name: 'Module 3 Part 4.pdf', path: 'https://drive.google.com/uc?export=download&id=1P7Q4Qler_wrZxv5HIZUijAFA0nIL_Zpa' },
        { name: 'Module 3 Part 5.pdf', path: 'https://drive.google.com/uc?export=download&id=1IIefn-u7mWaoshlLCKfAhA9up3kXb-Ji' },
      ],
    },
    {
      name: 'MODULE 4',
      files: [
        { name: 'Module 4 Part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1MwUy3qbc8SMw1aEwytVaERG5O_y-4Zjw' },
        { name: 'Module 4 Part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1oqv7Q7J7nPGFqmdJk_Qaoy6oWKsxpIei' },
        { name: 'Module 4 Part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=1zh_2RsQMJWy9Bq2K7UUQkROrQOuBoZZn' },
        { name: 'Module 4 Part 4.pdf', path: 'https://drive.google.com/uc?export=download&id=1f-mArYxT3FYBEr4l1fDMJslD3Fled2Ju' },
        { name: 'Module 4 Part 5.pdf', path: 'https://drive.google.com/uc?export=download&id=1H-INIITmdcKzlxjc4V8-ru0hcVVEc8As' },
      ],
    },
    {
      name: 'MODULE 5',
      files: [
        { name: 'Module 5 Part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1NcqG0N7JGgDHJHaGbWMykw2IWiV3W_1B' },
        { name: 'Module 5 Part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1CA_VIUo4iDbbiDKsppijK6uMaxZebkKO' },
        { name: 'Module 5 Part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=1Yruoo1k1lXIPofyi0uLYImUzm85_9A-f' },
        { name: 'Module 5 Part 4.pdf', path: 'https://drive.google.com/uc?export=download&id=1-AgLldwyml25PGXGGlEhbhuHhOvAXzpB' },
        { name: 'Module 5 Part 5.pdf', path: 'https://drive.google.com/uc?export=download&id=1WEpLm0n4NS5N-RcXy6GU6iu8GQfwmk9V' },
      ],
    },
  ];

    return (
      <div className="space-y-8">
        {modules.map((module, idx) => (
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

  // Custom structure for 20MCA104 Advanced Computer Networks
if (courseCode === '20MCA104') {
  const modules = [
    {
      name: 'MODULE 1',
      files: [
        { name: 'Module 1 Part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1CdimsDoURRmOqh8MK5p1Sfu4zg8PrxX4' },
        { name: 'Module 1 Part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1B6KMWx20AdwTczZwhh7VEg0kX0Hzblfb' },
        { name: 'Module 1 Part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=1pGCLO1cuXSvsXw4Y7N1yE0CnEpR6fIku' },
        { name: 'Module 1 Part 4.pdf', path: 'https://drive.google.com/uc?export=download&id=1lGnFPDTHw8zz_7X41ayyCrfl9IVr-6J1' },
        { name: 'Module 1 Part 5.pdf', path: 'https://drive.google.com/uc?export=download&id=1mSevODKJ8u1YcoEJPuTYhsWwhO99RCBr' },
        { name: 'Module 1 Part 6.pdf', path: 'https://drive.google.com/uc?export=download&id=1Q61GizUCsrRV2eNV9ZT4BBhdKVL0GGYe' },
        { name: 'Module 1 Part 7.pdf', path: 'https://drive.google.com/uc?export=download&id=1u7-ItXnIsZEp7MOiw6yM8n1FFOPP6a_a' },
        { name: 'Module 1 Part 8.pdf', path: 'https://drive.google.com/uc?export=download&id=1LpAHEyMl4f5h2TnXl1UzLw2NSKw31Bq1' },
      ],
    },
    {
      name: 'MODULE 2',
      files: [
        { name: 'Module 2 Part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=142gB8wCGYou4tK8zNryUNB9G845vAWq6' },
        { name: 'Module 2 Part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1vx8T5wdBdNW6XDTlgHtDLTl_-i-zq-ks' },
        { name: 'Module 2 Part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=1tpMwyCkCoaYVTR-gSgPGCEWVh8UXIcuG' },
        { name: 'Module 2 Part 4.pdf', path: 'https://drive.google.com/uc?export=download&id=1rcsYfBQv4DMD85-mj4UcKai_7Mpg14OP' },
      ],
    },
    {
      name: 'MODULE 3',
      files: [
        { name: 'Module 3 Part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1QUU2chrBSlvmdcF_CmyYgXfKQvw0KW10' },
        { name: 'Module 3 Part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=1P7bKnHBMM-ZV56Q_cXN01PEGlam8FU_B' },
        { name: 'Module 3 Part 3.pdf', path: 'https://drive.google.com/uc?export=download&id=14iVMP5EOcnWnUT-y9aawfyY9xTy3AVdT' },
      ],
    },
    {
      name: 'MODULE 4',
      files: [
        { name: 'Module 4 Part 1.pdf', path: 'https://drive.google.com/uc?export=download&id=1p_pOexYAzSu9WO0v6Ff4XtrknKiLFyUt' },
        { name: 'Module 4 Part 2.pdf', path: 'https://drive.google.com/uc?export=download&id=18SAgJhob7YMnfoFPJOIfd5dGgp-w8-yB' },
      ],
    },
    {
      name: 'MODULE 5',
      files: [
        { name: 'Module 5.pdf', path: 'https://drive.google.com/uc?export=download&id=1rx_dftXXX1Tu6CYndqzIfwnrZfHhhIxC' },
      ],
    },
  ];
    return (
      <div className="space-y-8">
        {modules.map((module, idx) => (
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

  // Default case for courses without notes - Show Coming Soon
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mb-4">
        <span className="icon-book-open text-white text-3xl"></span>
      </div>
      <h2 className="text-3xl font-black text-pink-600 dark:text-pink-400 mb-4 text-center">
        Notes Coming Soon!
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">
        We're working hard to bring you comprehensive notes for <span className="font-bold text-black dark:text-white">{courseCode}</span>. Stay tuned for amazing content!
      </p>
      <p className="text-base text-gray-700 dark:text-gray-400 mb-4 text-center max-w-md">
        Want to help? <a href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-bold">Contribute & Share on GitHub</a> to make this website better for everyone!
      </p>
      <a
        href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-5 py-2 bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] transition-all"
        >
        <span className="icon-github text-lg mr-2"></span>
        View & Contribute on GitHub
      </a>
    </div>
  );
}
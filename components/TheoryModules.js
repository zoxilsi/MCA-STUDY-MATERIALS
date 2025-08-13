function TheoryModules({ courseCode }) {
  // Special design for Laboratory courses
  const labCourses = {
    '20MCA131': {
      name: 'Programming Lab',
      language: 'Python',
      icon: '🐍',
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      description: 'Master Python programming with hands-on projects and real-world applications'
    },
    '20MCA133': {
      name: 'Web Programming Lab',
      language: 'HTML/CSS/JS',
      icon: '🌐',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      description: 'Build stunning websites with modern web technologies and frameworks'
    },
    '20MCA135': {
      name: 'Data Structures Lab',
      language: 'C++',
      icon: '⚡',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      description: 'Implement advanced data structures and algorithms in C++'
    },
    '20MCA132': {
      name: 'Object Oriented Programming Lab',
      language: 'Java',
      icon: '☕',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      description: 'Learn OOP concepts with Java programming and design patterns'
    },
    '20MCA134': {
      name: 'Advanced DBMS Lab',
      language: 'SQL',
      icon: '🗄️',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-300',
      description: 'Master database management with SQL queries and optimization'
    },
    '20MCA136': {
      name: 'Networking & System Administration Lab',
      language: 'Linux/Bash',
      icon: '🐧',
      color: 'from-gray-400 to-black',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      description: 'Configure networks and manage systems with Linux commands'
    }
  };

  // Check if it's a lab course
  if (labCourses[courseCode]) {
    const lab = labCourses[courseCode];
    return (
      <div className={`min-h-screen bg-theme-secondary py-16`}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className={`w-32 h-32 bg-gradient-to-r ${lab.color} rounded-full border-4 border-theme-primary shadow-[6px_6px_0px_0px_var(--shadow-primary)] flex items-center justify-center animate-pulse`}>
                <span className="text-6xl">{lab.icon}</span>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full border-3 border-white shadow-[3px_3px_0px_0px_var(--shadow-primary)] flex items-center justify-center animate-bounce">
                <span className="icon-code text-white text-lg"></span>
              </div>
            </div>
            
            <h1 className="text-4xl font-black text-theme-primary mb-4">
              {lab.name} Coming Soon!
            </h1>
            <p className="text-xl text-theme-secondary mb-6 max-w-2xl mx-auto">
              {lab.description}
            </p>
            
            {/* Language Badge */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${lab.color} text-white font-bold rounded-full border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]`}>
              <span className="text-2xl">{lab.icon}</span>
              <span className="text-lg">{lab.language}</span>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-theme-secondary rounded-xl p-8 border-3 border-theme-primary shadow-[6px_6px_0px_0px_var(--shadow-primary)] mb-8">
            <h2 className="text-2xl font-black text-theme-primary mb-6 text-center">Development Progress</h2>
            
            <div className="space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm font-bold text-theme-secondary mb-2">
                  <span>Lab Setup</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-theme-tertiary rounded-full h-4 border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold text-theme-secondary mb-2">
                  <span>Project Development</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-theme-tertiary rounded-full h-4 border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold text-theme-secondary mb-2">
                  <span>Documentation</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-theme-tertiary rounded-full h-4 border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)]">
                  <div className={`bg-gradient-to-r ${lab.color} h-full rounded-full animate-pulse`} style={{width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-theme-secondary rounded-xl p-6 border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${lab.color} rounded-lg border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)] flex items-center justify-center`}>
                  <span className="icon-play text-white text-lg"></span>
                </div>
                <h3 className="text-lg font-black text-theme-primary">Hands-on Projects</h3>
              </div>
              <p className="text-theme-secondary">Real-world projects that will build your portfolio and practical skills</p>
            </div>
            
            <div className="bg-theme-secondary rounded-xl p-6 border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${lab.color} rounded-lg border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)] flex items-center justify-center`}>
                  <span className="icon-users text-white text-lg"></span>
                </div>
                <h3 className="text-lg font-black text-theme-primary">Expert Guidance</h3>
              </div>
              <p className="text-theme-secondary">Step-by-step tutorials and expert tips to master the concepts</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                className={`px-8 py-4 bg-gradient-to-r ${lab.color} text-white font-bold rounded-lg border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)] hover:shadow-[6px_6px_0px_0px_var(--shadow-primary)] transition-all flex items-center gap-2`}
                onClick={() => window.open('https://github.com/your-repo/contribute', '_blank')}
              >
                <span className="icon-github text-xl"></span>
                Contribute Code
              </button>
              
              <button 
                className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg border-3 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)] hover:shadow-[6px_6px_0px_0px_var(--shadow-primary)] transition-all flex items-center gap-2"
                onClick={() => window.open('mailto:24mp2275@rit.ac.in?subject=Lab Request for ' + courseCode, '_blank')}
              >
                <span className="icon-mail text-xl"></span>
                Request Lab
              </button>
            </div>
            
            <p className="text-sm text-theme-muted">
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
            <h3 className="font-bold text-lg mb-2">{module.name}</h3>
            <div className="space-y-2">
              {module.files.map((file) => (
                <a
                  key={file.name}
                  href={file.path}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-theme-secondary border-2 border-theme-primary rounded-lg shadow-[2px_2px_0px_0px_var(--shadow-primary)] hover:shadow-[4px_4px_0px_0px_var(--shadow-primary)] transition-all text-blue-700 font-semibold"
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
          { name: 'M1.pdf', path: 'notes/semester_ii/20MCA188/M1.pdf' },
        ],
      },
      {
        name: 'MODULE 2',
        files: [
          { name: 'M2.pdf', path: 'notes/semester_ii/20MCA188/M2.pdf' },
        ],
      },
      {
        name: 'MODULE 3',
        files: [
          { name: 'M3.1_Game_theory.pdf', path: 'notes/semester_ii/20MCA188/M3.1_Game_theory.pdf' },
          { name: 'M3.2_Knowledge.pdf', path: 'notes/semester_ii/20MCA188/M3.2_Knowledge.pdf' },
          { name: 'M3.3_Conceptual_Dependency.pdf', path: 'notes/semester_ii/20MCA188/M3.3_Conceptual_Dependency.pdf' },
        ],
      },
      {
        name: 'MODULE 4',
        files: [
          { name: 'M4.1_FOPL_and_Inference_Rules.pdf', path: 'notes/semester_ii/20MCA188/M4.1_FOPL_and_Inference_Rules.pdf' },
          { name: 'M4.2_FOPL.pdf', path: 'notes/semester_ii/20MCA188/M4.2_FOPL.pdf' },
          { name: 'M4.3_Planning.pdf', path: 'notes/semester_ii/20MCA188/M4.3_Planning.pdf' },
          { name: 'M4.4_BlocksWorld-Goal_Stack.pdf', path: 'notes/semester_ii/20MCA188/M4.4_BlocksWorld-Goal_Stack.pdf' },
          { name: 'M4.5Learning.pdf', path: 'notes/semester_ii/20MCA188/M4.5Learning.pdf' },
        ],
      },
      {
        name: 'MODULE 5',
        files: [
          { name: 'M5.1_Expert_Systems.pdf', path: 'notes/semester_ii/20MCA188/M5.1_Expert_Systems.pdf' },
          { name: 'M5.2_Fuzzy_Logic.pdf', path: 'notes/semester_ii/20MCA188/M5.2_Fuzzy_Logic.pdf' },
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
          <div className="w-20 h-20 bg-yellow-100 border-4 border-yellow-500 rounded-full flex items-center justify-center mb-4">
            <span className="icon-hourglass text-3xl text-yellow-500"></span>
          </div>
          <h2 className="text-2xl font-black text-yellow-700 mb-2">Notes Coming Soon</h2>
          <p className="text-theme-secondary mb-4">Notes for this subject will be available soon. Want to help?</p>
          <a href="https://github.com/your-repo/contribute" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)] hover:bg-yellow-600 transition-all">Contribute Notes</a>
        </div>
      );
    }
    return (
      <div className="space-y-8">
        {modules.map((module, idx) => (
          <div key={module.name}>
            <h3 className="font-bold text-lg mb-2">{module.name}</h3>
            <div className="space-y-2">
              {module.files.length === 0 ? (
                <div className="px-4 py-2 bg-yellow-100 border-2 border-yellow-500 rounded-lg text-yellow-700 font-semibold inline-block">Coming Soon</div>
              ) : (
                module.files.map((file) => (
                  file.copyrighted ? (
                    <div
                      key={file.name}
                      className="flex items-center gap-2 px-4 py-2 bg-theme-tertiary border-2 border-theme-secondary rounded-lg text-theme-muted italic font-medium"
                    >
                      <span className="icon-lock text-lg"></span>
                      <span>{file.name} – Copyrighted Material (Not Available for Download)</span>
                    </div>
                  ) : (
                    <a
                      key={file.name}
                      href={file.path}
                      download
                      className="flex items-center gap-2 px-4 py-2 bg-theme-secondary border-2 border-theme-primary rounded-lg shadow-[2px_2px_0px_0px_var(--shadow-primary)] hover:shadow-[4px_4px_0px_0px_var(--shadow-primary)] transition-all text-blue-700 font-semibold"
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
          <a href="https://github.com/your-repo/contribute" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)] hover:bg-yellow-600 transition-all">Contribute Notes</a>
        </div>
      </div>
    );
  }

  // Custom structure for 20MCA103 Digital Fundamentals
  if (courseCode === '20MCA103') {
    const modules = [
      {
        name: 'MODULE 1',
        files: [
          { name: 'Module 1.pdf', path: 'notes/semester_i/20MCA103/Module 1.pdf' },
        ],
      },
      {
        name: 'MODULE 2',
        files: [
          { name: 'Module 2.pdf', path: 'notes/semester_i/20MCA103/Module 2.pdf' },
        ],
      },
      {
        name: 'MODULE 3',
        files: [
          { name: 'Module 3 Part 1.pdf', path: 'notes/semester_i/20MCA103/Module 3 Part 1.pdf' },
          { name: 'Module 3 Part 2.pdf', path: 'notes/semester_i/20MCA103/Module 3 Part 2.pdf' },
          { name: 'Module 3 Part 3.pdf', path: 'notes/semester_i/20MCA103/Module 3 Part 3.pdf' },
          { name: 'Module 3 Part 4.pdf', path: 'notes/semester_i/20MCA103/Module 3 Part 4.pdf' },
          { name: 'Module 3 Part 5.pdf', path: 'notes/semester_i/20MCA103/Module 3 Part 5.pdf' },
        ],
      },
      {
        name: 'MODULE 4',
        files: [
          { name: 'Module 4 Part 1.pdf', path: 'notes/semester_i/20MCA103/Module 4 Part 1.pdf' },
          { name: 'Module 4 Part 2.pdf', path: 'notes/semester_i/20MCA103/Module 4 Part 2.pdf' },
          { name: 'Module 4 Part 3.pdf', path: 'notes/semester_i/20MCA103/Module 4 Part 3.pdf' },
          { name: 'Module 4 Part 4.pdf', path: 'notes/semester_i/20MCA103/Module 4 Part 4.pdf' },
          { name: 'Module 4 Part 5.pdf', path: 'notes/semester_i/20MCA103/Module 4 Part 5.pdf' },
        ],
      },
      {
        name: 'MODULE 5',
        files: [
          { name: 'Module 5 Part 1.pdf', path: 'notes/semester_i/20MCA103/Module 5 Part 1.pdf' },
          { name: 'Module 5 Part 2.pdf', path: 'notes/semester_i/20MCA103/Module 5 Part 2.pdf' },
          { name: 'Module 5 Part 3.pdf', path: 'notes/semester_i/20MCA103/Module 5 Part 3.pdf' },
          { name: 'Module 5 Part 4.pdf', path: 'notes/semester_i/20MCA103/Module 5 Part 4.pdf' },
          { name: 'Module 5 Part 5.pdf', path: 'notes/semester_i/20MCA103/Module 5 Part 5.pdf' },
        ],
      },
    ];
    return (
      <div className="space-y-8">
        {modules.map((module, idx) => (
          <div key={module.name}>
            <h3 className="font-bold text-lg mb-2">{module.name}</h3>
            <div className="space-y-2">
              {module.files.map((file) => (
                <a
                  key={file.name}
                  href={file.path}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-theme-secondary border-2 border-theme-primary rounded-lg shadow-[2px_2px_0px_0px_var(--shadow-primary)] hover:shadow-[4px_4px_0px_0px_var(--shadow-primary)] transition-all text-blue-700 font-semibold"
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
          { name: 'module1_part1.pdf', path: 'notes/semester_ii/20MCA104/module1_part1.pdf' },
          { name: 'module1_part2.pdf', path: 'notes/semester_ii/20MCA104/module1_part2.pdf' },
          { name: 'module1_part3.pdf', path: 'notes/semester_ii/20MCA104/module1_part3.pdf' },
          { name: 'module1_part4.pdf', path: 'notes/semester_ii/20MCA104/module1_part4.pdf' },
          { name: 'Module 1 Part 5.pdf', path: 'notes/semester_ii/20MCA104/Module 1 Part 5.pdf' },
          { name: 'Module 1 Part 6.pdf', path: 'notes/semester_ii/20MCA104/Module 1 Part 6.pdf' },
          { name: 'Module 1 Part 7.pdf', path: 'notes/semester_ii/20MCA104/Module 1 Part 7.pdf' },
          { name: 'Module 1 Part 8.pdf', path: 'notes/semester_ii/20MCA104/Module 1 Part 8.pdf' },
        ],
      },
      {
        name: 'MODULE 2',
        files: [
          { name: 'Module 2 Part 1.pdf', path: 'notes/semester_ii/20MCA104/Module 2 Part 1.pdf' },
          { name: 'Module 2 Part 2.pdf', path: 'notes/semester_ii/20MCA104/Module 2 Part 2.pdf' },
          { name: 'Module 2 Part 3.pdf', path: 'notes/semester_ii/20MCA104/Module 2 Part 3.pdf' },
          { name: 'Module 2 Part 4.pdf', path: 'notes/semester_ii/20MCA104/Module 2 Part 4.pdf' },
        ],
      },
      {
        name: 'MODULE 3',
        files: [
          { name: 'Module 3 Part 1.pdf', path: 'notes/semester_ii/20MCA104/Module 3 Part 1.pdf' },
          { name: 'Module 3 Part 2.pdf', path: 'notes/semester_ii/20MCA104/Module 3 Part 2.pdf' },
          { name: 'Module 3 Part 3.pdf', path: 'notes/semester_ii/20MCA104/Module 3 Part 3.pdf' },
        ],
      },
      {
        name: 'MODULE 4',
        files: [
          { name: 'Module 4 Part 1.pdf', path: 'notes/semester_ii/20MCA104/Module 4 Part 1.pdf' },
          { name: 'Module 4 Part 2.pdf', path: 'notes/semester_ii/20MCA104/Module 4 Part 2.pdf' },
        ],
      },
      {
        name: 'MODULE 5',
        files: [
          { name: 'Module 5.pdf', path: 'notes/semester_ii/20MCA104/Module 5.pdf' },
        ],
      },
    ];
    return (
      <div className="space-y-8">
        {modules.map((module, idx) => (
          <div key={module.name}>
            <h3 className="font-bold text-lg mb-2">{module.name}</h3>
            <div className="space-y-2">
              {module.files.map((file) => (
                <a
                  key={file.name}
                  href={file.path}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-theme-secondary border-2 border-theme-primary rounded-lg shadow-[2px_2px_0px_0px_var(--shadow-primary)] hover:shadow-[4px_4px_0px_0px_var(--shadow-primary)] transition-all text-blue-700 font-semibold"
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
      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl border-4 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)] flex items-center justify-center mb-4">
        <span className="icon-book-open text-white text-3xl"></span>
      </div>
      <h2 className="text-3xl font-black text-pink-600 mb-4 text-center">
        Notes Coming Soon!
      </h2>
      <p className="text-lg text-theme-secondary mb-6 text-center max-w-md">
        We're working hard to bring you comprehensive notes for <span className="font-bold text-theme-primary">{courseCode}</span>. Stay tuned for amazing content!
      </p>
      <p className="text-base text-theme-secondary mb-4 text-center max-w-md">
        Want to help? <a href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-bold">Contribute & Share on GitHub</a> to make this website better for everyone!
      </p>
      <a
        href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-5 py-2 bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-lg border-2 border-theme-primary shadow-[2px_2px_0px_0px_var(--shadow-primary)] transition-all"
        >
        <span className="icon-github text-lg mr-2"></span>
        View & Contribute on GitHub
      </a>
    </div>
  );
}

export default TheoryModules;
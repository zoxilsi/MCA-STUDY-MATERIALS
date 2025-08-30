function SyllabusPage() {
  const { isDarkMode } = useTheme();
  const [expandedSubjects, setExpandedSubjects] = React.useState(new Set());

  const toggleSubject = (subjectCode) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subjectCode)) {
      newExpanded.delete(subjectCode);
    } else {
      newExpanded.add(subjectCode);
    }
    setExpandedSubjects(newExpanded);
  };

  const syllabusData = {
    semester: "Semester I",
    theorySubjects: [
      {
        code: "20MCA101",
        name: "Mathematical Foundations for Computing",
        category: "GENERAL",
        credits: 4,
        hours: { lecture: 3, tutorial: 1, practical: 0 },
        marks: { ia: 40, ese: 60 },
        examSlot: "A",
        type: "Theory",
        modules: [
          "Sets, Set Operations, Relations, Classification of relations, Equivalence Relations, Closures of Relations, Matrix Representation of Relations, Partial Ordering, n-ary Relations, Functions",
          "Division Algorithm, GCD, Primes, Euclidean Algorithm, Congruences, Properties of Congruences, Solutions of Linear Congruences",
          "Graphs and Graph Models, Graph Terminology and Special Types of Graphs, Representing Graphs and Graph Isomorphism, Connectivity, Euler and Hamilton Paths, Shortest-Path Problems, Planar Graphs, Directed Graph, Multigraph, Connected graph, Euler circuit and trail, Planar and Non-planar Graphs",
          "Linear system of equations, coefficient matrix, augmented matrix, Gauss elimination method and back substitution, elementary row operations, row equivalent systems, Gauss elimination- three possible cases, Row Echelon form and information from it, Linear independence- rank of a matrix",
          "Bivariate data – Scatter Diagram – Interpretation of the nature and degree of relation using scattered diagram - Curve fitting – Principle of least squares – fitting a straight line – fitting a parabola – linear correlation and regression – Karl's Pearson's Coefficient of Correlation – Spearman's rank correlation coefficient"
        ],
        outcomes: [
          "Understand mathematical reasoning in order to read, comprehend and construct mathematical arguments",
          "Count or enumerate objects and solve counting problems and analyze algorithms",
          "Solve problems in almost every conceivable discipline using graph models",
          "Solve the linear system of equations and Calculate the eigen values and eigen vectors of matrices",
          "Apply the principles of correlation and regression in practical problems"
        ]
      },
      {
        code: "20MCA103",
        name: "Digital Fundamentals & Computer Architecture",
        category: "GENERAL",
        credits: 4,
        hours: { lecture: 3, tutorial: 1, practical: 0 },
        marks: { ia: 40, ese: 60 },
        examSlot: "B",
        type: "Theory",
        modules: [
          "Representation of signed numbers – 1's complement and 2's complement, Logic gates – AND - OR – NOT - NAND- NOR - XOR, Boolean algebra - Basic laws and theorems, Boolean functions - truth table, Standard forms of Boolean Expressions – Sum of Products and Product of Sums - minimization of Boolean function using Karnaugh map method - Realization using logic gates, Floating point numbers, Combinational Circuits - Half adder - Full Adder- Decoder -Encoder- Multiplexer – Demultiplexer",
          "Sequential circuit - Clocking, Flip flops - SR – JK- D -T flip flops, Counters - Synchronous and asynchronous counters - UP/DOWN counters, Registers - Serial in serial out - Serial in parallel out - Parallel in serial out - Parallel in parallel out registers",
          "Computer abstractions and technology - Introduction, Computer architecture -8 Design features, Application program - layers of abstraction, Five key components of a computer, Technologies for building processors and memory, Performance, Instruction set principles – Introduction, Classifying instruction set architectures, Memory addressing, Encoding an instruction set",
          "The Processor - Introduction, Logic design conventions, Building a datapath, A simple implementation scheme, An overview of pipelining - Pipelined datapath and control - Structural hazards - Data hazards - Control hazards, I/O organization - Accessing I/O devices, interrupts - handling multiple devices, Direct memory access",
          "The Memory System – basic concepts, semiconductor RAM memories - organization – static and dynamic RAM, semiconductor ROM memories, Speed, Size and cost, Cache memory – mapping functions – replacement algorithms, Virtual memory – paging and segmentation"
        ],
        outcomes: [
          "Apply the basics of digital electronics to design and realize simple combinational logic circuits",
          "Apply the digital electronics principles to design sequential logic circuits",
          "Understand the different design features of computer architecture, Five key components of a computer, processor and memory making technologies, addressing modes & instruction formats",
          "Understand Processor logic design conventions and data path, pipelining and hazards, I/O organization, Interrupts and direct memory access",
          "Understand and different types of memories - RAM, ROM, Cache memory, virtual memory etc. Apply the different memory design techniques",
          "Understand the concept of single board computers like Arduino, Raspberry Pi etc. and apply the same in practical applications"
        ]
      },
      {
        code: "20MCA105",
        name: "Advanced Data Structures",
        category: "GENERAL",
        credits: 4,
        hours: { lecture: 3, tutorial: 1, practical: 0 },
        marks: { ia: 40, ese: 60 },
        examSlot: "C",
        type: "Theory",
        modules: [
          "Review of basic data structures- Array, linked list and its variants, Stack ,Queue and Trees, Set Data Structure:- Representation of sets, Set implementation using bit string, Hashing :- Simple hash functions, Collision and Collision Resolution techniques, Amortised Analysis - Aggregate, Accounting and Potential Methods",
          "Advanced Tree Structures:- Balanced Binary Search trees, Red-Black trees- Properties of Red Black trees, Rotations, Insertion, Deletion. B-Trees- Basic operations on B-Trees – Insertion and Deletion, Introduction to Splay Trees and Suffix Trees",
          "Advanced Heap Structures:- Mergeable Heaps and operations on Mergeable Heaps. Binomial Heaps, Binomial Heap operations and Analysis, Fibonacci Heaps, Fibonacci Heap operations and Analysis",
          "Advanced Graph Structures : Representation of graphs, Depth First and Breadth First Traversals, Topological Sorting, Strongly connected Components and Biconnected Components Minimum Cost Spanning Tree algorithms- Prim's Algorithm, Kruskal's Algorithm,. Shortest Path Finding algorithms – Dijkstra's single source shortest paths algorithm",
          "Blockchain Data Structure:- Blockchain Architecture, Blockchain Data Structures and Data types, Contract Data, Problems to be solved in Blockchain data analysis"
        ],
        outcomes: [
          "Remember the Basic Data Structures and understand the Set Data Structure and its implementation",
          "Understand Advanced Tree Structures for the design of efficient algorithms",
          "Understand Advanced Heap Structures suitable for solving Computational problems involving Optimisation and analysing these data structures using amortised analysis",
          "Understand Advanced Graph algorithms suitable for solving advanced computational problems",
          "Understand the basic operation of Blockchaining along with the data structures used in it and the challenges in Blockchain data"
        ]
      },
      {
        code: "20MCA107",
        name: "Advanced Software Engineering",
        category: "GENERAL",
        credits: 4,
        hours: { lecture: 3, tutorial: 1, practical: 0 },
        marks: { ia: 40, ese: 60 },
        examSlot: "D",
        type: "Theory",
        modules: [
          "Introduction to Software Engineering: What is Software Engineering, Characteristics of Software, Life cycle of a software system: software design, development, testing, deployment, Maintenance, Project planning phase: project objectives, scope of the software system, empirical estimation models, COCOMO, staffing and personnel planning, Software Engineering models: Predictive software engineering models, model approaches, prerequisites, predictive and adaptive waterfall, waterfall with feedback (Sashimi), incremental waterfall, V model; Prototyping and prototyping models",
          "Programming Style Guides and Coding Standards; Literate programming and Software documentation; Documentation generators, Javadoc, phpDocumentor, Version control systems basic concepts; Concept of Distributed version control system and Git; Setting up Git; Core operations in Git version control system using command line interface (CLI): Clone a repository; View history; Modifying files; Branching; Push changes, Clone operation, add, commit, log, diff commands, conflict resolution. Pushing changes to the master; Using Git in IDEs and UI based tools",
          "OOP Concepts; Design Patterns: Basic concepts of Design patterns, How to select a design pattern, Creational patterns, Structural patterns, Behavioural patterns. Concept of Anti-patterns, Unit testing and Unit Testing frameworks, The xUnit Architecture, Writing Unit Tests using at least one of Junit (for Java), unittest (for Python) or phpdbg (PHP). Writing tests with Assertions, defining and using Custom Assertions, single condition tests, testing for expected errors, Abstract test",
          "Concepts of Agile Development methodology; Scrum Framework, Software testing principles, Program inspections, Program walkthroughs, Program reviews; Blackbox testing: Equivalence class testing, Boundary value testing, Decision table testing, Pairwise testing, State transition testing, Use-case testing; White box testing: control flow testing, Data flow testing, Testing automation: Defect life cycle; Regression testing, Testing automation; Testing non-functional requirements",
          "Software Configuration Management: Using version control, Managing dependencies, Managing software configuration, Managing build and deployment environments, Continuous Integration: Prerequisites for continuous integration, Essential practices, Continuous Delivery: Principles of Software delivery, Introduction and concepts, Build and deployment automation, Learn to use Ansible for configuration management, Test automation (as part of continuous integration), Learn to set up test automation cases using Robot Framework"
        ],
        outcomes: [
          "Get a full view of the Software life cycle",
          "Gain a deep knowledge of Software Planning, Analysis and Design and Software Engineering Models",
          "Have a great comprehension of Coding Practices, Version Control using 'git' and Software Quality",
          "Acquire ample grasp of Design Patterns",
          "Get deeply familiarised with Software Testing and its automation",
          "Start using Agile Methodology",
          "Begin to apply CI/CD techniques in Software development"
        ]
      }
    ],
    labSubjects: [
      {
        code: "20MCA131",
        name: "Programming Lab",
        category: "PRACTICAL",
        credits: 2,
        hours: { lecture: 0, tutorial: 1, practical: 3 },
        marks: { ia: 50, ese: 50 },
        examSlot: "R",
        type: "Lab",
        outcomes: [
          "Understands basics of Python Programming language including input/output functions, operators, basic and collection data types",
          "Implement decision making, looping constructs and functions",
          "Design modules and packages - built in and user defined packages",
          "Implement object-oriented programming and exception handling",
          "Create files and form regular expressions for effective search operations on strings and files"
        ]
      },
      {
        code: "20MCA133",
        name: "Web Programming Lab",
        category: "PRACTICAL",
        credits: 2,
        hours: { lecture: 0, tutorial: 1, practical: 3 },
        marks: { ia: 50, ese: 50 },
        examSlot: "S",
        type: "Lab",
        outcomes: [
          "Explore markup languages features and create interactive web pages using them",
          "Learn and design client-side validation using scripting languages",
          "Design front end web page and connect to the back-end databases",
          "Do Client-side & Server-side scripting",
          "Develop Web Applications"
        ]
      },
      {
        code: "20MCA135",
        name: "Data Structures Lab",
        category: "PRACTICAL",
        credits: 2,
        hours: { lecture: 0, tutorial: 1, practical: 3 },
        marks: { ia: 50, ese: 50 },
        examSlot: "T",
        type: "Lab",
        outcomes: [
          "Use Debuggers, Profilers and advanced Compiler options",
          "Implement the Set and Disjoint Set Data Structures",
          "Understand the practical aspects of Advanced Tree Structures",
          "Realise Modern Heap Structures for effectively solving advanced Computational problems",
          "Implement Advanced Graph algorithms suitable for solving advanced computational problems"
        ]
      }
    ]
  };

  const SubjectCard = ({ subject, isLab = false }) => {
    const isExpanded = expandedSubjects.has(subject.code);

    return (
      <div className="note-card mb-6">
        <div
          className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-2 -m-2 transition-colors duration-200"
          onClick={() => toggleSubject(subject.code)}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-black text-black dark:text-white mb-1">
                {subject.code} - {subject.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  {subject.category}
                </span>
                <span className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                  {subject.type}
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                  {subject.credits} Credits
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Hours: L{subject.hours.lecture} T{subject.hours.tutorial} P{subject.hours.practical}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Marks: IA{subject.marks.ia} ESE{subject.marks.ese}
                </div>
              </div>
              <div className="ml-4">
                <Icon
                  name="arrow-right"
                  className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                    isExpanded ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <div className="mb-4">
              <h4 className="font-bold text-black dark:text-white mb-2">Course Outcomes:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {subject.outcomes.map((outcome, index) => (
                  <li key={index}>CO{index + 1}: {outcome}</li>
                ))}
              </ul>
            </div>

            {!isLab && subject.modules && (
              <div>
                <h4 className="font-bold text-black dark:text-white mb-2">Modules:</h4>
                <div className="space-y-2">
                  {subject.modules.map((module, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="font-semibold text-black dark:text-white mb-1">
                        Module {index + 1}
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        {module}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-black dark:text-white mb-4">
            MCA Syllabus
          </h1>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg inline-block">
            <h2 className="text-2xl font-bold">{syllabusData.semester}</h2>
            <p className="text-sm opacity-90">APJ Abdul Kalam Technological University</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-black text-black dark:text-white mb-6 flex items-center gap-3">
            <Icon name="book-open" className="text-blue-500" />
            Theory Subjects
          </h2>
          <div className="space-y-6">
            {syllabusData.theorySubjects.map((subject) => (
              <SubjectCard key={subject.code} subject={subject} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black text-black dark:text-white mb-6 flex items-center gap-3">
            <Icon name="code" className="text-green-500" />
            Laboratory Subjects
          </h2>
          <div className="space-y-6">
            {syllabusData.labSubjects.map((subject) => (
              <SubjectCard key={subject.code} subject={subject} isLab={true} />
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-black dark:text-white mb-4">
            Assessment Pattern
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-black dark:text-white mb-2">Continuous Assessment</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Test 1: 10 marks</li>
                <li>• Test 2: 10 marks</li>
                <li>• Assignment/Quiz: 20 marks</li>
                <li>• Total: 40 marks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black dark:text-white mb-2">End Semester Examination</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Theory Papers: 60 marks each</li>
                <li>• Lab Examinations: 50 marks each</li>
                <li>• Duration: 3 hours (Theory), As per schedule (Lab)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
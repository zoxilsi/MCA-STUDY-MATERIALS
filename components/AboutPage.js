function AboutPage() {
   const { isDarkMode } = useTheme();

   const teamMembers = [
     {
       name: 'ABHIJITH T',
       role: 'Maintainer & Vibe Coder',
       description: 'Vibe coder and a vibing with code.',
       image: 'assets/abhi.jpg',
       social: {
         github: 'https://github.com/zoxilsi',
         linkedin: 'https://linkedin.com/in/zoxilsi',
         twitter: 'https://twitter.com/zoxilsi',
         email: 'mailto:24mp2275@rit.ac.in'
       }
     }
   ];

   const contributorBenefits = [
     {
       icon: 'star',
       title: 'Get Featured',
       description: 'Your name and contributions will be showcased on our website'
     },
     {
       icon: 'trophy',
       title: 'Recognition',
       description: 'Earn badges and certificates for your valuable contributions'
     },
     {
       icon: 'handshake',
       title: 'Community',
       description: 'Join a network of MCA students helping each other succeed'
     },
     {
       icon: 'rocket',
       title: 'Impact',
       description: 'Help thousands of students with your knowledge and expertise'
     }
   ];

   const contributionTypes = [
     {
       icon: 'file-alt',
       title: 'Study Notes',
       description: 'Share your lecture notes, summaries, and study materials',
       color: 'from-blue-500 to-purple-500'
     },
     {
       icon: 'code',
       title: 'Code Examples',
       description: 'Contribute programming examples, projects, and lab solutions',
       color: 'from-green-500 to-teal-500'
     },
     {
       icon: 'lightbulb',
       title: 'Explanations',
       description: 'Provide clear explanations for complex topics and concepts',
       color: 'from-yellow-500 to-orange-500'
     },
     {
       icon: 'question',
       title: 'Q&A',
       description: 'Help answer student questions and create FAQ sections',
       color: 'from-red-500 to-pink-500'
     }
   ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-6">
            <Icon name="user-plus" className="text-white text-3xl" />
          </div>

          <h1 className="text-4xl font-black text-black dark:text-white mb-4">
            Meet the Team
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Help MCA students succeed! Share your notes, get featured, and make an impact.
          </p>
        </div>
      </section>

      {/* Quick Contribution Options */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-black dark:text-white mb-4">
              Share Your Notes & Get Featured! ⭐
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your contributions help thousands of MCA students. Top contributors get featured!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contributionTypes.slice(0, 2).map((type, index) => (
              <div key={index} className="bg-[#f0f0f0] dark:bg-gray-900 rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-3`}>
                  <Icon name={type.icon} className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-black text-black dark:text-white mb-1">
                  {type.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-black text-lg rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all"
            >
              <Icon name="github" className="text-xl" />
              Start Contributing Now!
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-black dark:text-white mb-4">
              Meet the Team
            </h2>
          </div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] max-w-sm">
                <div className="text-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 object-cover rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] mx-auto mb-4"
                  />
                  <h3 className="text-lg font-black text-black dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {member.description}
                  </p>
                </div>

                <div className="flex justify-center gap-2">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-900 hover:bg-gray-700 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <Icon name="github" className="text-white text-xs" />
                  </a>

                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 hover:bg-blue-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <Icon name="linkedin" className="text-white text-xs" />
                  </a>

                  <a
                    href={member.social.email}
                    className="w-8 h-8 bg-green-600 hover:bg-green-500 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center transition-all"
                  >
                    <Icon name="mail" className="text-white text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-4">
              Community Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {[
              { label: 'Study Materials', value: '500+', icon: 'book' },
              { label: 'Contributors', value: '25+', icon: 'users' },
              { label: 'Happy Students', value: '1000+', icon: 'graduation-cap' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} className="text-blue-600 text-lg" />
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-blue-100 font-bold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
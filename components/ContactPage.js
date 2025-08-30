function ContactPage() {
  const { isDarkMode } = useTheme();

  const contactMethods = [
    {
      icon: 'mail',
      title: 'Email',
      description: 'Get in touch for questions, suggestions, or contributions',
      value: '24mp2275@rit.ac.in',
      link: 'mailto:24mp2275@rit.ac.in',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: 'github',
      title: 'GitHub',
      description: 'Report issues, contribute code, or star the repository',
      value: 'zoxilsi/MCA-STUDY-MATERIALS',
      link: 'https://github.com/zoxilsi/MCA-STUDY-MATERIALS',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: 'linkedin',
      title: 'LinkedIn',
      description: 'Connect professionally and stay updated',
      value: 'linkedin.com/in/zoxilsi',
      link: 'https://linkedin.com/in/zoxilsi',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: 'twitter',
      title: 'Twitter',
      description: 'Follow for updates and announcements',
      value: '@zoxilsi',
      link: 'https://twitter.com/zoxilsi',
      color: 'from-sky-400 to-sky-600'
    }
  ];

  const faqs = [
    {
      question: 'How can I contribute my notes?',
      answer: 'You can contribute by creating a pull request on our GitHub repository or by emailing your notes to us. We accept PDF, Word documents, and other common formats.'
    },
    {
      question: 'Are the materials free to use?',
      answer: 'Yes! All materials on MCA Notes are completely free to access, download, and use for educational purposes. We believe education should be accessible to everyone.'
    },
    {
      question: 'How often is the content updated?',
      answer: 'We continuously update our content as new materials become available and as contributors share their resources. Major updates typically happen at the beginning of each semester.'
    },
    {
      question: 'Can I request specific topics or subjects?',
      answer: 'Absolutely! Feel free to reach out via email or GitHub issues to request specific topics, subjects, or types of content you\'d like to see added.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center mx-auto mb-8">
            <Icon name="mail" className="text-white text-3xl" />
          </div>
          
          <h1 className="text-5xl font-black text-black dark:text-white mb-6">
            Get in Touch
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Have questions, suggestions, or want to contribute? We'd love to hear from you! 
            Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black dark:text-white mb-4">
              Contact Methods
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose your preferred way to connect with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="bg-[#f0f0f0] dark:bg-gray-900 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all block"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] flex items-center justify-center flex-shrink-0`}>
                    <Icon name={method.icon} className="text-white text-2xl" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-black dark:text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {method.description}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold">
                      {method.value}
                    </p>
                  </div>
                  
                  <Icon name="external-link" className="text-gray-400 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
                <h3 className="text-xl font-black text-black dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Contribute?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Help us make MCA Notes better for everyone
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:24mp2275@rit.ac.in?subject=Contributing to MCA Notes"
              className="px-8 py-4 bg-white text-green-600 font-black text-lg rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="mail" className="text-xl" />
              Send Your Notes
            </a>
            
            <a
              href="https://github.com/zoxilsi/MCA-STUDY-MATERIALS/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white font-black text-lg rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="github" className="text-xl" />
              Report an Issue
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#f0f0f0] dark:bg-gray-900 rounded-xl p-6 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
            <h3 className="text-lg font-black text-black dark:text-white mb-2">
              Primary Contact
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              For all inquiries, contributions, and support
            </p>
            <a 
              href="mailto:24mp2275@rit.ac.in"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              24mp2275@rit.ac.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
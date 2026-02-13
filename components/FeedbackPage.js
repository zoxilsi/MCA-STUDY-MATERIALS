function FeedbackPage() {
    const { isDarkMode } = window.useTheme();
    try{
        return(
            <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-[#f0f0f0]'}`} 
            data-name="feedback-page" 
            data-file="components/FeedbackPage.js"
            >
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
            <h1 className="text-2xl font-black text-black dark:text-white mb-4">Feedback</h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Found a typo? Have suggestions? Submit your feedback anonymously below.
            </p>
            <form action="{/* insert your submit-form URL here */}" className="space-y-4 mt-6">
                 <div>
                    <input type="hidden" name="_feedback.dark" value="true" />
                    <input type="hidden" name="_feedback.success.title" value="Got it, thanks!" />
                    <input type="hidden" name="_feedback.success.message" value="We’ve received your feedback." />

                    <label htmlFor="type" className="block font-bold text-gray-800 dark:text-gray-200 mb-1">Type of Feedback</label>
                    <select
                    id="type"
                    name="type"
                    className="w-full px-4 py-2 rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    >
                        <option value="">Select one...</option>
                        <option value="Bug">Bug</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Content Issue">Content Issue</option>
                        <option value="UI Issue">UI Issue</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="page" className="block font-bold text-gray-800 dark:text-gray-200 mb-1">Page or Section (Optional)</label>
                    <input
                    type="text"
                    id="page"
                    name="page"
                    placeholder="e.g., Semester II / Advanced Database Management Systems"
                    className="w-full px-4 py-2 rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block font-bold text-gray-800 dark:text-gray-200 mb-1">Your Feedback</label>
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Please describe the issue or share your feedback..."
                    className="w-full px-4 py-2 rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="steps" className="block font-bold text-gray-800 dark:text-gray-200 mb-1">Steps to Reproduce (optional)</label>
                    <textarea
                    id="steps_to_reproduce"
                    name="steps_to_reproduce"
                    placeholder="If this is a bug, how can we reproduce it?"
                    className="w-full px-4 py-2 rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="consent" className="block font-bold text-gray-800 dark:text-gray-200 mb-1">Would you like to be contacted?</label>
                    <select
                    id="consent"
                    name="follow_up_consent"
                    className="w-full px-4 py-2 rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="email" className="block font-bold text-gray-800 dark:text-gray-200 mb-1">Email (optional)</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com (only if you'd like a reply)"
                    className="w-full px-4 py-2 rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="btn-primary mt-4"
                >
                    Send
                </button>
                </form>
          </div>
        </div>
      </div>
        );
    } catch (error) {
        console.error('FeedbackPage component error:', error);
        return null;
    }
}

window.FeedbackPage = FeedbackPage;

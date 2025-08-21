function Hero() {
  try {
    return (
      <div className="bg-[#f0f0f0] dark:bg-gray-900 py-16 relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-black/5 dark:bg-white/5 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 dark:text-white mb-6 bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 px-8 py-4 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transform transition-transform hover:translate-x-1 hover:translate-y-1 inline-block">
            Master of Computer Applications
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Track your academic journey through the comprehensive MCA curriculum. 
            Explore courses, manage your progress, and excel in your studies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white dark:bg-gray-800 px-6 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="text-2xl font-black text-blue-500">86</div>
              <div className="text-sm font-bold text-gray-600 dark:text-gray-300">Total Credits</div>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="text-2xl font-black text-green-500">4</div>
              <div className="text-sm font-bold text-gray-600 dark:text-gray-300">Semesters</div>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
              <div className="text-2xl font-black text-purple-500">2020</div>
              <div className="text-sm font-bold text-gray-600 dark:text-gray-300">Curriculum Year</div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}

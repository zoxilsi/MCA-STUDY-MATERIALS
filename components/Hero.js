function Hero() {
  try {
    return (
      <div className="bg-theme-secondary py-16 relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-theme-primary/5 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-theme-primary mb-6 bg-gradient-to-r from-theme-secondary to-theme-tertiary px-8 py-4 rounded-xl border-4 border-theme-primary shadow-[8px_8px_0px_0px_var(--shadow-primary)] transform transition-transform hover:translate-x-1 hover:translate-y-1 inline-block">
            Master of Computer Applications
          </h2>
          
          <p className="text-xl text-theme-secondary mb-8 max-w-2xl mx-auto">
            Track your academic journey through the comprehensive MCA curriculum. 
            Explore courses, manage your progress, and excel in your studies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-theme-secondary px-6 py-4 rounded-xl border-2 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
              <div className="text-2xl font-black text-blue-500">86</div>
              <div className="text-sm font-bold text-theme-secondary">Total Credits</div>
            </div>
            <div className="bg-theme-secondary px-6 py-4 rounded-xl border-2 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
              <div className="text-2xl font-black text-green-500">4</div>
              <div className="text-sm font-bold text-theme-secondary">Semesters</div>
            </div>
            <div className="bg-theme-secondary px-6 py-4 rounded-xl border-2 border-theme-primary shadow-[4px_4px_0px_0px_var(--shadow-primary)]">
              <div className="text-2xl font-black text-purple-500">2020</div>
              <div className="text-sm font-bold text-theme-secondary">Curriculum Year</div>
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

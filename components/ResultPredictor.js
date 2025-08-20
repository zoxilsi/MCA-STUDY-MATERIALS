
// No import/export, use global React for compatibility with script-based React usage
const LOCAL_STORAGE_KEY = 'mca_test_scores';

function calculatePrediction(scores, totals) {
  // Normalize each score to 100 for fair average
  const norm = key => (scores[key] !== '' && totals[key]) ? (scores[key] / totals[key]) * 100 : null;
  const arr = ['unitTest', 'insem', 'prelims'].map(norm).filter(x => x !== null);
  if (arr.length === 0) return null;
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.round(avg);
}

function ResultPredictor() {
  const [scores, setScores] = React.useState({ unitTest: '', insem: '', prelims: '' });
  const [totals, setTotals] = React.useState({ unitTest: 100, insem: 100, prelims: 100 });
  const [prediction, setPrediction] = React.useState(null);

  React.useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setScores({ unitTest: '', insem: '', prelims: '', ...(parsed.scores || parsed) });
        setTotals({ unitTest: 100, insem: 100, prelims: 100, ...(parsed.totals || {}) });
      } catch {
        setScores({ unitTest: '', insem: '', prelims: '' });
        setTotals({ unitTest: 100, insem: 100, prelims: 100 });
      }
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ scores, totals }));
    setPrediction(calculatePrediction(scores, totals));
  }, [scores, totals]);

  function handleChange(e) {
    const { name, value, dataset } = e.target;
    if (dataset.type === 'total') {
      setTotals(t => ({ ...t, [name]: value === '' ? 100 : Number(value) }));
    } else {
      setScores(s => ({ ...s, [name]: value === '' ? '' : Number(value) }));
    }
  }

  const { isDarkMode, toggleDarkMode } = window.useTheme ? window.useTheme() : { isDarkMode: false, toggleDarkMode: () => {} };
  // Inject CSS to hide number input spinners (only once, in browser)
  React.useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (!document.getElementById('hide-number-spin-style')) {
        const style = document.createElement('style');
        style.id = 'hide-number-spin-style';
        style.innerHTML = `
          .hide-number-spin::-webkit-outer-spin-button,
          .hide-number-spin::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          .hide-number-spin {
            -moz-appearance: textfield;
          }
        `;
        document.head.appendChild(style);
      }
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto mb-12 px-8 py-10 rounded-2xl border-4 border-black bg-white dark:bg-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] flex flex-col gap-10">
      <div className="flex items-center gap-6 mb-2 justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)]">
            <i className="fa-solid fa-chart-line text-white text-3xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-black text-black dark:text-white">Result Predictor</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 font-semibold mt-1">Predict your Endsem score based on your test performance</p>
          </div>
        </div>
        <button
          onClick={toggleDarkMode}
          className={
            `flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-lg border-2 transition-all whitespace-nowrap ` +
            (isDarkMode
              ? 'bg-yellow-400 text-black border-yellow-600 hover:bg-yellow-300'
              : 'bg-gray-800 text-white border-gray-900 hover:bg-gray-700') +
            ' shadow-[2px_2px_0px_rgba(0,0,0,0.9)] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.9)]'
          }
          aria-label="Toggle theme"
        >
          <span className={isDarkMode ? 'icon-sun' : 'icon-moon'}></span>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <label className="flex-1 flex flex-col gap-2">
          <span className="font-bold text-black dark:text-white text-lg">Unit Test Score</span>
          <div className="flex items-center gap-2">
            <input type="number" name="unitTest" min="0" max="999" value={scores.unitTest} onChange={handleChange} className="rounded-lg border-2 border-black px-6 py-4 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white text-xl bg-white w-full appearance-none hide-number-spin" placeholder="Enter unit test score" />
            <span className="text-gray-500 dark:text-gray-400 font-bold text-base">/</span>
            <input type="number" name="unitTest" data-type="total" min="1" max="999" value={totals.unitTest} onChange={handleChange} className="w-16 rounded-lg border-2 border-black px-2 py-2 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white text-base bg-white text-center appearance-none hide-number-spin" />
          </div>
        </label>
        <label className="flex-1 flex flex-col gap-2">
          <span className="font-bold text-black dark:text-white text-lg">Insem Score</span>
          <div className="flex items-center gap-2">
            <input type="number" name="insem" min="0" max="999" value={scores.insem} onChange={handleChange} className="rounded-lg border-2 border-black px-6 py-4 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white text-xl bg-white w-full appearance-none hide-number-spin" placeholder="Enter insem score" />
            <span className="text-gray-500 dark:text-gray-400 font-bold text-base">/</span>
            <input type="number" name="insem" data-type="total" min="1" max="999" value={totals.insem} onChange={handleChange} className="w-16 rounded-lg border-2 border-black px-2 py-2 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white text-base bg-white text-center appearance-none hide-number-spin" />
          </div>
        </label>
        <label className="flex-1 flex flex-col gap-2">
          <span className="font-bold text-black dark:text-white text-lg">Prelims Score</span>
          <div className="flex items-center gap-2">
            <input type="number" name="prelims" min="0" max="999" value={scores.prelims} onChange={handleChange} className="rounded-lg border-2 border-black px-6 py-4 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white text-xl bg-white w-full appearance-none hide-number-spin" placeholder="Enter prelims score" />
            <span className="text-gray-500 dark:text-gray-400 font-bold text-base">/</span>
            <input type="number" name="prelims" data-type="total" min="1" max="999" value={totals.prelims} onChange={handleChange} className="w-16 rounded-lg border-2 border-black px-2 py-2 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white text-base bg-white text-center appearance-none hide-number-spin" />
          </div>
        </label>
      </div>
      <div className="flex flex-col items-center gap-2 mt-6">
        <span className="font-bold text-black dark:text-white text-xl mb-1">Predicted Endsem Score</span>
        <span className="text-blue-700 dark:text-blue-300 text-4xl font-black tracking-wide bg-white dark:bg-gray-900 px-10 py-4 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">{prediction !== null ? prediction : 'Enter scores above'}</span>
      </div>
    </div>
  );
}

// Attach to window for use in app.js
window.ResultPredictor = ResultPredictor;

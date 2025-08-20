/**
 * File: marker-tracker/marks-tracker.js
 * Description: Core logic for the Student Internal Marks Tracker feature.
 * This script handles state, calculations, and DOM manipulation, including theme toggling.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- THEME TOGGLE LOGIC ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeToggleBtn.innerHTML = '☀️'; // Set to sun icon
        } else {
            body.classList.remove('light-mode');
            themeToggleBtn.innerHTML = '🌙'; // Set to moon icon
        }
    };

    // Event listener for the toggle button
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        // Check if the body now has the 'light-mode' class
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '☀️'; // Change to sun icon
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '🌙'; // Change back to moon icon
        }
    });

    // Apply theme when the page first loads
    applyTheme();

    // --- 1. DOM ELEMENT REFERENCES ---
    const coursesContainer = document.getElementById('courses-container');
    const addCourseBtn = document.getElementById('add-course-btn');

    // --- 2. PRESET SCHEMES CONFIGURATION ---
    const presetSchemes = {
        'ktu_theory_40_60': { name: 'KTU 2024 Theory (40/60)', internal: 40, external: 60 },
        'lab_50_50': { name: 'Lab (50/50)', internal: 50, external: 50 },
        'custom': { name: 'Custom Scheme', internal: 30, external: 70 }
    };

    // --- 3. STATE MANAGEMENT ---
    let courses = JSON.parse(localStorage.getItem('studentMarksTrackerV2')) || [];

    const saveData = () => {
        localStorage.setItem('studentMarksTrackerV2', JSON.stringify(courses));
    };

    // --- 4. CORE RENDERING AND CALCULATION LOGIC ---
    const renderApp = () => {
        coursesContainer.innerHTML = ''; 

        if (courses.length === 0) {
            coursesContainer.innerHTML = `<div class="text-center text-gray-500 p-10 bg-white rounded-lg shadow-sm">
                <h2 class="text-2xl font-semibold">Welcome!</h2>
                <p class="mt-2">Click "Add New Course" to start tracking your marks.</p>
            </div>`;
            return;
        }

        courses.forEach((course, courseIndex) => {
            let totalObtained = 0;
            let totalMax = 0;
            course.marks.forEach(mark => {
                totalObtained += parseFloat(mark.obtained) || 0;
                totalMax += parseFloat(mark.max) || 0;
            });

            const internalWeight = parseFloat(course.scheme.internal) || 0;
            const externalWeight = parseFloat(course.scheme.external) || 0;
            const weightedInternalScore = totalMax > 0 ? (totalObtained / totalMax) * internalWeight : 0;
            const trendPercentage = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;
            const trendPredictionScore = (trendPercentage / 100) * externalWeight;

            const targets = [
                { label: 'To Pass (40%)', value: 40 },
                { label: 'To Get 60%', value: 60 },
                { label: 'To Get 75%', value: 75 },
                { label: 'To Get 90%', value: 90 }
            ];

            const courseCard = document.createElement('div');
            courseCard.className = 'bg-white rounded-xl shadow-lg overflow-hidden';
            courseCard.dataset.courseIndex = courseIndex;

            const marksHTML = course.marks.map((mark, markIndex) => `
                <div class="grid grid-cols-3 gap-2 items-center">
                    <label class="text-gray-600">${mark.name}</label>
                    <input type="number" class="w-full p-2 border rounded text-center" placeholder="Got" value="${mark.obtained}" data-mark-index="${markIndex}" data-field="obtained">
                    <input type="number" class="w-full p-2 border rounded text-center" placeholder="Max" value="${mark.max}" data-mark-index="${markIndex}" data-field="max">
                </div>
            `).join('');

            const schemesOptionsHTML = Object.keys(presetSchemes).map(key =>
                `<option value="${key}" ${course.schemeKey === key ? 'selected' : ''}>${presetSchemes[key].name}</option>`
            ).join('');

            const whatIfHTML = targets.map(target => {
                const requiredFromExternal = target.value - weightedInternalScore;
                let resultText;
                if (requiredFromExternal <= 0) {
                    resultText = `<span class="font-semibold text-green-600">Achieved!</span>`;
                } else {
                    const requiredRawScore = (requiredFromExternal / externalWeight) * 100;
                    if (requiredRawScore > 100) {
                        resultText = `<span class="font-semibold text-red-600">>100% (Impossible)</span>`;
                    } else {
                        resultText = `${Math.ceil(requiredRawScore)} / 100`;
                    }
                }
                return `<tr><td class="py-2 text-gray-600">${target.label}</td><td class="py-2 text-right font-semibold">${resultText}</td></tr>`;
            }).join('');

            courseCard.innerHTML = `
                <div class="p-4 bg-gray-50 border-b flex justify-between items-center">
                    <input type="text" class="text-xl font-bold bg-transparent w-full focus:outline-none" value="${course.name}" placeholder="Enter Course Name">
                    <button class="delete-course-btn text-gray-400 hover:text-red-500 transition">&times;</button>
                </div>
                <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-6">
                        <div>
                            <h3 class="font-semibold text-lg mb-3">Internal Marks</h3>
                            <div class="space-y-3">${marksHTML}</div>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-3">Grading Scheme</h3>
                            <select class="scheme-select w-full p-2 border rounded">${schemesOptionsHTML}</select>
                            <div class="custom-scheme-inputs mt-2 grid grid-cols-2 gap-2 ${course.schemeKey !== 'custom' ? 'hidden' : ''}">
                                <input type="number" class="custom-internal w-full p-2 border rounded" placeholder="Internal %" value="${course.scheme.internal}">
                                <input type="number" class="custom-external w-full p-2 border rounded" placeholder="External %" value="${course.scheme.external}">
                            </div>
                        </div>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-lg mb-3 text-blue-800">Live Calculation & Predictions</h3>
                        <div class="text-center bg-white p-4 rounded-md shadow-inner mb-4">
                            <div class="text-sm text-gray-500">Final Internal Mark</div>
                            <div class="text-3xl font-bold text-blue-600">${weightedInternalScore.toFixed(2)} / ${internalWeight}</div>
                        </div>
                        <div class="warning-box p-3 mb-4 text-sm text-yellow-800 bg-yellow-100 border border-yellow-200 rounded-md ${weightedInternalScore < (internalWeight * 0.4) ? '' : 'hidden'}">
                            <strong>Warning:</strong> Your internal score is below the 40% pass threshold.
                        </div>
                        <h4 class="font-semibold mb-2">"What-if" Calculator</h4>
                        <table class="w-full text-sm">
                            <tbody>${whatIfHTML}</tbody>
                        </table>
                        <div class="mt-4 pt-3 border-t text-sm text-gray-600">
                            <strong>Trend Prediction:</strong> Based on your current average of ${trendPercentage.toFixed(1)}%, you might score around <strong>${trendPredictionScore.toFixed(1)} / ${externalWeight}</strong> in the End-Sem.
                        </div>
                    </div>
                </div>
            `;
            coursesContainer.appendChild(courseCard);

            const schemeSelect = courseCard.querySelector('.scheme-select');
            const customInputs = courseCard.querySelector('.custom-scheme-inputs');
            if (schemeSelect.value === 'custom') {
                customInputs.classList.remove('hidden');
            }
        });
    };

    // --- 5. EVENT HANDLING ---
    addCourseBtn.addEventListener('click', () => {
        courses.push({
            name: `Course ${courses.length + 1}`,
            schemeKey: 'ktu_theory_40_60',
            scheme: { ...presetSchemes.ktu_theory_40_60 },
            marks: [
                { name: 'Unit Tests', obtained: '', max: '' },
                { name: 'In-sems', obtained: '', max: '' },
                { name: 'Assignments', obtained: '', max: '' },
                { name: 'Attendance', obtained: '', max: '' },
                { name: 'Labs', obtained: '', max: '' }
            ]
        });
        saveData();
        renderApp();
    });

    coursesContainer.addEventListener('input', (e) => {
        const courseCard = e.target.closest('.bg-white');
        if (!courseCard) return;
        const courseIndex = courseCard.dataset.courseIndex;
        const course = courses[courseIndex];

        if (e.target.matches('.font-bold')) {
            course.name = e.target.value;
        } else if (e.target.matches('[data-mark-index]')) {
            const markIndex = e.target.dataset.markIndex;
            const field = e.target.dataset.field;
            course.marks[markIndex][field] = e.target.value;
        } else if (e.target.matches('.scheme-select')) {
            const newSchemeKey = e.target.value;
            course.schemeKey = newSchemeKey;
            course.scheme = { ...presetSchemes[newSchemeKey] };
        } else if (e.target.matches('.custom-internal')) {
            course.scheme.internal = e.target.value;
        } else if (e.target.matches('.custom-external')) {
            course.scheme.external = e.target.value;
        }

        saveData();
        renderApp();
    });
    
    coursesContainer.addEventListener('click', (e) => {
        if (e.target.matches('.delete-course-btn')) {
            const courseIndex = e.target.closest('.bg-white').dataset.courseIndex;
            if (confirm(`Are you sure you want to delete "${courses[courseIndex].name}"?`)) {
                courses.splice(courseIndex, 1);
                saveData();
                renderApp();
            }
        }
    });

    // --- 6. INITIAL RENDER ---
    renderApp();
});

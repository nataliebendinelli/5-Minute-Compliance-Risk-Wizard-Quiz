// Quiz Logic and State Management
let currentQuestionIndex = 0;
let userAnswers = {};
let sectionScores = {};
let totalScore = 0;
let startTime = null;
let questionOrder = [];

// Initialize quiz
function initializeQuiz() {
    questionOrder = quizData.questions.map(q => q.id);
    currentQuestionIndex = 0;
    userAnswers = {};
    sectionScores = {};
    totalScore = 0;
    startTime = Date.now();
}

// Start quiz
function startQuiz() {
    initializeQuiz();
    showScreen('questionScreen');
    // Show progress bar when quiz starts
    document.getElementById('progressContainer').style.display = 'block';
    displayQuestion();
    updateProgress();
}

// Display current question
function displayQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    
    // Debug logging
    console.log('Current question index:', currentQuestionIndex);
    console.log('Question:', question);
    
    if (!question) {
        console.error('Question not found at index:', currentQuestionIndex);
        return;
    }
    
    const section = quizData.sections.find(s => s.id === question.section);
    
    if (!section) {
        console.error('Section not found for:', question.section);
        return;
    }
    
    // Update section label
    document.getElementById('sectionLabel').textContent = section.name;
    
    // Update question text
    document.getElementById('questionText').textContent = question.text;
    
    // Generate answer options
    const optionsContainer = document.getElementById('answerOptions');
    optionsContainer.innerHTML = '';
    
    if (question.type === 'single') {
        question.answers.forEach((answer, index) => {
            const option = document.createElement('div');
            option.className = 'answer-option';
            option.innerHTML = `
                <input type="radio" id="answer${index}" name="question${question.id}" value="${index}">
                <label for="answer${index}">${answer.text}</label>
            `;
            option.addEventListener('click', () => selectSingleAnswer(index));
            optionsContainer.appendChild(option);
        });
    } else if (question.type === 'multi') {
        question.answers.forEach((answer, index) => {
            const option = document.createElement('div');
            option.className = 'answer-option checkbox-option';
            option.innerHTML = `
                <input type="checkbox" id="answer${index}" name="question${question.id}" value="${index}">
                <label for="answer${index}">${answer.text}</label>
            `;
            option.addEventListener('change', () => selectMultiAnswer());
            optionsContainer.appendChild(option);
        });
    }
    
    // Restore previous answers if going back
    if (userAnswers[question.id]) {
        restorePreviousAnswer(question);
    }
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Select single answer
function selectSingleAnswer(index) {
    const question = quizData.questions[currentQuestionIndex];
    const radio = document.getElementById(`answer${index}`);
    radio.checked = true;
    
    // Clear other selections
    document.querySelectorAll(`input[name="question${question.id}"]`).forEach(input => {
        if (input !== radio) input.checked = false;
    });
    
    // Store answer
    userAnswers[question.id] = {
        type: 'single',
        value: index,
        score: question.answers[index].value
    };
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

// Select multiple answers
function selectMultiAnswer() {
    const question = quizData.questions[currentQuestionIndex];
    const checkboxes = document.querySelectorAll(`input[name="question${question.id}"]:checked`);
    
    if (checkboxes.length > 0) {
        const selectedIndexes = Array.from(checkboxes).map(cb => parseInt(cb.value));
        let score = 0;
        
        question.answers.forEach((answer, index) => {
            if (selectedIndexes.includes(index)) {
                score += answer.selectedValue;
            } else {
                score += answer.unselectedValue;
            }
        });
        
        userAnswers[question.id] = {
            type: 'multi',
            values: selectedIndexes,
            score: score
        };
        
        document.getElementById('nextBtn').disabled = false;
    } else {
        document.getElementById('nextBtn').disabled = true;
    }
}

// Restore previous answer
function restorePreviousAnswer(question) {
    const answer = userAnswers[question.id];
    
    if (answer.type === 'single') {
        document.getElementById(`answer${answer.value}`).checked = true;
    } else if (answer.type === 'multi') {
        answer.values.forEach(index => {
            document.getElementById(`answer${index}`).checked = true;
        });
    }
    
    document.getElementById('nextBtn').disabled = false;
}

// Navigate to next question
function nextQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    
    // Check if current question is answered
    if (!userAnswers[question.id]) {
        alert('Please answer this question before proceeding.');
        return;
    }
    
    // Handle branching logic
    if (question.branching && userAnswers[question.id]) {
        const answer = question.answers[userAnswers[question.id].value];
        if (question.branching.condition(answer)) {
            // Continue to next question normally
            currentQuestionIndex++;
        } else {
            // Skip to specified question
            const skipToIndex = quizData.questions.findIndex(q => q.id === question.branching.skipTo);
            if (skipToIndex !== -1) {
                currentQuestionIndex = skipToIndex;
            } else {
                currentQuestionIndex++;
            }
        }
    } else {
        currentQuestionIndex++;
    }
    
    if (currentQuestionIndex >= quizData.questions.length) {
        // Check if all questions are answered before showing results
        const allQuestionsAnswered = quizData.questions.every(q => userAnswers[q.id]);
        
        if (!allQuestionsAnswered) {
            // Find first unanswered question
            const unansweredIndex = quizData.questions.findIndex(q => !userAnswers[q.id]);
            currentQuestionIndex = unansweredIndex;
            displayQuestion();
            updateProgress();
            alert('Please answer all questions before viewing results.');
            return;
        }
        
        // Quiz completed, show results directly
        calculateResults();
        showResults();
    } else if (currentQuestionIndex < 0) {
        // Invalid index, reset to 0
        currentQuestionIndex = 0;
        displayQuestion();
        updateProgress();
    } else {
        // Normal question display
        displayQuestion();
        updateProgress();
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    backBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    nextBtn.textContent = currentQuestionIndex === quizData.questions.length - 1 ? 'See Results' : 'Next';
}

// Update progress
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${quizData.questions.length}`;
    
    // Calculate estimated time remaining based on progress
    const questionsRemaining = quizData.questions.length - currentQuestionIndex;
    const avgSecondsPerQuestion = 25; // Average 25 seconds per question
    const totalSecondsRemaining = questionsRemaining * avgSecondsPerQuestion;
    const minutesRemaining = Math.ceil(totalSecondsRemaining / 60);
    
    const remainingText = minutesRemaining === 1 ? '1 minute left' : `${minutesRemaining} minutes left`;
    document.getElementById('timeRemaining').textContent = remainingText;
}

// Calculate results
function calculateResults() {
    // Initialize section scores
    quizData.sections.forEach(section => {
        sectionScores[section.id] = {
            score: 0,
            maxScore: 0,
            count: 0
        };
    });
    
    // Calculate section scores (simple sum for new scoring system)
    totalScore = 0;
    quizData.questions.forEach(question => {
        if (userAnswers[question.id]) {
            const section = sectionScores[question.section];
            section.score += userAnswers[question.id].score;
            section.count++;
            section.maxScore += 4; // Max score per question is now 4
            totalScore += userAnswers[question.id].score; // Direct sum of all scores
        }
    });
    
    // Total score is now the direct sum of all answer values (10-20 range)
}

// Display what the risk means for the user
function displayRiskMeaning(riskLevel) {
    const riskDetails = document.getElementById('riskDetails');
    
    if (riskLevel.label === 'Critical Audit Risk') {
        riskDetails.innerHTML = `
            <div class="risk-meaning-card critical-risk">
                <div class="risk-status-badge critical">
                    <span class="badge-icon">🚨</span>
                    <span class="badge-text">CRITICAL AUDIT RISK</span>
                </div>
                
                <div class="risk-impacts">
                    <div class="impact-item">
                        <div class="impact-icon">⚡</div>
                        <div class="impact-content">
                            <h4>Audit Risk: <span class="highlight-red">GUARANTEED</span></h4>
                            <p>95% chance of triggering an IRS audit within 12 months</p>
                        </div>
                    </div>
                    
                    <div class="impact-item">
                        <div class="impact-icon">💰</div>
                        <div class="impact-content">
                            <h4>Financial Exposure: <span class="highlight-red">$50,000 - $100,000+</span></h4>
                            <p>Catastrophic penalties and back taxes likely</p>
                        </div>
                    </div>
                    
                    <div class="impact-item">
                        <div class="impact-icon">⏰</div>
                        <div class="impact-content">
                            <h4>Action Required: <span class="highlight-red">IMMEDIATELY</span></h4>
                            <p>Every day of delay increases your liability</p>
                        </div>
                    </div>
                </div>
                
                <div class="risk-summary">
                    <p class="summary-text">You're practically guaranteed to face an audit. Every answer indicates major compliance failures. Seek professional help immediately.</p>
                </div>
            </div>
        `;
    } else if (riskLevel.label === 'High Audit Risk') {
        riskDetails.innerHTML = `
            <div class="risk-meaning-card high-risk">
                <div class="risk-status-badge critical">
                    <span class="badge-icon">🚨</span>
                    <span class="badge-text">CRITICAL RISK LEVEL</span>
                </div>
                
                <div class="risk-impacts">
                    <div class="impact-item">
                        <div class="impact-icon">⚡</div>
                        <div class="impact-content">
                            <h4>Audit Risk: <span class="highlight-red">VERY HIGH</span></h4>
                            <p>73% chance of triggering an IRS audit based on your current practices</p>
                        </div>
                    </div>
                    
                    <div class="impact-item">
                        <div class="impact-icon">💰</div>
                        <div class="impact-content">
                            <h4>Financial Exposure: <span class="highlight-red">$10,000 - $50,000+</span></h4>
                            <p>Potential penalties and back taxes you could face</p>
                        </div>
                    </div>
                    
                    <div class="impact-item">
                        <div class="impact-icon">⏰</div>
                        <div class="impact-content">
                            <h4>Action Required: <span class="highlight-red">WITHIN 30 DAYS</span></h4>
                            <p>Critical compliance gaps need immediate attention</p>
                        </div>
                    </div>
                </div>
                
                <div class="risk-summary">
                    <p class="summary-text">Your business is operating with significant compliance vulnerabilities that put you at immediate risk of costly audits and penalties.</p>
                </div>
            </div>
        `;
    } else {
        riskDetails.innerHTML = `
            <div class="risk-meaning-card medium-risk">
                <div class="risk-status-badge warning">
                    <span class="badge-icon">⚠️</span>
                    <span class="badge-text">MEDIUM AUDIT RISK</span>
                </div>
                
                <div class="risk-impacts">
                    <div class="impact-item">
                        <div class="impact-icon">⚡</div>
                        <div class="impact-content">
                            <h4>Audit Risk: <span class="highlight-yellow">MODERATE</span></h4>
                            <p>45% chance of compliance issues escalating without intervention</p>
                        </div>
                    </div>
                    
                    <div class="impact-item">
                        <div class="impact-icon">💰</div>
                        <div class="impact-content">
                            <h4>Financial Exposure: <span class="highlight-yellow">$5,000 - $25,000</span></h4>
                            <p>Potential penalties if issues aren't addressed</p>
                        </div>
                    </div>
                    
                    <div class="impact-item">
                        <div class="impact-icon">⏰</div>
                        <div class="impact-content">
                            <h4>Action Required: <span class="highlight-yellow">WITHIN 60 DAYS</span></h4>
                            <p>Address these issues before they become critical</p>
                        </div>
                    </div>
                </div>
                
                <div class="risk-summary">
                    <p class="summary-text">Your business has compliance gaps that need attention. Taking action now can prevent these from becoming serious problems.</p>
                </div>
            </div>
        `;
    }
}

// Submit consultation form
function submitConsultForm(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = {
        email: document.getElementById('consultEmail').value,
        name: document.getElementById('consultName').value,
        company: document.getElementById('consultCompany').value,
        phone: document.getElementById('consultPhone').value,
        score: totalScore,
        riskLevel: getRiskLevel(totalScore).label,
        sectionScores: sectionScores,
        timestamp: new Date().toISOString()
    };
    
    // In production, send to backend API
    console.log('Consultation request:', formData);
    
    // Store locally for demo
    localStorage.setItem('complianceConsultation', JSON.stringify(formData));
    
    // Show thank you page
    showScreen('thankYouScreen');
}

// Show results screen
function showResults() {
    showScreen('resultsScreen');
    // Hide progress bar on results
    document.getElementById('progressContainer').style.display = 'none';
    
    // Check for critical D answers on Q1 or Q2
    const hasCriticalFlags = checkCriticalFlags();
    
    // Get risk level
    const riskLevel = getRiskLevel(totalScore);
    
    // Display score indicator (red for critical/high, yellow for medium)
    const scoreIndicator = document.getElementById('scoreIndicator');
    let riskIcon;
    if (riskLevel.label === 'Critical Audit Risk') {
        riskIcon = '🚨';
    } else if (riskLevel.label === 'High Audit Risk') {
        riskIcon = '🔴';
    } else {
        riskIcon = '🟡';
    }
    scoreIndicator.innerHTML = `<span style="font-size: 72px;">${riskIcon}</span>`;
    
    // Display score (now out of 25 instead of 20)
    document.getElementById('finalScore').textContent = `${totalScore}/25`;
    
    // Display risk level
    document.getElementById('riskLevel').textContent = riskLevel.label;
    document.getElementById('riskLevel').style.color = riskLevel.color;
    document.getElementById('riskMessage').textContent = riskLevel.message;
    
    // Display critical alert if needed
    if (hasCriticalFlags) {
        displayCriticalAlert();
    }
    
    // Display what this means
    displayRiskMeaning(riskLevel);
    
    // Display category breakdown
    displayCategoryBreakdown();
}

// Check for critical D answers on Q1 or Q2
function checkCriticalFlags() {
    // Check if user selected D answer (index 3) on question 1 or 2
    const q1Answer = userAnswers[1];
    const q2Answer = userAnswers[2];
    
    return (q1Answer && q1Answer.value === 3) || (q2Answer && q2Answer.value === 3);
}

// Display critical alert for D answers on Q1 or Q2
function displayCriticalAlert() {
    const riskDetails = document.getElementById('riskDetails');
    const alertHtml = `
        <div class="critical-alert">
            <div class="alert-header">
                <span class="alert-icon">⚠️</span>
                <span class="alert-title">IMMEDIATE ATTENTION REQUIRED</span>
            </div>
            <p class="alert-message">Your answers on employee classification and/or tax deposits are automatic audit triggers regardless of your total score.</p>
        </div>
    `;
    // Prepend the alert to the risk details
    riskDetails.innerHTML = alertHtml + riskDetails.innerHTML;
}

// Get risk level based on score
function getRiskLevel(score) {
    for (const [key, level] of Object.entries(quizData.riskLevels)) {
        if (score >= level.min && score <= level.max) {
            return level;
        }
    }
    return quizData.riskLevels.moderate;
}

// Display category breakdown
function displayCategoryBreakdown() {
    const container = document.getElementById('categoryBreakdown');
    container.innerHTML = '';
    
    // Sort sections by risk score
    const sortedSections = quizData.sections
        .map(section => {
            const sectionData = sectionScores[section.id];
            // For new scoring: each question is 2-4 points
            const normalizedScore = sectionData.count > 0 
                ? sectionData.score
                : 0;
            
            let riskLevel, riskLabel, riskClass;
            if (normalizedScore >= 4) {
                riskLevel = '🔴';
                riskLabel = 'HIGH RISK';
                riskClass = 'high-risk';
            } else if (normalizedScore >= 3) {
                riskLevel = '🟡';
                riskLabel = 'MEDIUM RISK';
                riskClass = 'medium-risk';
            } else {
                riskLevel = '🟢';
                riskLabel = 'LOW RISK';
                riskClass = 'low-risk';
            }
            
            return {
                ...section,
                normalizedScore,
                riskLevel,
                riskLabel,
                riskClass
            };
        })
        .sort((a, b) => b.normalizedScore - a.normalizedScore);
    
    sortedSections.forEach((section, index) => {
        const card = document.createElement('div');
        card.className = `category-card ${section.riskClass}`;
        card.innerHTML = `
            <div class="category-header">
                <span class="risk-indicator">${section.riskLevel}</span>
                <h3>${section.name}</h3>
            </div>
            <div class="category-score">
                <div class="risk-meter">
                    <span class="risk-label">${section.riskLabel}</span>
                    <div class="risk-bar">
                        <div class="risk-bar-fill" style="width: ${(section.normalizedScore / 4) * 100}%"></div>
                    </div>
                </div>
                <span class="penalty-range">Potential Penalties: ${section.penaltyRange}</span>
            </div>
            <div class="priority-label">Priority #${index + 1}</div>
        `;
        container.appendChild(card);
    });
}

// Removed immediate actions function  
// Display immediate actions
function displayImmediateActions() {
    const container = document.getElementById('immediateActions');
    container.innerHTML = '<h2>🚨 IMMEDIATE ACTION REQUIRED</h2>';
    
    // Get top 3 highest risk categories
    const topRisks = quizData.sections
        .map(section => {
            const sectionData = sectionScores[section.id];
            const normalizedScore = sectionData.count > 0 
                ? (sectionData.score / sectionData.maxScore) * 10
                : 0;
            return {
                section: section.id,
                score: normalizedScore,
                action: quizData.immediateActions[section.id]
            };
        })
        .filter(item => item.score > 5)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    
    const actionsList = document.createElement('div');
    actionsList.className = 'actions-list';
    
    topRisks.forEach((risk, index) => {
        const actionItem = document.createElement('div');
        actionItem.className = 'action-item';
        actionItem.innerHTML = `
            <div class="action-number">${index + 1}</div>
            <div class="action-details">
                <h4>${risk.action.title}</h4>
                <p class="risk-stat">Risk: ${risk.action.risk}</p>
                <p class="action-text">Action: ${risk.action.action}</p>
                <p class="deadline">Deadline: ${risk.action.deadline}</p>
            </div>
        `;
        actionsList.appendChild(actionItem);
    });
    
    container.appendChild(actionsList);
}

// Removed industry comparison function
// Update industry comparison
function updateIndustryComparison() {
    const yourScoreBar = document.getElementById('yourScoreBar');
    const yourScoreValue = document.getElementById('yourScoreValue');
    const comparisonMessage = document.getElementById('comparisonMessage');
    
    // Convert score to percentage for display (10-20 range mapped to 50-100%)
    const displayPercent = ((totalScore - 10) / 10) * 50 + 50;
    yourScoreBar.style.width = `${displayPercent}%`;
    yourScoreValue.textContent = `${totalScore}/20`;
    
    // Calculate percentile based on new scoring
    let percentile;
    if (totalScore <= 12) {
        percentile = 'top 50%';
    } else if (totalScore <= 14) {
        percentile = 'bottom 50%';
    } else if (totalScore <= 17) {
        percentile = 'bottom 30%';
    } else {
        percentile = 'bottom 10%';
    }
    
    if (totalScore >= 15) {
        comparisonMessage.textContent = `You're in the ${percentile} highest risk businesses in your industry. The good news? This is 100% fixable.`;
    } else {
        comparisonMessage.textContent = `You have moderate compliance risks that need attention. Taking action now can prevent serious issues later.`;
    }
}

// Show/hide screens
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Schedule consultation
function scheduleConsultation() {
    // In production, this would open a scheduling widget or redirect
    window.open('https://calendly.com/accrue-compliance-review', '_blank');
}

// Download action plan
function downloadActionPlan() {
    // In production, this would generate and download a PDF
    alert('Your personalized action plan is being generated and will be emailed to you shortly.');
}

// Auto-save progress - REMOVED since we always start fresh
// function saveProgress() {
//     const progressData = {
//         currentQuestionIndex,
//         userAnswers,
//         startTime
//     };
//     localStorage.setItem('complianceQuizProgress', JSON.stringify(progressData));
// }

// Load saved progress - REMOVED since we always start fresh
// function loadProgress() {
//     const saved = localStorage.getItem('complianceQuizProgress');
//     if (saved) {
//         const progressData = JSON.parse(saved);
//         currentQuestionIndex = progressData.currentQuestionIndex;
//         userAnswers = progressData.userAnswers;
//         startTime = progressData.startTime;
//         return true;
//     }
//     return false;
// }

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Verify quiz data loaded
    if (typeof quizData === 'undefined') {
        console.error('Quiz data not loaded! Check quiz-data.js');
        alert('Error: Quiz data failed to load. Please refresh the page.');
        return;
    }
    
    console.log('Quiz data loaded successfully:', quizData);
    
    // Clear any saved progress - always start fresh
    localStorage.removeItem('complianceQuizProgress');
    localStorage.removeItem('complianceQuizLead');
    
    // Initialize quiz state
    initializeQuiz();
});